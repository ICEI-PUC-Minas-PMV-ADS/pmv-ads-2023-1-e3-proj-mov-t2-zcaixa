import React, {useState, useEffect, useRef} from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView, Alert, ActivityIndicator} from 'react-native';
import MaskInput from 'react-native-mask-input';
import { styles } from '../componentes/Estilos'
import { useNavigation } from '@react-navigation/native';
import {register} from '../services/auth.services'


const Cadastro = () => {
  
  const navigation = useNavigation();
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateObject, setDateObject] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const confirmSenhaRef = useRef<TextInput>(null);
  const NomeRef = useRef<TextInput>(null);
  const ultimoNomeRef = useRef<TextInput>(null);
  const UsernameRef = useRef<TextInput>(null);
  const EmailRef = useRef<TextInput>(null);
  const DatNascRef = useRef<TextInput>(null);
  const TelefoneRef = useRef<TextInput>(null);
  const SenhaRef = useRef<TextInput>(null);

  useEffect(() => {
    const unmaskedText = date.replace(/[^\d]/g, '');
    const day = unmaskedText.slice(0, 2);
    const month = unmaskedText.slice(2, 4);
    const year = unmaskedText.slice(4, 8);
    const parsedDate = new Date(`${year}-${month}-${day}`);
    
    setDateObject(isNaN(parsedDate.getTime()) ? null : parsedDate);
  }, [date]);

  const mensagemusuario = 'Usuário Já cadastrado, tente outro.';

  const handleRegister = () => {

    // Verificar se os campos obrigatórios estão preenchidos
    if (!name || !lastName || !username || !email || !date || !phone || !password) {
    Alert.alert('Atenção', 'Preencha todos os campos obrigatórios');
    return;
  }

  if (phone.length < 11){
    Alert.alert('Atenção', 'o telefone está incorreto.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Alert.alert('Atenção', 'Digite um endereço de e-mail válido');
    return;
  }

  if (password != confirmPassword){
    Alert.alert('Atenção', 'As senhas inseridas não conferem.');
    return;
  }


    const meta = 0;
    const mesConsulta = 0;
    const anoConsulta = 0;

    setLoading(true);

    register({
      nome: name,
      ultimoNome: lastName,
      email: email,
      username: username,
      senha: password,
      telefone: phone,
      dataNascimento: dateObject,
      meta: meta,
      mesConsulta: mesConsulta,
      anoConsulta: anoConsulta

      
      
    }).then( res => {
       console.log(res);

       if(res == mensagemusuario){
        Alert.alert('Usuário Já cadastrado, tente outro.')
        setLoading(false); // Desativar o estado de carregamento
        return;
       }

        if(res){
          
            setLoading(false); // Desativar o estado de carregamento
         
          Alert.alert('Atenção', 'Usuário cadastrado com sucesso!',
          [
            {
              text: "OK",
              onPress: () => navigation.navigate('login' as never)
            }
          ]);

        }else{
          setLoading(false); // Desativar o estado de carregamento
          Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde.');

        }

          });
          

  } 

  const handleConfirmSenhaSubmit = () => {
    handleRegister();
  };

  const handleNomeSubmit = () => {
    ultimoNomeRef.current?.focus();
  };

  const handleUltNomeSubmit = () => {
    UsernameRef.current?.focus();
  };

  const handleUsernameSubmit = () => {
    EmailRef.current?.focus();
  };

  const handleEmailSubmit = () => {
    DatNascRef.current?.focus();
  };

  const handleDatNascSubmit = () => {
    TelefoneRef.current?.focus();
  };

  const handleTelefoneSubmit = () => {
    SenhaRef.current?.focus();
  };

  const handleSenhaSubmit = () => {
    confirmSenhaRef.current?.focus();
  };


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
          <TextInput  value={name} onChangeText={(text) => setName(text)} returnKeyType='next' onSubmitEditing={handleNomeSubmit} style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Último nome *</Text>
          <TextInput ref={ultimoNomeRef} value={lastName} onChangeText={(text) => setLastName(text)} onSubmitEditing={handleUltNomeSubmit} returnKeyType='next' style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Usuário *</Text>
          <TextInput ref={UsernameRef} value={username} onChangeText={(text) => setUsername(text)} onSubmitEditing={handleUsernameSubmit} returnKeyType='next' style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>E-mail *</Text>
          <TextInput ref={EmailRef} value={email} onChangeText={(text) => setEmail(text)} onSubmitEditing={handleEmailSubmit} returnKeyType='next' style={styles.inputLogin} />
          
          <Text style={styles.textoTituloInput}>Data de Nascimento*</Text>
          <TextInput ref={DatNascRef} value={date} onChangeText={(text) => {
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

      setDate(maskedText);
    }
  }}
  maxLength={10}  keyboardType="decimal-pad" onSubmitEditing={handleDatNascSubmit}  placeholder="DD/MM/AAAA" style={styles.inputLogin}/>


           {/* <Text style={styles.textoTituloInput}>Data de Nascimento *</Text>
          <MaskInput  returnKeyType='next' value={date} keyboardType='decimal-pad'
          onChangeText={(masked, unmasked) => { setDate(unmasked); console.log(unmasked); console.log(unmasked);}
          } mask={[ /\d/, /\d/,'/', /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/]}
           placeholder={"DD/MM/AAAA"} style={styles.inputLogin} />  */}

           <Text style={styles.textoTituloInput}>Telefone *</Text>
          <MaskInput ref={TelefoneRef} returnKeyType='next' value={phone} keyboardType='decimal-pad'
          onChangeText={(masked, unmasked) => { setPhone(unmasked); console.log(unmasked); console.log(unmasked);}
          } mask={[ '(', /\d/, /\d/,')',' ', /\d/, /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/]}
           placeholder={"(00) 00000-0000"} onSubmitEditing={handleTelefoneSubmit} style={styles.inputLogin} /> 

          <Text style={styles.textoTituloInput}>Crie uma senha *</Text>
          <TextInput ref={SenhaRef} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} onSubmitEditing={handleSenhaSubmit} returnKeyType='next' style={styles.inputLogin} />

           <Text style={styles.textoTituloInput}>Confirme sua senha *</Text>
          <TextInput ref={confirmSenhaRef} value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} secureTextEntry={true} onSubmitEditing={handleConfirmSenhaSubmit} returnKeyType='done' style={styles.inputLogin} />
           
        </View>



        <TouchableOpacity style={styles.cadastroBotao} onPress={handleRegister}>
            {loading ? (
              <ActivityIndicator size='large' color="#47525E" />
            ) : (
              <Text style={styles.Textobotao}>Cadastrar</Text>
            )}
          </TouchableOpacity>


      </View>
      </ScrollView>
    </View>
    

  )

}

export default Cadastro;