import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { styles } from '../componentes/Estilos';
import SelectDropdown from 'react-native-select-dropdown';
import { useUser } from '../contexts/UserContext';
import { getLancamentosUsuario } from '../services/lancamentos.services';
import { format, set } from 'date-fns';
import { definicaoDeFiltragem } from '../services/lancamentos.services'; 



const MeuCaixa = ({ setTelaAtiva }: { setTelaAtiva: (tela: string) => void }) => {
  
  
  
  const { username, anoConsulta, mesConsulta, ultimoNome, name, email, telefone, dataNascimento, setAnoConsulta, setMesConsulta, senha, meta, lancamentosUsuario, setLancamentos, setLancamento} = useUser();
  const [isLoading, setIsLoading] = useState(true);  
  
  const handleSelecionaLan = (id:number) => {
    setLancamento(id);
    setTelaAtiva('lancamentoedit')
  }
  

   const fetchLancamentosUsuario = async () => {
    try {
      setIsLoading(true);
      const lancamentos = await getLancamentosUsuario(username, anoConsulta, mesConsulta)
      setLancamentos(lancamentos);
      
    } catch (error) {
      console.error('Erro ao buscar os lançamentos do usuário:', error);
    } finally {
      setIsLoading(false);
      setTelaAtiva('caixa');
    }
  };

  const fetchLancamentosUsuario2 = async () => {
    try {
      setIsLoading(true);
      const lancamentos = await getLancamentosUsuario(username, anoSelecionado, mesFiltro)
      setLancamentos(lancamentos);
      
    } catch (error) {
      console.error('Erro ao buscar os lançamentos do usuário:', error);
    } finally {
      setIsLoading(false);
      setTelaAtiva('caixa');
    }
  };

  const fetchLancamentosUsuario3 = async () => {
    try {
      setIsLoading(true);
      const lancamentos = await getLancamentosUsuario(username, anoSelecionado, mesFiltro)
      setLancamentos(lancamentos);
      
    } catch (error) {
      console.error('Erro ao buscar os lançamentos do usuário:', error);
    } finally {
      setIsLoading(false);
      setTelaAtiva('caixa');
    }
  };

  const handleFiltraTodos = () => {
    setAnoSelecionado(0);
    mesFiltro = 0;
    setAnoConsulta(0);
    setMesConsulta(0);
    fetchLancamentosUsuario3();

    
    definicaoDeFiltragem({
      nome: name,
      ultimoNome: ultimoNome,
      email: email,
      username: username,
      senha: senha,
      telefone: telefone,
      dataNascimento: dataNascimento,
      meta: meta,
      mesConsulta: mesFiltro,
      anoConsulta: anoConsulta
  
      
      
    }).then( res => {
      console.log(res);

     

      if(res){
        fetchLancamentosUsuario2();

      }else{
        Alert.alert('Atenção!', 'Houve um erro ao realizar o filtro.')

      }
  })
  .catch(error => {
    console.error('Erro ao definir filtragem:', error);
  });
  };
    



  const [anoSelecionado, setAnoSelecionado] = useState(0);
  const [mesSelecionado, setMesSelecionado] = useState('');
  let mesFiltro = 0;
  const year = [2021, 2022, 2023];
  const month = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  

  const getValorTextStyle = (categoriaTipo) => {
    if (categoriaTipo === 'R') {
      return {
        color: '#5FAE79',
      };
    } else if (categoriaTipo === 'D') {
      return {
        color: '#F95F62',
      };
    }
    return null;
  };

  
  const [mostraOpcoes, setMostraOpcoes] = useState(false);

  const handlePressMostraOpcoes = () => {
    setMostraOpcoes(!mostraOpcoes);
  };

  
  useEffect(() => {
    fetchLancamentosUsuario();
  }, []);

  
  const handleFiltra = () => {
    
      if (mesSelecionado === 'Janeiro') {
      mesFiltro = 1;
    } else if (mesSelecionado === 'Fevereiro') {
      mesFiltro = 2;
    } else if (mesSelecionado === 'Março') {
      mesFiltro = 3;
    } else if (mesSelecionado === 'Abril') {
      mesFiltro = 4;
    } else if (mesSelecionado === 'Maio') {
      mesFiltro = 5;
    } else if (mesSelecionado === 'Junho') {
      mesFiltro = 6;
    } else if (mesSelecionado === 'Julho') {
      mesFiltro = 7;
    } else if (mesSelecionado === 'Agosto') {
      mesFiltro = 8;
    } else if (mesSelecionado === 'Setembro') {
      mesFiltro = 9;
    } else if (mesSelecionado === 'Outubro') {
      mesFiltro = 10;
    } else if (mesSelecionado === 'Novembro') {
      mesFiltro = 11;
    } else {
      mesFiltro = 12;
    }

    if(!mesFiltro || !anoSelecionado){
      Alert.alert('Atenção!','Para filtrar os lançamentos, você deve selecionar o mês e ano desejado.');
      return null;
    }
    
    
        
    
    definicaoDeFiltragem({
      nome: name,
      ultimoNome: ultimoNome,
      email: email,
      username: username,
      senha: senha,
      telefone: telefone,
      dataNascimento: dataNascimento,
      meta: meta,
      mesConsulta: mesFiltro,
      anoConsulta: anoSelecionado
  
      
      
    }).then( res => {
      console.log(res);

     

      if(res){
        
        setAnoConsulta(anoSelecionado);
        setMesConsulta(mesFiltro); 
        fetchLancamentosUsuario2();

      }else{
        Alert.alert('Atenção!', 'Houve um erro ao realizar o filtro.')

      }
  })
  .catch(error => {
    console.error('Erro ao definir filtragem:', error);
  });
  };

  
    

  return (
    
    <View style={styles.Body}>
      {mostraOpcoes && (
        <View
          style={{
            width: 200,
            height: 180,
            position: 'absolute',
            zIndex: 1,
            backgroundColor: 'rgba(167,167,167,1)',
            right: 20,
            bottom: 150,
            borderRadius: 20,
          }}
        >
          <TouchableOpacity style={styles.opcoesbotao2} onPress={() => setTelaAtiva('registracat')}>
            <Text style={styles.textoOpcoesBotoes}>Categorias</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcoesbotao2} onPress={() => setTelaAtiva('registralan')}>
            <Text style={styles.textoOpcoesBotoes}>Lançamentos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcoesbotao} onPress={() => setTelaAtiva('registrameta')}>
            <Text style={styles.textoOpcoesBotoes}>Meta</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        style={{
          zIndex: 1,
          width: 60,
          height: 60,
          backgroundColor: '#3B4859',
          borderRadius: 45,
          position: 'absolute',
          bottom: 0,
          right: 0,
          marginBottom: 80,
          marginRight: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={handlePressMostraOpcoes}
      >
        <View>
          <Text style={{ fontSize: 35, fontWeight: '300', color: '#FFFFFF' }}>+</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.caixaCabecalho}>
        <SelectDropdown
          buttonStyle={styles.CaixaDropdownFiltro}
          defaultButtonText="Mês"
          buttonTextStyle={{ color: '#47525E', fontWeight: '500' }}
          data={month}
          onSelect={(selectedItem, index) => {
            setMesSelecionado(selectedItem);
            console.log(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />

        <SelectDropdown
          buttonStyle={styles.CaixaDropdownFiltro}
          buttonTextStyle={{ color: '#47525E', fontWeight: '500' }}
          dropdownIconPosition="right"
          defaultButtonText="Ano"
          data={year}
          onSelect={(selectedItem, index) => {
            setAnoSelecionado(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />

        <TouchableOpacity style={styles.CaixaDropdownFiltraOK} onPress={handleFiltra}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: '#47525E' }}>OK</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 50,
            borderRadius: 8,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#959595',
            backgroundColor: '#FFFFFF',
            marginLeft: 22,
          }} onPress={handleFiltraTodos}
        >
          <Text style={{ fontSize: 18, fontWeight: '500', color: '#47525E' }}>Todos</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.CaixaLancamentosArea}>
      {isLoading ? (
        <ActivityIndicator style={{marginTop: 100}} size="large" color="#47525E" />
      ) : (
        lancamentosUsuario.map((lancamento) => (
          <TouchableOpacity key={lancamento.id} onPress={() => handleSelecionaLan(lancamento.id)}>
            <View style={styles.CaixaLancamentos}>
              <View style={styles.LancamentoUniData}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  {format(new Date(lancamento.data), 'dd/MM')}
                </Text>
              </View>

              <View style={styles.LancamentoUniCategoria}>
                <Text style={{ fontSize: 15, fontWeight: '500' }}>{lancamento.cat.nome}</Text>
              </View>

              <View style={styles.LancamentoUniDescricao}>
                <Text style={{ fontSize: 13, fontWeight: '500' }}>{lancamento.descricao}</Text>
              </View>

              <View style={[styles.LancamentoUniValor]}>
                <Text style={[{ fontSize: 15, fontWeight: 'bold' }, getValorTextStyle(lancamento.cat.tipo)]}>
                  {lancamento.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </Text>
              </View>

            </View>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
      
    </View>
  );
};

export default MeuCaixa;
