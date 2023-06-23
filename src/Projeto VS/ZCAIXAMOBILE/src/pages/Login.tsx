import React, {useState, useRef, useEffect} from 'react'
import {View, Text, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';
import {styles} from '../componentes/Estilos'
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';
import {login} from '../services/auth.services';
import { getLancamentosUsuario } from '../services/lancamentos.services';



const Login = () => {

  const navigation = useNavigation();
  const {setSigned, setName, setUsername, setMeta, setAnoConsulta, setMesConsulta, setUltimoNome, setDataNascimento, setEmail, setTelefone, setSenha, setLancamentos, anoConsulta, mesConsulta, username} = useUser();
  const SenhaRef = useRef<TextInput>(null);

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {

    

      var usuarioembranco:(boolean) = false;
      setLoading(true);
    login({

      username: usuario,
      senha: password

    }).then( res => {           

          if(res != null){
          setSigned(true);
          setName(res.nome);
          setUsername(res.username);
          setMeta(res.meta);
          setAnoConsulta(res.anoConsulta);
          setMesConsulta(res.mesConsulta);
          setUltimoNome(res.ultimoNome);
          setEmail(res.email);
          setDataNascimento(res.dataNascimento);
          setTelefone(res.telefone);
          setSenha(res.senha);

          getLancamentosUsuario(res.username, res.anoConsulta, res.mesConsulta)
            .then((lancamentos) => {
              setLancamentos(lancamentos);
            })
            .catch((error) => {
              console.error('Erro ao obter lançamentos do usuário:', error);
            });
                      

        }else{
          setLoading(false);
          Alert.alert('Atenção', 'Usuário ou senha inválidos!');
        }

          });
        }

        const handleEmailSubmit = () => {
          SenhaRef.current?.focus();
        };
      

        const handleSenhaSubmit = () => {
          handleLogin();
        };

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
        <Text style={styles.textoLoginarea}>Usuário</Text>
        <TextInput value={usuario} onChangeText={(text) => setUsuario(text)} returnKeyType='next' onSubmitEditing={handleEmailSubmit} style={styles.inputLogin}/>

        <Text style={styles.textoLoginarea}>Senha</Text>
        <TextInput ref={SenhaRef} secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} onSubmitEditing={handleSenhaSubmit} returnKeyType='done' autoCorrect={false} style={styles.inputLogin} />
        <TouchableOpacity onPress={() => navigation.navigate('recuperasenha' as never)}>
        <Text style={styles.textoRecuperaSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        </View>
          </View>



        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
            {loading ? (
              <ActivityIndicator size='large' color="#47525E" />
            ) : (
              <Text style={styles.Textobotao}>Entrar</Text>
            )}
          </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('cadastro' as never)}>
        <Text style={styles.TextoCadastroLogin}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>


      </View>
      </ScrollView>
    </View>
    
  )

}

export default Login;