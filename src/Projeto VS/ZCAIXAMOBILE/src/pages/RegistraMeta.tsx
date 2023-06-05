import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../componentes/Estilos';
import {useUser} from '../contexts/UserContext';



const RegistraMeta = () => {

  const {username} = useUser();
  const id = 0;
  const [nome,setNome] = useState('');
  const [tipo, setTipo] = useState('');
  

  return (        

      <View style={styles.Body}>
       <View style={styles.pagLancamentosTitArea}>
        <Text style={styles.pagLancamentosTitulos}>Adicionando uma{'\n'}Meta</Text>
       </View>
        
        

      </View>
    

  )

}



export default RegistraMeta;