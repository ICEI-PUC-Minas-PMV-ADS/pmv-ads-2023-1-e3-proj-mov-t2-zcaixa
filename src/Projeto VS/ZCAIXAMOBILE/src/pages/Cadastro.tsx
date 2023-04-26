import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { styles } from '../componentes/Estilos'
import { useNavigation } from '@react-navigation/native';



const Cadastro = () => {

  const navigation = useNavigation();
  const [date, setDate] = React.useState('');
  const [phone, setPhone] = React.useState('');

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
          <TextInput autoFocus={true} returnKeyType='next' style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Último nome *</Text>
          <TextInput autoFocus={true} returnKeyType='next' style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Username *</Text>
          <TextInput autoFocus={true} returnKeyType='next' style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>E-mail *</Text>
          <TextInput autoFocus={true} returnKeyType='next' style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Data de Nascimento *</Text>
          <MaskInput autoFocus={true} returnKeyType='next' value={date} keyboardType='decimal-pad'
          onChangeText={(masked, unmasked) => { setDate(masked); console.log(masked); console.log(unmasked);}
          } mask={[ /\d/, /\d/,'/', /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/]}
           placeholder={"DD/MM/AAAA"} style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Telefone *</Text>
          <MaskInput autoFocus={true} returnKeyType='next' value={phone} keyboardType='decimal-pad'
          onChangeText={(masked, unmasked) => { setPhone(masked); console.log(masked); console.log(unmasked);}

          } mask={[ '(', /\d/, /\d/,')',' ', /\d/, /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/]}
           placeholder={"(00) 00000-0000"} style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Crie uma senha *</Text>
          <TextInput autoFocus={true} secureTextEntry={true} returnKeyType='next' style={styles.inputLogin} />

          <Text style={styles.textoTituloInput}>Confirme sua senha *</Text>
          <TextInput autoFocus={true} secureTextEntry={true} returnKeyType='next' style={styles.inputLogin} />
          
        </View>



        <TouchableOpacity style={styles.cadastroBotao} >
          <Text style={styles.Textobotao}>Cadastrar</Text>
        </TouchableOpacity>


      </View>
      </ScrollView>
    </View>
    

  )

}

export default Cadastro;