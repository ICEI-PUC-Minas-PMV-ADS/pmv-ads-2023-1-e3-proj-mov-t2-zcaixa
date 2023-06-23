import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {styles} from '../componentes/Estilos';
import Resumo from './Resumo';
import MinhaConta from './MinhaConta';
import MeuCaixa from './MeuCaixa';
import RegistraLancamentos from './RegistraLancamentos';
import RegistraCategorias from './RegistraCategorias';
import RegistraMeta from './RegistraMeta';
import Lancamento from './Lancamento'






const Caixa = () => {

 

  const [telaAtiva, setTelaAtiva] = useState('caixa'); 

  const handleSetTelaAtiva = (tela: string) => {
    setTelaAtiva(tela);
  };

  const ativando = () => {
    setTelaAtiva('caixa')
  };

  const renderizarTela = () => {
    if (telaAtiva === 'caixa') {
      return <MeuCaixa setTelaAtiva={handleSetTelaAtiva} />;
    } else if (telaAtiva === 'resumo') {
      return <Resumo />;
    } else if (telaAtiva === 'registralan'){
      return <RegistraLancamentos setTelaAtiva={handleSetTelaAtiva} />;
    }else if (telaAtiva === 'registracat'){
      return <RegistraCategorias />;
    }else if (telaAtiva === 'registrameta'){
      return <RegistraMeta />;
    }else if (telaAtiva === 'lancamentoedit'){
      return <Lancamento setTelaAtiva={handleSetTelaAtiva}/>;
    }
    else {
      return <MinhaConta />;
    }
  };


  return (

    <View style={{flex:1, justifyContent: 'flex-start'}}>
      <View style={{justifyContent: 'flex-start'}}>
      <ImageBackground style={styles.fundo} source={require('./../../assets/fundoapp.png')} />
      <KeyboardAvoidingView contentContainerStyle={{flex:1}} behavior="position" ></KeyboardAvoidingView>
      
      {renderizarTela()}

      
      </View>
    
    <View style={styles.RodapeArea}>
      <View style={styles.CaixaRodape}>

        <View style={styles.RodapeOpcoes}>
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => setTelaAtiva('caixa')}>
        <Image style={styles.rodapeIcone} source={require('../../assets/icone.png')}/>
        <Text style={styles.RodapeTexto}>Meu Caixa</Text>

        </TouchableOpacity>
        </View>

        <View style={styles.RodapeOpcoes}>
        <TouchableOpacity style={{alignItems:'center'}}  onPress={() => setTelaAtiva('resumo')}>
        <Image style={styles.rodapeIcone} source={require('../../assets/resumo-icon.png')}/>
        <Text style={styles.RodapeTexto}>Resumo</Text>

        </TouchableOpacity>
          </View>

        <View style={styles.RodapeOpcoes}>
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => setTelaAtiva('conta')}>
        <Image style={styles.rodapeIconeResumo} source={require('../../assets/user-icon.png')}/>
        <Text style={styles.RodapeTexto1}>Minha Conta</Text>
        </TouchableOpacity>
        </View>

      </View>
      
    </View>
    </View>
    

  )

}



export default Caixa;