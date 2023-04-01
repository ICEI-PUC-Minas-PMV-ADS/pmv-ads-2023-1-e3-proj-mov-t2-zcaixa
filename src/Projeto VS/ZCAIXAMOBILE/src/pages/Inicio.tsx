import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {styles} from '../componentes/Estilos';

const Inicio = () => {

  return (

    <View >
      <ImageBackground style={styles.fundo} source={require('./../../assets/fundoapp.png')} />

      <View style={styles.Body}>
        <Image style={styles.logomarca}
          source={require('./../../assets/novalogo.png')}
        />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.Textobotao}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.Texto}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>

      </View>
    </View>

  )

}



export default Inicio;