import API from './webapi.services';
import { BASE_URL } from './urls';
import axios from 'axios';

interface LancamentosParamsRegister {
    id: number;
    tipo: string;
    username: string;
    data:	string|Date;
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

export interface Lancamentos {
    id: number;
    tipo: string;
    username: string;
    data:	Date|string;
    descricao: string;
    valor: number,
    conciliado: boolean,	
    catId:number
}

export const getLancamentosUsuario = async (username: string, ano: number, mes: number): Promise<Lancamentos[]> => {
  try {
    const response = await API.get(`/Lancamentos`);
    const lancamentos: Lancamentos[] = response.data;
    
    const lancamentosDoUsuario = lancamentos.filter((lancamento) => lancamento.username === username);

    if (!mes || !ano) {
      return lancamentosDoUsuario.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());
    } else {
      const lancamentosFiltrados = lancamentosDoUsuario.filter((lancamento) => {
        const lancamentoMes = new Date(lancamento.data).getMonth() + 1;
        const lancamentoAno = new Date(lancamento.data).getFullYear();

        return lancamentoMes === mes && lancamentoAno === ano;
      });

      return lancamentosFiltrados.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());
    }
  } catch (error) {
    console.error('Ocorreu um erro ao buscar as categorias do usuário:', error);
    throw new Error('Ocorreu um erro ao buscar as categorias do usuário.');
  }
}


export const getSomaLancamentos = async (username: string, ano?: number, mes?: number): Promise<number> => {
  try {
    const response = await API.get(`/Lancamentos`);
    const lancamentos: Lancamentos[] = response.data;

    let lancamentosFiltrados = lancamentos.filter((lancamento) => lancamento.username === username);
    
    if (ano && mes) {
      lancamentosFiltrados = lancamentosFiltrados.filter((lancamento) => {
        const lancamentoMes = new Date(lancamento.data).getMonth() + 1;
        const lancamentoAno = new Date(lancamento.data).getFullYear();

        return lancamentoMes === mes && lancamentoAno === ano;
      });
    }

    const somaTotalCred = lancamentosFiltrados
      .filter((lancamento) => lancamento.tipo === 'C')
      .reduce((soma, lancamento) => soma + lancamento.valor, 0);

    console.log(somaTotalCred);

    return somaTotalCred;
  } catch (error) {
    console.error('Erro ao buscar os lançamentos do usuário:', error);
    throw error;
  }
};

