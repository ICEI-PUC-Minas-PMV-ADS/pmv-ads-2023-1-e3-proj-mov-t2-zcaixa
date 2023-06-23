import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../componentes/Estilos';
import { useUser } from '../contexts/UserContext';
import SelectDropdown from 'react-native-select-dropdown';
import { TextInputMask } from 'react-native-masked-text';
import { getLancamento, UpdateLancamento, DeleteLancamento} from '../services/lancamentos.services';
import { getCategoriasUsuario } from '../services/categorias.services';

const LancamentoEdit = ({ setTelaAtiva }: { setTelaAtiva: (tela: string) => void }) => {
  const { username, lancamento } = useUser();
  const [id, setId] = useState(0);
  const [tipo, setTipo] = useState('');
  const [data, setData] = useState('');
  const [dataObject, setDataObject] = useState<string | Date>('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [conciliado, setConciliado] = useState(false);
  const [catId, setCatId] = useState(0);
  const [catNome, setCatNome] = useState('');
  const [categorias, setCategorias] = useState([]);
  


  let dataformatado = data?.toString();

  const formatDateToString = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;

    return `${formattedDay}/${formattedMonth}/${year}`;
  };


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
  
  
  const handleDeleteLan = () => {
    Alert.alert(
      'Deletar Lançamento',
      'Tem certeza que deseja deletar o lançamento?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            DeleteLancamento({ lancamentoId: id })
              .then((res) => {
                console.log(res);
  
                if (!res) {
                  Alert.alert('Atenção', 'Lançamento deletado com sucesso!', [
                    {
                      text: 'OK',
                    },
                  ]);
                  setTelaAtiva('caixa');
                } else {
                  Alert.alert(
                    'Atenção',
                    'Lançamento não deletado! Tente novamente mais tarde.'
                  );
                }
              })
              .catch((error) => {
                console.error('Erro ao registrar lançamento:', error);
                Alert.alert('Erro', 'Ocorreu um erro ao registrar o lançamento.');
              });
          },
        },
      ]
    );
  };
  


  const fetchGetLancamento = async () => {
    try {
      const lancamentoEncontrado = await getLancamento(username, lancamento);
      setId(lancamentoEncontrado.id);
      setTipo(lancamentoEncontrado.tipo);
      setData(formatDateToString(lancamentoEncontrado.data.toString()));
      setDescricao(lancamentoEncontrado.descricao);
      setValor(lancamentoEncontrado.valor.toString());
      setConciliado(lancamentoEncontrado.conciliado);
      setCatId(lancamentoEncontrado.catId);
      setCatNome(lancamentoEncontrado.cat.nome);
    } catch (error) {
      console.error('Erro ao buscar as categorias do usuário:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao buscar as categorias do usuário.');
    }
  };

  useEffect(() => {
    fetchGetLancamento();
  }, []);

  useEffect(() => {
    const formatDate = (dateString: string) => {
      const [year, month, day] = dateString.split('-');
      return `${day}/${month}/${year}`;
    };

    setDataObject(formatDate(data));
  }, [data]);

  
  

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
    const categoriaSelecionada = categorias.find((categoria) => categoria.nome === catNome);
    if (categoriaSelecionada) {
      setCatId(categoriaSelecionada.id);
    }
  }, [catNome, categorias]);

  const unmaskedValue = valor.replace(/[^\d,]/g, ''); // Mantém apenas dígitos e vírgula

const parsedValor = parseFloat(unmaskedValue.replace(',', '.'));
const formattedValor = parsedValor.toFixed(2);


  const handleUpdateLan = () => {
    const convertedDataObject = JSON.stringify(dataObject);
    let tipoSelecionado = tipo;

    if (!data || !tipo || !descricao || !tipo || !valor || !catId) {
      Alert.alert('Atenção!', 'Preencha os campos obrigatórios.');
      return null;
    }

    const convertedCat = parseFloat(catId);

    if (tipo === 'Crédito') {
      tipoSelecionado = 'C';
    } else if (tipo === 'Débito') {
      tipoSelecionado = 'D';
    }

    UpdateLancamento({
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

        if (!res) {
          Alert.alert('Atenção', 'Lançamento atualizado com sucesso!', [
            {
              text: 'OK',
            },
          ]);
          setTelaAtiva('caixa');
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
        <Text style={styles.pagLancamentosTitulos}>Editando um{'\n'}Lançamento</Text>
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
          defaultButtonText={catNome || 'Selecione a categoria'} // Define o valor inicial do dropdown como catNome ou 'Selecione a categoria'
          data={categorias.map((categoria) => categoria.nome)}
          onSelect={(selectedItem, index) => {
            const selectedCategoria = categorias[index];
            setCatId(selectedCategoria.id);
            setCatNome(selectedCategoria.nome);
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
    suffixUnit: '',
  }}
  value={valor}
  onChangeText={(text) => setValor(text)}
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

        <TouchableOpacity style={styles.cadastroBotao} onPress={handleUpdateLan}>
          <Text style={styles.Textobotao}>Atualizar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSair2} onPress={handleDeleteLan}>
          <Text style={styles.TextobotaoSair}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LancamentoEdit;