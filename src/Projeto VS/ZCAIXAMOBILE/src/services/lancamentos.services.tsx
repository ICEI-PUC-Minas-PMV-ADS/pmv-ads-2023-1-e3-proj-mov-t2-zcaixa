import API from './webapi.services';
import { BASE_URL } from './urls';
import axios from 'axios';

interface LancamentosParamsRegister {
    id: number;
    tipo: string;
    username: string;
    data:	Date|null;
    descricao: string;
    valor: number,
    conciliado: boolean,	
    catId:number
}

export const registerlancamento = async (param: LancamentosParamsRegister) => { 
    
      try {
        console.log('Dados enviados:', param);

        const response = await API.post(`${BASE_URL}/Lancamentos`, param);
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

}};

// export const getLancamentosUsuarioFiltro = async (username: string, mesSelecionado: number, anoSelecionado: number): Promise<Lancamentos[]> => {
  
  
//     try {
//     const response = await API.get(`${BASE_URL}/Lancamentos`);
//     const lancamentos: Lancamentos[] = response.data;

//     const lancamentosDoUsuario = lancamentos.filter((lancamento) => {
//         if (lancamento.username === username) {
//           const lancamentoMes = lancamento.data?.getMonth() + 1; // Adiciona 1 ao mês pois o JavaScript retorna valores de 0 a 11
//           const lancamentoAno = lancamento.data?.getFullYear();
//           return lancamentoMes === mesSelecionado && lancamentoAno === anoSelecionado;
//         }
//         return false;
//     });
    
    //const lancamentosDoUsuario = lancamentos.filter((lancamentos) => lancamentos.username === username);

//     return lancamentosDoUsuario;
//   } catch (error) {
//     console.error('Ocorreu um erro ao buscar as categorias do usuário:', error);
//     throw new Error('Ocorreu um erro ao buscar as categorias do usuário.');
//   }
// }

interface Lancamentos {
    id: number;
    tipo: string;
    username: string;
    data:	Date|null;
    descricao: string;
    valor: number,
    conciliado: boolean,	
    catId:number
}

export const getLancamentosUsuario = async (username: string): Promise<Lancamentos[]> => {
  try {
    const response = await API.get(`/Lancamentos`);
    const lancamentos: Lancamentos[] = response.data;
    
    const lancamentosDoUsuario = lancamentos.filter((lancamentos) => lancamentos.username === username);

    return lancamentosDoUsuario;
  } catch (error) {
    console.error('Ocorreu um erro ao buscar as categorias do usuário:', error);
    throw new Error('Ocorreu um erro ao buscar as categorias do usuário.');
  }
}

export const getSomaLancamentos = async (username: string): Promise<number> => {
    try {
      const response = await API.get(`/Lancamentos`);
      const lancamentos: Lancamentos[] = response.data;
  
      const somaTotalCred = lancamentos
        .filter((lancamento) => lancamento.username === username && lancamento.tipo === 'C')
        .reduce((soma, lancamento) => soma + lancamento.valor, 0);

        console.log(somaTotalCred);
  
      return somaTotalCred;
    } catch (error) {
      console.error('Erro ao buscar os lançamentos do usuário:', error);
      throw error;
    }
  };

  export const getSomaDebLancamentos = async (username: string): Promise<number> => {
    try {
      const response = await API.get(`/Lancamentos`);
      const lancamentos: Lancamentos[] = response.data;
  
      const somaTotalCred = lancamentos
        .filter((lancamento) => lancamento.username === username && lancamento.tipo === 'D')
        .reduce((soma, lancamento) => soma + lancamento.valor, 0);

        console.log(somaTotalCred);
  
      return somaTotalCred;
    } catch (error) {
      console.error('Erro ao buscar os lançamentos do usuário:', error);
      throw error;
    }
  };

  interface Categoria{
    id: number;
    nome: string;
    tipo: string;
    username: string;
  }

  export const getCategoriasUsuario = async (username: string): Promise<string[]> => {
    try {
      const response = await API.get(`/Categorias`);
      const categorias: Categoria[] = response.data;
  
      const categoriasDoUsuario = categorias
        .filter((categoria) => categoria.username === username)
        .map((categoria) => categoria.nome);
  
      console.log('Categorias do usuário:', categoriasDoUsuario);
  
      return categoriasDoUsuario;
    } catch (error) {
      console.error('Ocorreu um erro ao buscar as categorias do usuário:', error);
      throw new Error('Ocorreu um erro ao buscar as categorias do usuário.');
    }
  };
  
  

  export const getSomaLancamentosPorCategoria = async (username: string, categoria: string): Promise<number> => {
    try {
      const response = await API.get(`/Lancamentos`);
      const lancamentos: Lancamentos[] = response.data;
  
      const somaTotalCategoria = lancamentos
        .filter((lancamento) => lancamento.username === username && lancamento.cat.nome === categoria)
        .reduce((soma, lancamento) => soma + lancamento.valor, 0);
  
      console.log(`Soma total da categoria ${categoria}:`, somaTotalCategoria);
  
      return somaTotalCategoria;
    } catch (error) {
      console.error(`Erro ao buscar os lançamentos da categoria ${categoria} do usuário ${username}:`, error);
      throw error;
    }
  };