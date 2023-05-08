import React, {useState} from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { styles } from '../components/Estilos'
import { useNavigation } from '@react-navigation/native';
import {register} from '../services/auth.services'



const Cadastro = () => {

  const navigation = useNavigation();
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');

  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();


  const handleRegister = () => {

    register({
      name: name,
      lastName: lastName,
      email: email,
      username: username,
      password: password

    }).then( res => {
      console.log(res);

        if(res){
          Alert.alert('Atenção', 'Usuário cadastrado com sucesso!')

        }else{
          Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde =D')

        }

          });
          

  } 

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
            Cadastre-se
          </Text>
        </View>

        <View>
            <Text style={styles.cadastroSubTitArea}>
              * Campos Obrigatórios
            </Text>
        </View>
    

        <View>
          <Text style={styles.textoTituloInput}>Nome *</Text>
          <TextInput value={name} onChangeText={(text) => setName(text)} returnKeyType='next' style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Último nome *</Text>
          <TextInput value={lastName} onChangeText={(text) => setLastName(text)} returnKeyType='next' style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Username *</Text>
          <TextInput value={username} onChangeText={(text) => setUsername(text)} returnKeyType='next' style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>E-mail *</Text>
          <TextInput value={email} onChangeText={(text) => setEmail(text)} returnKeyType='next' style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Data de Nascimento *</Text>
          <MaskInput  returnKeyType='next' value={date} keyboardType='decimal-pad'
          onChangeText={(masked, unmasked) => { setDate(masked); console.log(masked); console.log(unmasked);}
          } mask={[ /\d/, /\d/,'/', /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/]}
           placeholder={"DD/MM/AAAA"} style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Telefone *</Text>
          <MaskInput returnKeyType='next' value={phone} keyboardType='decimal-pad'
          onChangeText={(masked, unmasked) => { setPhone(masked); console.log(masked); console.log(unmasked);}

          } mask={[ '(', /\d/, /\d/,')',' ', /\d/, /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/]}
           placeholder={"(00) 00000-0000"} style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Crie uma senha *</Text>
          <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} returnKeyType='next' style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Confirme sua senha *</Text>
          <TextInput value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} secureTextEntry={true} returnKeyType='next' style={styles.inputLogin} />
          
        </View>



        <TouchableOpacity style={styles.cadastroBotao} onPress={handleRegister}>
          <Text style={styles.Textobotao}>Cadastrar</Text>
        </TouchableOpacity>


      </View>
      </ScrollView>
    </View>
    

  )

}

export default Cadastro;