import React from 'react'
import {StyleSheet, PixelRatio} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

    export const styles = StyleSheet.create({

        Body: {

            alignItems: 'center',
            height:'100%',
            paddingBottom:70 
            
        
          },
        
          Texto: {
            color: '#47525E',
            fontWeight: '500',
            fontSize: 16
          },
        
          Textobotao: {
            color: '#47525E',
            fontWeight: '500',
            fontSize: 18
          },

          TextoCadastroLogin:{
            color: '#47525E',
            fontWeight: '500',
            fontSize: 15
          },

          logomarca: {
            resizeMode: 'contain',
            width: 250,
          },
        
          fundo: {
            flex: 1,
            width: 420,
            height: 845,
            resizeMode: 'cover',
            justifyContent: 'center'
          },
        
          botao: {
            alignItems: 'center',
            justifyContent: 'center',
            width: 350,
            height: 50,
            borderRadius: 8,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#959595',
            backgroundColor: '#e1e1e1',
            marginBottom: 25
          },

          cadastroBotao: {
            alignItems: 'center',
            justifyContent: 'center',
            width: 350,
            height: 50,
            borderRadius: 8,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#959595',
            backgroundColor: '#e1e1e1',
            marginBottom: 25,
            marginTop: 25
          },

          campoLoginArea: {
            textAlign: 'left',
            marginTop: 30,
            marginBottom: 30
          },
        
          botaoVoltar:{
            fontSize: 40,
            fontWeight: '700',
            marginLeft: 15
          },
        
          textoLoginarea:{
            fontWeight: '700',
            fontSize: 16
          },
        
          textoRecuperaSenha:{
            fontWeight:'700',
            color: '#399B53',
            fontSize: 15,
            marginTop: 5
        
          },
        
          TextoTitulo: {
        
            color: '#47525E',
            fontWeight: '700',
            fontSize: 30,
            textAlign: 'center',
            marginBottom: 5
          },
        
          TextoSubTitulo: {
        
            color: '#47525E',
            fontWeight: '700',
            fontSize: 16,
            textAlign: 'center'
          },
        
          
          logomarcaLogin: {
            resizeMode: 'contain',
            width:250,
            height: 250
            
          },
            
          inputLogin: {
            width: 350,
            borderStyle: 'solid',
            borderBottomWidth: 1,
            borderColor: '#9F9F9F',
            marginBottom: 5,
            fontSize: 18
          },

          cadastroCabecalhoArea:{
            flexDirection: 'row',
            justifyContent: 'center', 
            alignItems: 'center', 

          },

          tituloCadastro: {
            color: '#47525E',
            fontWeight: '700',
            fontSize: 30,
            textAlign: 'center',
            marginBottom: 5
          },

          cadastroSubTitArea: {
            textAlign: 'left',
          },

          
          logomarcaCadastro: {
            resizeMode: 'contain',
            width: 160,
            height:160,
          },

          textoTituloInput:{
            fontWeight: '700',
            fontSize: 16

          },

          recuperaSenhaSubTitArea:{
            marginTop:30,
            padding: 30,
            marginBottom:60,
          },

          recuperaSenhaSubTit:{
            fontSize: 16,
            textAlign: 'center',
            fontWeight:'500'
          },

          //MeuCaixa

          opcoesbotao:{
            width: '100%',
            alignItems: 'center', 
            height:'33%', 
            justifyContent: 'center',
            
          },

          opcoesbotao2:{
            width: '100%',
            alignItems: 'center', 
            height:'33%', 
            justifyContent: 'center',
            borderBottomColor: '#c4c4c4',
            borderBottomWidth: 1,
             
          },

          textoOpcoesBotoes:{
            fontSize: 18,
            fontWeight: '500',

          },
    

          caixaCabecalho:{
            width: '100%',
            height: 70,
            backgroundColor: '#A7A7A7',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10

          },

          CaixaDropdownFiltro: {
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 50,
            borderRadius: 8,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#959595',
            backgroundColor: '#F2F2F2',
            marginLeft: 5
          },

          CaixaDropdownFiltraOK:{
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 50,
            borderRadius: 8,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#959595',
            backgroundColor: '#73E390',
            
            
          },

          CaixaLancamentosArea:{
            width:'100%',
            
            
          },

          CaixaLancamentos:{
            
            width:'100%',
            flexDirection: 'row',
            justifyContent:'space-between',
            borderBottomColor:'rgba(167,167,167,0.7)',
            borderStyle: 'solid',
            borderBottomWidth:1,
            alignItems: 'center',
            height:50
          },

          LancamentoUniData:{
            justifyContent:'center',
            height:'100%',
            alignItems:'center',
            width:'15%',
          },

          LancamentoUniCategoria:{
            justifyContent:'center',
            height:'100%',
            alignItems:'center',
            width:'25%'
          },

          LancamentoUniDescricao:{
            justifyContent:'center',
            height:'100%',
            alignItems:'center',
            width:'39%'
            
          },

          LancamentoUniValor:{
            justifyContent:'center',
            height:'100%',
            alignItems:'center',
            width:'21%'
          },

          RodapeArea:{
            flex: 1,
            justifyContent: 'flex-end',
            width: '100%',

          },

          CaixaRodape:{
            
            height: 70,
            backgroundColor: 'rgba(167,167,167,0.8)',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'center'
            
          },

          RodapeOpcoes:{
            width:'33.3%',
            alignItems: 'center',
            justifyContent:'center'
          },

          rodapeIcone:{
            alignItems: 'center',
            justifyContent:'center',
            resizeMode:'contain',
            width:40,
            height:40
          },

          rodapeIconeResumo:{
            width:35,
            height:35
          },

          RodapeTexto:{
            fontWeight: '500',
            fontSize: 12,
            color:'#47525E'
          },

          RodapeTexto1:{
            fontWeight: '500',
            fontSize: 12,
            marginTop: 5,
            color:'#47525E'
          },

          //Minha Conta

          logomarcaMinhaConta:{
            width: 300,
            height: 120,
            marginTop: 120,
            marginBottom: 100
          },

          botaoSair:{
            backgroundColor:'#F95F62',
            paddingTop: 20,
            paddingBottom:20,
            paddingLeft:70,
            paddingRight: 70,
            borderRadius: 10

          },

          TextobotaoSair:{
            color:'#FFFFFF',
            fontSize:20,
            fontWeight: '700'
          },

          TextoDeletar:{
            fontSize: 16,
            fontWeight: '700',
            color: '#F95F62',
            marginTop: 150

          },

          TextoVersao:{

            fontSize: 16,
            fontWeight: '700',
            color: '#47525E',
            marginTop: 30
          },

          //Resumo

          ResumoCabecalho:{
            width:'100%',
            backgroundColor: 'rgba(167,167,167,0.7)',
            height: 85,
            alignItems: 'center',
            justifyContent:'center'

          },

          ResumoArea:{
            marginTop: 15,
            width:'93%',
            justifyContent:'flex-start',
            

          },

          ReceitasDespesasArea:{

            backgroundColor: 'rgba(255,255,255,0.7)',
            width:'100%',
            borderRadius:10,
            height: 500,
            marginTop: 10,
            padding: 15,
            flexDirection:'column',
            alignItems:'center'
          },

          ReceitasDespesasTitulos:{
            fontSize: 15,
            fontWeight:'bold'
          },

          ReceitasDespesasConteudo:{
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(167,167,167,0.7)',
            paddingTop: 15,
            paddingBottom: 15
          },

          Receitas:{
            fontSize: 15,
            fontWeight:'bold',
            color: '#5FAE79'
          },

          Despesas:{
            fontSize: 15,
            fontWeight:'bold',
            color: '#F95F62'
          },

          TotalArea:{

            width:'75%',
            flexDirection:'row',
            justifyContent:'space-between',
            paddingTop: 35,
            paddingBottom: 35
          },

          SaldosCategoriasArea:{
            width: '100%',
            flexDirection: 'column',

          },

          SaldosCategoriasCredito:{
            width:'100%',
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(167,167,167,0.7)',
            paddingTop: 15,
            paddingBottom: 15, 
            marginTop: 10,
            
          },

          SaldosCategoriasDebito:{
            width:'100%',
            paddingTop: 15,
            paddingBottom: 15,
            marginTop: 10
          },

          SaldosCategoriasUnitario:{
            marginBottom: 12,
            flexDirection:'row',
            justifyContent:'space-between',
          },

          //Lançamentos

          pagLancamentosTitArea:{
            width:'100%',
            textAlign: 'left',

          },

          pagLancamentosTitulos:{
            fontSize: 30,
            fontWeight: 'bold',
            margin: 20,
            
          },

          CaixaDropdownCat:{
            marginTop: 10,
            width: '80%',
            backgroundColor: 'rgba(167,167,167,0.0)',
            borderStyle: 'solid',
            borderBottomWidth: 1,
            borderColor: '#9F9F9F',
            marginBottom: 5,
            fontSize: 18


          }










          
        

        });







