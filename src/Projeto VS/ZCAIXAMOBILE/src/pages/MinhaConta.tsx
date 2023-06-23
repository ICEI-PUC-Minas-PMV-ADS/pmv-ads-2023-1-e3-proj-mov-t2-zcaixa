import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {styles} from '../componentes/Estilos';
import {useUser} from '../contexts/UserContext';



const MeuCaixa = () => {

  const { name, username, anoConsulta, mesConsulta, meta, lancamento, setLancamento, setSigned, setUsername, setLancamentos, setMeta, setAnoConsulta, setMesConsulta } = useUser();

  const handleLogout = () => {
    // Resetar todos os estados relacionados ao usuário
    setSigned(false);
    setUsername('');
    setLancamentos([]);
    setMeta(0);
    setAnoConsulta(0);
    setMesConsulta(0);
    setLancamento(0);
  };

  return (
    
    

            

      <View style={styles.Body}>

      <View style={{alignItems:'center', marginTop: 20}}>
              <Text style={{marginTop: 20, fontSize: 20, fontWeight:'500'}}>
               Olá, {name}!
              </Text>
              <Text style={{marginTop: 10, fontSize: 15, fontWeight:'500'}}>
               Você está logado como: {username}.
              </Text>

              <Text>Meta: {meta}</Text>
            </View>

        <Image style={styles.logomarcaMinhaConta}
          source={require('./../../assets/logonova-horizontal.png')}
        />

        <TouchableOpacity 
        style={styles.botaoSair} 
        onPress={handleLogout}>
          <Text style={styles.TextobotaoSair}>Sair</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.TextoDeletar}>Deletar minha conta</Text>
        </TouchableOpacity>


        <Text style={styles.TextoVersao}>Versão Mobile 1.0</Text>

      </View>
    

  )

}



export default MeuCaixa;