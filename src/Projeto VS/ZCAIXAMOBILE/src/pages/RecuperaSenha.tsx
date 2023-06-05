import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { styles } from '../componentes/Estilos'
import { useNavigation } from '@react-navigation/native';



const RecuperaSenha = () => {

  const navigation = useNavigation();
  
  return (

    <View >
   
      <ImageBackground style={styles.fundo} source={require('./../../assets/fundoapp.png')} />
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.botaoVoltar}>←</Text>
      </TouchableOpacity>

      <View style={styles.Body}>

        <View style={styles.cadastroCabecalhoArea}>
          <Image source={require('./../../assets/zcaixa-icon.png')} style={styles.logomarcaCadastro} />
          <Text style={styles.tituloCadastro}>
            Esqueci Minha {'\n'}Senha
          </Text>
        </View>

        <View style={styles.recuperaSenhaSubTitArea}>
          <Text style={styles.recuperaSenhaSubTit}>
            Insira o nome de usuário, e-mail ou telefone que você utilizou no cadastro.
            Você receberá um e-mail com o nome de usuário e senha.
          </Text>
        </View>

        <View>
          <Text style={styles.textoTituloInput}>Usuário, e-mail ou telefone</Text>
          <TextInput autoFocus={true} returnKeyType='next' style={styles.inputLogin} />
        </View>



        <TouchableOpacity style={styles.cadastroBotao} >
          <Text style={styles.Textobotao}>Enviar</Text>
        </TouchableOpacity>


      </View>
      </ScrollView>
    </View>
    

  )

}

export default RecuperaSenha;