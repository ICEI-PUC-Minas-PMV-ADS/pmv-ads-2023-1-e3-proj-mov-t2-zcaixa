import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { styles } from '../componentes/Estilos';
import { useUser } from '../contexts/UserContext';
import SelectDropdown from 'react-native-select-dropdown';
import { registerlancamento} from '../services/lancamentos.services';

const RegistraLan = () => {
  const id = 0;
  const {username} = useUser();
  const [data, setData] = useState('');
  const [dataObject, setDataObject] = useState<Date | null>(null);
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');
  const tipos = ['Crédito', 'Débito']
  const [valor, setValor] = useState('');
  const conciliado = false;
  const [catId, setCatId] = useState('');
  
 
  useEffect(() => {
    const unmaskedText = data.replace(/[^\d]/g, '');
    const day = unmaskedText.slice(0, 2);
    const month = unmaskedText.slice(2, 4);
    const year = unmaskedText.slice(4, 8);
    const parsedDate = new Date(`${year}-${month}-${day}`);
    
    setDataObject(isNaN(parsedDate.getTime()) ? null : parsedDate);
  }, [data]);
   

  

  const handleRegisterLan = () => {
    
    let tipoSelecionado = tipo;

    if(!data || !tipo || !descricao || !tipo || !valor || !catId){
      Alert.alert('Atenção!', 'Preencha os campos obrigatórios.')
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
      data:	dataObject,
      descricao: descricao,	
      tipo: tipoSelecionado,
      valor: convertedValor,
      conciliado: conciliado,	
      username: username,
      catId:convertedCat

    }).then((res) => {
      console.log(res);


      if (res) {
        Alert.alert('Atenção', 'Lançamento efetuado com sucesso!', [
          {
            text: 'OK',
          },
          
        ]);
        
        
        
      } else {
        Alert.alert('Atenção', 'Lançamento não efeuado! Tente novamente mais tarde.');
      }
      
      
    });
    
  };

  
  

  return (

    <View style={styles.Body}>
      <View style={styles.pagLancamentosTitArea}>
        <Text style={styles.pagLancamentosTitulos}>Adicionando uma{'\n'}Categoria</Text>
      </View>

      <View>
        <Text style={styles.textoLoginarea}>Data*</Text>
        
          <TextInput value={data} onChangeText={(text) => {
    if (text.length <= 10) {
      // Remove caracteres não numéricos
      const unmaskedText = text.replace(/[^\d]/g, '');
      let maskedText = '';

      if (unmaskedText.length > 2) {
        // Formata a data no formato "DD/MM/AAAA"
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
  maxLength={10}  keyboardType="decimal-pad" placeholder="DD/MM/AAAA" style={styles.inputLogin}/>


        <Text style={styles.textoLoginarea}>Tipo*</Text>
        <SelectDropdown
          buttonStyle={styles.CaixaDropdownCat}
          buttonTextStyle={{ color: '#47525E', fontWeight: '500' }}
          dropdownIconPosition="right"
          defaultButtonText="Selecione o tipo"
          data={tipos}
          onSelect={(selectedItem, index) => {
            setTipo(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />

        <Text style={styles.textoLoginarea}>Valor*</Text>
        <TextInput
          keyboardType="decimal-pad"
          returnKeyType="next"
          value={valor}
          onChangeText={(text) => setValor(text)}
          style={styles.inputLogin}
        />

        <Text style={styles.textoLoginarea}>Descrição*</Text>
        <TextInput
          returnKeyType="next"
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
          style={styles.inputLogin}
        />

        <Text style={styles.textoLoginarea}>Categoria*</Text>
        <TextInput
          returnKeyType="next"
          value={catId}
          onChangeText={(text) => setCatId(text)}
          style={styles.inputLogin}
          keyboardType="decimal-pad"
        />

        <TouchableOpacity style={styles.cadastroBotao} onPress={handleRegisterLan}>
          <Text style={styles.Textobotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
};

export default RegistraLan;
