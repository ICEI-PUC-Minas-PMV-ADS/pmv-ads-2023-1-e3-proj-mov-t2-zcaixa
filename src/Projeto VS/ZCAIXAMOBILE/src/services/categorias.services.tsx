import API from './webapi.services';
import { BASE_URL } from './urls';
import axios from 'axios';

interface CategoriasParamsRegister {
  id: number;
  nome: string;
  tipo: string;
  username: string;
}

export const registerCategoria = async (param: CategoriasParamsRegister) => {
  const mensagemusuario = 'Categoria já cadastrada, tente outro nome.';

  try {
    const response1 = await API.get(`http://cdsapp02.criadoresdesoftware.com.br:8081/api/Categorias`);
    const categorias = response1.data;
    console.log(categorias);

    const categoriaExistente = categorias.find(
      (categoria: CategoriasParamsRegister) =>
        categoria.username === param.username && categoria.nome === param.nome
    );

    if (categoriaExistente) {
      return mensagemusuario;
    } else {
      try {
        console.log('Dados enviados:', param);

        const response = await API.post(`${BASE_URL}/Categorias`, param);
        console.log(response.request);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const status = error.response?.status;
          const errorMessage = error.response?.data?.error || 'Ocorreu um erro ao realizar a requisição.';
          throw new Error(`Error ${status}: ${errorMessage}`);
        } else {
          throw new Error('Ocorreu um erro ao realizar a requisição.');
        }
      }
    }
  } catch (error) {
    console.error('Ocorreu um erro ao buscar as categorias:', error);
    throw new Error('Ocorreu um erro ao buscar as categorias.');
  }
};

interface Categoria {
  id: number;
  nome: string;
  tipo: string;
  username: string;
}

export const getCategoriasUsuario = async (username: string): Promise<Categoria[]> => {
  try {
    const response = await API.get(`/Categorias`);
    const categorias: Categoria[] = response.data;
    
    const categoriasDoUsuario = categorias.filter((categoria) => categoria.username === username);

    return categoriasDoUsuario;
  } catch (error) {
    console.error('Ocorreu um erro ao buscar as categorias do usuário:', error);
    throw new Error('Ocorreu um erro ao buscar as categorias do usuário.');
  }
};

interface Categoria {
  id: number;
}

export const PegaCat = async (param: Categoria) => {

  try {

    const response = await API.get(`http://cdsapp02.criadoresdesoftware.com.br:8081/api/Categorias/${param.id}`);
    const user = response.data;

    const nomeCat = user.nome;
    
    return nomeCat;
    
  
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
