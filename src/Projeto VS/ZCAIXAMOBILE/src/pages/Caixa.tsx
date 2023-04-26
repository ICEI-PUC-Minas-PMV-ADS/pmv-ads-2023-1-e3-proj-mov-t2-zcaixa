import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import {styles} from '../componentes/Estilos';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';


const Inicio = () => {

  const navigation = useNavigation();
  const year = ['2021', '2022', '2023']
  const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  

  return (
    
    <View >
      <ImageBackground style={styles.fundo} source={require('./../../assets/fundoapp.png')} />

      <View style={styles.Body}>

        <View style={styles.caixaCabecalho}>

          <SelectDropdown buttonStyle={styles.CaixaDropdownFiltro} defaultButtonText='Mês' buttonTextStyle={{color:'#47525E', fontWeight:'500'}} data={month}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
        
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
           
            return item
          }}
        />

          <SelectDropdown buttonStyle={styles.CaixaDropdownFiltro} buttonTextStyle={{color:'#47525E', fontWeight:'500'}} dropdownIconPosition='right' defaultButtonText='Ano' data={year}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
        
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
           
            return item
          }}
        />


        <TouchableOpacity style={styles.CaixaDropdownFiltraOK}>
          <Text style={{fontSize: 18, fontWeight:'500', color: '#47525E'}}>OK</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 50,
            borderRadius: 8,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#959595',
            backgroundColor: '#FFFFFF',
            marginLeft: 22}} >
          <Text style={{fontSize: 18, fontWeight:'500', color: '#47525E'}}>Todos</Text>
        </TouchableOpacity>


        </View>

        <View style={styles.CaixaLancamentosArea}>
          <View style={styles.CaixaLancamentos}>
            <Text style={{fontSize:18, fontWeight: '500'}}>09/02</Text>
            <Text style={{fontSize:15, fontWeight: '500'}}>Salário</Text>
            <Text style={{fontSize:13, fontWeight: '500'}}>Folha de pagamento FEV</Text>
            <Text style={{fontSize:15, color:'#65B161', fontWeight: '500'}}>R$1692,20</Text>
            <TouchableOpacity>
              <Text>:</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.CaixaLancamentos}>
            <Text style={{fontSize:18, fontWeight: '500'}}>09/02</Text>
            <Text style={{fontSize:15, fontWeight: '500'}}>Saúde</Text>
            <Text style={{fontSize:13, fontWeight: '500'}}>Remédios Drogaria Pac...</Text>
            <Text style={{fontSize:15, color:'#F95F62', fontWeight: '500'}}>R$78,00</Text>
            <TouchableOpacity>
              <Text>:</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.CaixaLancamentos}>
            <Text style={{fontSize:18, fontWeight: '500'}}>09/02</Text>
            <Text style={{fontSize:15, fontWeight: '500'}}>Alimentação</Text>
            <Text style={{fontSize:13, fontWeight: '500'}}>Almoço aniversário Vic...</Text>
            <Text style={{fontSize:15, color:'#F95F62', fontWeight: '500'}}>R$48,50</Text>
            <TouchableOpacity>
              <Text>:</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.CaixaLancamentos}>
            <Text style={{fontSize:18, fontWeight: '500'}}>09/02</Text>
            <Text style={{fontSize:15, fontWeight: '500'}}>Freelance</Text>
            <Text style={{fontSize:13, fontWeight: '500'}}>Freela DEV WEB</Text>
            <Text style={{fontSize:15, color:'#65B161', fontWeight: '500'}}>R$800,00</Text>
            <TouchableOpacity>
              <Text>:</Text>
            </TouchableOpacity>
          </View>

        </View>
        

      </View>
    </View>

  )

}



export default Inicio;