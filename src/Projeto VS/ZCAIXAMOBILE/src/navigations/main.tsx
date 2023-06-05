import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Caixa from '../pages/Caixa';
import Resumo from '../pages/Resumo';
import MinhaConta from '../pages/MinhaConta';

const Stack = createNativeStackNavigator();

const Main = () => {
    return (
        
        <Stack.Navigator initialRouteName="caixa">

        <Stack.Screen 
        name="caixa" 
        component={Caixa} 
        options={{
            header:()=> null
            }} 
            />

            <Stack.Screen 
        name="resumo" 
        component={Resumo} 
        options={{
            header:()=> null
            }} 
            />


        <Stack.Screen 
        name="minhaconta" 
        component={MinhaConta} 
        options={{
            header:()=> null
            }} 
            />




        </Stack.Navigator>
    );
};

export default Main;