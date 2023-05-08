import React, {useState} from 'react'
import {View, Text, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import {styles} from '../components/Estilos'
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';



const Login = () => {

  const navigation = useNavigation();
  const {setSigned} = useUser();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (

    <View >
      <ImageBackground style={styles.fundo} source={require('./../../assets/fundoapp.png')} />
      <ScrollView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.botaoVoltar}>←</Text>
        </TouchableOpacity>
      <View style={styles.Body}>
      <Image style={styles.logomarcaLogin}
          source={require('./../../assets/novalogo.png')}/>

          <View>
        <Text style={styles.TextoTitulo} >Bem Vindo!</Text>
        <Text style={styles.TextoSubTitulo}>Por favor, insira suas credenciais</Text>
          <View style={styles.campoLoginArea}>
        <Text style={styles.textoLoginarea}>E-mail, usuário ou telefone</Text>
        <TextInput value={email} onChangeText={(text) => setEmail(text)} returnKeyType='next' style={styles.inputLogin}/>

        <Text style={styles.textoLoginarea}>Senha</Text>
        <TextInput secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} returnKeyType='go' autoCorrect={false} style={styles.inputLogin} />
        <TouchableOpacity onPress={() => navigation.navigate('recuperasenha')}>
        <Text style={styles.textoRecuperaSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        </View>
          </View>



        <TouchableOpacity style={styles.botao} onPress={() => setSigned(true)}>
          <Text style={styles.Textobotao}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
        <Text style={styles.TextoCadastroLogin}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>
    </View>
    
  )

}

export default Login;