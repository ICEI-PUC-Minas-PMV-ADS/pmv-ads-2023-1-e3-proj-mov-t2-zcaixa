import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../componentes/Estilos';
import { useUser } from '../contexts/UserContext';
import SelectDropdown from 'react-native-select-dropdown';
import { registerlancamento } from '../services/lancamentos.services';
import { getCategoriasUsuario } from '../services/categorias.services';
import { TextInputMask } from 'react-native-masked-text';

const RegistraLan = ({ setTelaAtiva }: { setTelaAtiva: (tela: string) => void }) => {
  const id = 0;
  const { username } = useUser();
  const [data, setData] = useState('');
  const [dataObject, setDataObject] = useState<string | Date>('');
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');
  const tipos = ['Crédito', 'Débito'];
  const [valor, setValor] = useState('');
  const conciliado = false;
  const [categorias, setCategorias] = useState([]);
  const [catId, setCatId] = useState('');

  useEffect(() => {
    const unmaskedText = data.replace(/[^\d]/g, '');
    const day = unmaskedText.slice(0, 2);
    const month = unmaskedText.slice(2, 4);
    const year = unmaskedText.slice(4, 8);
    const parsedDate = new Date(`${year}-${month}-${day}`);

    setDataObject(isNaN(parsedDate.getTime()) ? '' : parsedDate);
  }, [data]);

  useEffect(() => {
    async function fetchCategorias() {
      try {
        const categoriasDoUsuario = await getCategoriasUsuario(username);
        setCategorias(categoriasDoUsuario);
      } catch (error) {
        console.error('Erro ao buscar as categorias do usuário:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao buscar as categorias do usuário.');
      }
    }

    fetchCategorias();
  }, [username]);

  useEffect(() => {
    // Verificar o tipo da categoria selecionada e definir o tipo correspondente
    const categoriaSelecionada = categorias.find((categoria) => categoria.id === parseInt(catId));
    if (categoriaSelecionada) {
      if (categoriaSelecionada.tipo === 'R') {
        setTipo('Crédito');
      } else if (categoriaSelecionada.tipo === 'D') {
        setTipo('Débito');
      }
    }
  }, [catId, categorias]);

  const formattedValor = valor
    .replace(/[^\d.,]/g, '') // Mantém apenas dígitos, vírgula e ponto
    .replace(/\./g, ''); // Remove o separador de milhares

  const parsedValor = parseFloat(formattedValor.replace(',', '.'));

  const handleRegisterLan = () => {
    let tipoSelecionado = tipo;

    if (!data || !tipo || !descricao || !tipo || !valor || !catId) {
      Alert.alert('Atenção!', 'Preencha os campos obrigatórios.');
      return null;
    }

    const convertedValor = parseFloat(valor);
    const convertedCat = parseFloat(catId);

    if (tipo === 'Crédito') {
      tipoSelecionado = 'C';
    } else if (tipo === 'Débito') {
      tipoSelecionado = 'D';
    }

    registerlancamento({
      id: id,
      data: dataObject,
      descricao: descricao,
      tipo: tipoSelecionado,
      valor: parsedValor,
      conciliado: conciliado,
      username: username,
      catId: convertedCat,
    })
      .then((res) => {
        console.log(res);

        if (res) {
          Alert.alert('Atenção', 'Lançamento efetuado com sucesso!', [
            {
              text: 'OK',
            },
            
          ]); setTelaAtiva('caixa');
        } else {
          Alert.alert('Atenção', 'Lançamento não efetuado! Tente novamente mais tarde.');
        }
      })
      .catch((error) => {
        console.error('Erro ao registrar lançamento:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao registrar o lançamento.');
      });
  };

  return (
    <View style={styles.Body}>
      <View style={styles.pagLancamentosTitArea}>
        <Text style={styles.pagLancamentosTitulos}>Adicionando um{'\n'}Lançamento</Text>
      </View>

      <View>
        <Text style={styles.textoLoginarea}>Data*</Text>
        <TextInput
          value={data}
          onChangeText={(text) => {
            if (text.length <= 10) {
              const unmaskedText = text.replace(/[^\d]/g, '');
              let maskedText = '';

              if (unmaskedText.length > 2) {
                maskedText += unmaskedText.substr(0, 2) + '/';
                if (unmaskedText.length > 4) {
                  maskedText += unmaskedText.substr(2, 2) + '/';
                  maskedText += unmaskedText.substr(4, 4);
                } else {
                  maskedText += unmaskedText.substr(2);
                }
              } else {
                maskedText = unmaskedText;
              }

              setData(maskedText);
            }
          }}
          maxLength={10}
          keyboardType="decimal-pad"
          placeholder="DD/MM/AAAA"
          style={styles.inputLogin}
        />

        <Text style={styles.textoLoginarea}>Categoria*</Text>
        <SelectDropdown
          buttonStyle={styles.CaixaDropdownCat}
          buttonTextStyle={{ color: '#47525E', fontWeight: '500' }}
          dropdownIconPosition="right"
          defaultButtonText="Selecione a categoria"
          data={categorias.map((categoria) => categoria.nome)} // Mapeia o array de categorias para obter apenas os nomes
          onSelect={(selectedItem, index) => {
            const selectedCategoria = categorias[index];
            setCatId(selectedCategoria.id.toString());
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />

        <Text style={styles.textoLoginarea}>Tipo*</Text>
        <TextInput
          editable={false}
          value={tipo}
          style={styles.inputLogin}
        />

        <Text style={styles.textoLoginarea}>Valor*</Text>
        <TextInputMask
          type={'money'}
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: ''
          }}
          value={valor}
          onChangeText={(text, rawValue) => setValor(text)}
          style={styles.inputLogin}
          keyboardType="numeric"
        />

        <Text style={styles.textoLoginarea}>Descrição*</Text>
        <TextInput
          returnKeyType="next"
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
          style={styles.inputLogin}
        />

        <TouchableOpacity style={styles.cadastroBotao} onPress={handleRegisterLan}>
          <Text style={styles.Textobotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistraLan;