export const getSomaDebLancamentos = async (username: string, ano?: number, mes?: number): Promise<number> => {
  try {
    const response = await API.get(`/Lancamentos`);
    const lancamentos: Lancamentos[] = response.data;

    let lancamentosFiltrados = lancamentos.filter((lancamento) => lancamento.username === username);

    if (ano && mes) {
      lancamentosFiltrados = lancamentosFiltrados.filter((lancamento) => {
        const lancamentoMes = new Date(lancamento.data).getMonth() + 1;
        const lancamentoAno = new Date(lancamento.data).getFullYear();

        return lancamentoMes === mes && lancamentoAno === ano;
      });
    }

    const somaTotalCred = lancamentosFiltrados
      .filter((lancamento) => lancamento.tipo === 'D')
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
  
  

  export const getSomaLancamentosPorCategoria = async (username: string, ano: number, mes: number): Promise<{ debito: { [categoria: string]: number }, credito: { [categoria: string]: number } }> => {
    try {
      const responselan = await API.get(`/Lancamentos`);
      const responsecat = await API.get(`/Categorias`);
      const lancamentos: Lancamentos[] = responselan.data;
      const categorias: Categoria[] = responsecat.data;
  
      const lancamentosUsu = lancamentos.filter((lancamento) => lancamento.username === username);
      
      const somaDebito: { [categoria: string]: number } = {};
      const somaCredito: { [categoria: string]: number } = {};
  
      for (let i = 0; i < lancamentosUsu.length; i++) {
        const lancamento = lancamentosUsu[i];
        const categoria = categorias.find((cat) => cat.id === lancamento.catId);
  
        if (categoria) {
          const categoriaSoma = categoria.tipo === 'D' ? somaDebito : somaCredito;
  
          if (categoriaSoma[categoria.nome]) {
            categoriaSoma[categoria.nome] += lancamento.valor;
          } else {
            categoriaSoma[categoria.nome] = lancamento.valor;
          }
        }
      }
  
      if (mes && ano) {
        const lancamentosFiltrados = lancamentosUsu.filter((lancamento) => {
          const lancamentoMes = new Date(lancamento.data).getMonth() + 1;
          const lancamentoAno = new Date(lancamento.data).getFullYear();
    
          return lancamentoMes === mes && lancamentoAno === ano;
        });
    
        const somaDebitoFiltrada: { [categoria: string]: number } = {};
        const somaCreditoFiltrada: { [categoria: string]: number } = {};
    
        for (let i = 0; i < lancamentosFiltrados.length; i++) {
          const lancamento = lancamentosFiltrados[i];
          const categoria = categorias.find((cat) => cat.id === lancamento.catId);
    
          if (categoria) {
            const categoriaSoma = categoria.tipo === 'D' ? somaDebitoFiltrada : somaCreditoFiltrada;
    
            if (categoriaSoma[categoria.nome]) {
              categoriaSoma[categoria.nome] += lancamento.valor;
            } else {
              categoriaSoma[categoria.nome] = lancamento.valor;
            }
          }
        }
    
        console.log('Soma das categorias de débito (filtrada):', somaDebitoFiltrada);
        console.log('Soma das categorias de crédito (filtrada):', somaCreditoFiltrada);
    
        return {
          debito: somaDebitoFiltrada,
          credito: somaCreditoFiltrada,
        };
      }
  
      console.log('Soma das categorias de débito:', somaDebito);
      console.log('Soma das categorias de crédito:', somaCredito);
  
      return {
        debito: somaDebito,
        credito: somaCredito,
      };
    } catch (error) {
      console.error('Erro ao buscar os lançamentos por categoria:', error);
      throw error;
    }
  };

  interface filtragem {

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

  export const definicaoDeFiltragem = async (formData: filtragem) =>{
  try {
    const response = await API.put(`/Usuarios/${formData.username}`, formData);
    const filtro = response.data;
    console.log('Dados enviados:', formData);
    console.log(filtro);
    return response;
  }catch (error) {
    if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const errorMessage = error.response?.data?.error || 'Ocorreu um erro ao filtrar os lançamentos.';
        throw new Error(`Error ${status}: ${errorMessage}`);
        
      } else {
        throw new Error('Ocorreu um erro ao filtrar os lancamentos');
        
      }

}};  

export const getLancamento = async (username: string, lancamentoId: number): Promise<Lancamentos> => {
  try { 
      const response = await API.get(`/Lancamentos`);
      const lancamentos: Lancamentos[] = response.data;
      const lancamentoEncontrado = lancamentos.find((lancamento) => lancamento.id === lancamentoId);
      if (lancamentoEncontrado) {
        return lancamentoEncontrado;
      } else {
        throw new Error('Lançamento não encontrado.');
      }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const errorMessage = error.response?.data?.error || 'Ocorreu um erro ao realizar a requisição.';
      throw new Error(`Error ${status}: ${errorMessage}`);
    } else {
      throw new Error('Ocorreu um erro ao realizar a requisição.');
    }
  }
};



export const UpdateLancamento = async (formData: LancamentosParamsRegister) => {
  try {
    const formattedData = new Date(formData.data).toISOString();
    const formattedConciliado = formData.conciliado ? 'true' : 'false';

    // Atualizar o valor de formData.data com a data formatada
  
    formData.data = formattedData;
    console.log('Dados enviados:', formData);

    const response = await API.put(`${BASE_URL}/Lancamentos/${formData.id}`, formData);
    console.log(response.data);
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

interface deleteLan{
  lancamentoId: number;
}

export const DeleteLancamento = async (formData: deleteLan) => {
  try { 
      const response = await API.delete(`${BASE_URL}/Lancamentos/${formData.lancamentoId}`);
      const response1 = response.data;
      console.log('Dados de delete enviados: ', formData)
      
        return response1;
      
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const errorMessage = error.response?.data?.error || 'Ocorreu um erro ao realizar a requisição.';
      throw new Error(`Error ${status}: ${errorMessage}`);
    } else {
      throw new Error('Ocorreu um erro ao realizar a requisição.');
    }
  }
};

