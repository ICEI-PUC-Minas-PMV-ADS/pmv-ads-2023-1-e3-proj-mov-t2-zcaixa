import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { styles } from '../componentes/Estilos';
import { useUser } from '../contexts/UserContext';
import SelectDropdown from 'react-native-select-dropdown';
import { registerCategoria, getCategoriasUsuario } from '../services/categorias.services';

const RegistraCat = () => {
  const { username } = useUser();
  const id = 0;
  const [nomeCat, setNomeCat] = useState('');
  const tipos = ['Crédito', 'Débito'];
  const [tipo, setTipo] = useState('');
  const mensagemusuario = 'Categoria já cadastrada, tente outro nome.';
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetchCategoriasUsuario();
  }, []);

  const fetchCategoriasUsuario = async () => {
    try {
      const categoriasUsuario = await getCategoriasUsuario(username);
      setCategorias(categoriasUsuario);
    } catch (error) {
      console.error('Erro ao buscar as categorias do usuário:', error);
    }
  };

  const handleRegisterCat = () => {
    let tipoSelecionado = tipo;

    if(!nomeCat || !tipo){
      Alert.alert('Atenção!', 'Preencha os campos obrigatórios.')
      return null;
    }

    if (tipo === 'Crédito') {
      tipoSelecionado = 'R';
    } else if (tipo === 'Débito') {
      tipoSelecionado = 'D';
    }

    registerCategoria({
      id: id,
      nome: nomeCat,
      tipo: tipoSelecionado,
      username: username,
    }).then((res) => {
      console.log(res);

      if (res == mensagemusuario) {
        Alert.alert('Atenção!', 'Categoria já cadastrada, tente outro nome.');
        return;
      }

      if (res) {
        Alert.alert('Atenção', 'Categoria cadastrada com sucesso!', [
          {
            text: 'OK',
          },
          
        ]);
        fetchCategoriasUsuario();
        
        
      } else {
        Alert.alert('Atenção', 'Categoria não cadastrada! Tente novamente mais tarde.');
      }
      
      
    });
    
  };

  
  

  return (

    <View style={styles.Body}>
      <View style={styles.pagLancamentosTitArea}>
        <Text style={styles.pagLancamentosTitulos}>Adicionando uma{'\n'}Categoria</Text>
      </View>

      <View>
        <Text style={styles.textoLoginarea}>Nome</Text>
        <TextInput
          returnKeyType="next"
          value={nomeCat}
          onChangeText={(text) => setNomeCat(text)}
          style={styles.inputLogin}
        />

        <Text style={styles.textoLoginarea}>Tipo</Text>
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

        <TouchableOpacity style={styles.cadastroBotao} onPress={handleRegisterCat}>
          <Text style={styles.Textobotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      {/* Exibição das categorias */}
      <View style={{width:'100%', marginLeft: 60}}>
        <Text style={styles.textoLoginarea}>Categorias do usuário:</Text>
        {categorias.map((categoria) => (
          <Text key={categoria.id}>{categoria.nome}, {categoria.tipo}, {categoria.id}</Text>
        ))}
      </View>
    </View>
  );
};

export default RegistraCat;
