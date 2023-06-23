import API from './webapi.services';
import {BASE_URL} from './urls'
import axios from 'axios';


interface RegisterParamsRegister {
    
    nome: string;
    ultimoNome: string;
    email: string;
    username: string;
    senha: string;
    telefone: string;
    dataNascimento: Date|string;
    meta: number,
    mesConsulta: number,
    anoConsulta: number
     }
  
  export const register = async (param: RegisterParamsRegister) => {

    const mensagemusuario = 'Usuário Já cadastrado, tente outro.';
    
    try{
    const response1 = await API.get(`http://cdsapp02.criadoresdesoftware.com.br:8081/api/Usuarios/${param.username}`);
    const user = response1.data;
    console.log(user);

    if(user.username == param.username){
      
      return mensagemusuario;
    }

    }catch{


  try {
    console.log('Dados enviados:', param);   

    const response = await API.post(`${BASE_URL}/Usuarios`, param);
    console.log(response.request)
    return response.data;
    
  } catch (error) {
    if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const errorMessage = error.response?.data?.error || 'Ocorreu um erro ao realizar a requisição.';
        throw new Error(`Error ${status}: ${errorMessage}`);
        return null;
      } else {
        throw new Error('Ocorreu um erro ao realizar a requisição.');
        return null;
      }
  }
}};

interface LoginParamsLogin {
    
    username: string;
    senha: string;
    
  }
  
  export const login = async (param: LoginParamsLogin) => {

    var verificaUserSenha: (boolean) = false;

    
      if (!param.username || !param.senha) {
        
        return null;
      }
  
    try {

      const response = await API.get(`http://cdsapp02.criadoresdesoftware.com.br:8081/api/Usuarios/${param.username}`);
      const user = response.data;

      if (param.senha == user.senha) {
        // Verifica se o username ou senha são nulos
        console.log(user)
        return user;
      }
        //throw new Error('Senha incorreta'); // Ou retorne uma resposta adequada para a senha incorreta
      
      return null;
      
  
      
    
  } catch (error) {
    if (axios.isAxiosError(error)) {
        // const status = error.response?.status;
        // const errorMessage = error.response?.data?.error || 'Ocorreu um erro ao realizar a requisição.';
        // throw new Error(`Error ${status}: ${errorMessage}`);
        return null;
      } else {
        // throw new Error('Ocorreu um erro ao realizar a requisição.');
        return null;
      }
  }
    };
