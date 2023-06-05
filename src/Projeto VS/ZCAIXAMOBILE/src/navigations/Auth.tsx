import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import RecuperaSenha from '../pages/RecuperaSenha';


const Stack = createNativeStackNavigator();

const Auth = () => {
    return (
        
        <Stack.Navigator initialRouteName="inicio">
        <Stack.Screen 
        name="inicio" 
        component={Inicio} 
        options={{
            header:()=> null
            }}
            />
        <Stack.Screen 
        name="login" 
        component={Login} 
        options={{
            header:()=> null
            }} 
            />
        <Stack.Screen 
        name="cadastro" 
        component={Cadastro} 
        options={{
            header:()=> null
            }} 
            />

        <Stack.Screen 
        name="recuperasenha" 
        component={RecuperaSenha} 
        options={{
            header:()=> null
            }} 
            />

        </Stack.Navigator>
    );
};

export default Auth;