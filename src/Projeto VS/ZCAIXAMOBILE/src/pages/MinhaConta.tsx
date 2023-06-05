import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {styles} from '../componentes/Estilos';
import {useUser} from '../contexts/UserContext';



const Inicio = () => {

  const {name, setSigned, username, mesConsulta, meta, anoConsulta} = useUser();

  return (
    
    

            

      <View style={styles.Body}>

      <View style={{alignItems:'center', marginTop: 20}}>
              <Text style={{marginTop: 20, fontSize: 20, fontWeight:'500'}}>
               Olá, {name}!
              </Text>
              <Text style={{marginTop: 10, fontSize: 15, fontWeight:'500'}}>
               Você está logado como: {username}.
              </Text>

              <Text>Meta: {meta}, anoConsulta: {anoConsulta}, MesConsulta: {mesConsulta}</Text>
            </View>

        <Image style={styles.logomarcaMinhaConta}
          source={require('./../../assets/logonova-horizontal.png')}
        />

        <TouchableOpacity 
        style={styles.botaoSair} 
        onPress={ () => setSigned(false)}>
          <Text style={styles.TextobotaoSair}>Sair</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.TextoDeletar}>Deletar minha conta</Text>
        </TouchableOpacity>


        <Text style={styles.TextoVersao}>Versão Mobile 1.0</Text>

      </View>
    

  )

}



export default Inicio;