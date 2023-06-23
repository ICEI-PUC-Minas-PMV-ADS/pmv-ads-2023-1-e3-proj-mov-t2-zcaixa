import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../componentes/Estilos';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar } from 'react-native-paper';
import { useUser } from '../contexts/UserContext';
import { getSomaLancamentos, getSomaDebLancamentos } from '../services/lancamentos.services';
import { getCategoriasUsuario, getSomaLancamentosPorCategoria } from '../services/lancamentos.services';

const Resumo = () => {
  const navigation = useNavigation();
  const [categorias, setCategorias] = useState<string[]>([]);
  const [somaCategorias, setSomaCategorias] = useState<{ [categoria: string]: number }>({});
  const [totalReceitas, setTotalReceitas] = useState<number>(0);
  const [totalDespesas, setTotalDespesas] = useState<number>(0);
  const saldoTotal = totalReceitas - totalDespesas;
  const { username, anoConsulta, mesConsulta, } = useUser();

  const SomaPorCategorias = () => {
    const [debito, setDebito] = useState<{ [categoria: string]: number }>({});
    const [credito, setCredito] = useState<{ [categoria: string]: number }>({});
  
    useEffect(() => {
      const fetchSomaLancamentosPorCategoria = async () => {
        try {
          const resultado = await getSomaLancamentosPorCategoria(username, anoConsulta, mesConsulta);
          setDebito(resultado.debito);
          setCredito(resultado.credito);
        } catch (error) {
          console.error('Erro ao buscar as somas dos lançamentos por categoria:', error);
        }
      };
  
      fetchSomaLancamentosPorCategoria();
    }, []);

    return (
      <ScrollView>
        <View>
          <Text style={styles.ReceitasDespesasTitulos}>Categorias de Crédito:</Text>
          {Object.entries(credito).map(([categoria, valor]) => (
            <View style={styles.SaldosCategoriasUnitario} key={categoria}>
              <Text style={styles.ReceitasDespesasTitulos2}>{categoria}:</Text>
              <Text style={styles.Receitas}>{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
            </View>
          ))}

          <View>
          <Text style={styles.ReceitasDespesasTitulos}>Categorias de Débito:</Text>
          {Object.entries(debito).map(([categoria, valor]) => (
            <View style={styles.SaldosCategoriasUnitario} key={categoria}>
              <Text style={styles.ReceitasDespesasTitulos2}>{categoria}:</Text>
              <Text style={styles.Despesas}>{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
            </View>
          ))}
        </View>
        </View>
      </ScrollView>
    );
  };

  useEffect(() => {
    const fetchTotalReceitas = async () => {
      try {
        const total = await getSomaLancamentos(username, anoConsulta, mesConsulta);
        setTotalReceitas(total);
      } catch (error) {
        console.error('Erro ao buscar o total de receitas:', error);
      }
    };
    fetchTotalReceitas();
  }, []);

  useEffect(() => {
    const fetchTotalDespesas = async () => {
      try {
        const total = await getSomaDebLancamentos(username, anoConsulta, mesConsulta);
        setTotalDespesas(total);
      } catch (error) {
        console.error('Erro ao buscar o total de despesas:', error);
      }
    };
    fetchTotalDespesas();
  }, []);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const categorias = await getCategoriasUsuario(username);
        setCategorias(categorias);
      } catch (error) {
        console.error('Erro ao buscar as categorias do usuário:', error);
      }
    };
    fetchCategorias();
  }, []);

  const Meta = () => {
    const {meta} = useUser();
    if(meta > 1){
    const porcentagem = (saldoTotal / meta) * 100;
    const resultadoArredondado = porcentagem/100;
    console.log('Meta:',resultadoArredondado);
    return (
      <View>
        <ProgressBar
          progress={resultadoArredondado}
          color="#36AE3B"
          style={{ width: 300, height: 9, borderRadius: 20, marginTop: 10 }}
        />
      </View>
    );
  }else{ return(
    <View>
    <ProgressBar
      progress={0}
      color="#36AE3B"
      style={{ width: 300, height: 9, borderRadius: 20, marginTop: 10 }}
    />
  </View>
  )}};

  return (
    <View style={styles.Body}>
      <View style={styles.ResumoCabecalho}>
        <Text style={{ fontWeight: '500', fontSize: 18, color: '#47525E' }}>Status da Meta:</Text>
        <Meta />
      </View>

      <View style={styles.ResumoArea}>
        <Text style={{ fontWeight: '500', fontSize: 18, color: '#47525E' }}>Receitas e Despesas</Text>

        <View style={styles.ReceitasDespesasArea}>
          <View style={styles.ReceitasDespesasConteudo}>
            <Text style={styles.ReceitasDespesasTitulos}>Total de Receitas:</Text>
            <Text style={styles.Receitas}>
              {totalReceitas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Text>
          </View>

          <View style={styles.ReceitasDespesasConteudo}>
            <Text style={styles.ReceitasDespesasTitulos}>Total de Despesas:</Text>
            <Text style={styles.Despesas}>
              {totalDespesas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Text>
          </View>

          <View style={styles.TotalArea}>
            <Text style={styles.ReceitasDespesasTitulos}>Saldo Total:</Text>
            <Text style={styles.ReceitasDespesasTitulos}>
              {saldoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Text>
          </View>

          <View style={styles.SaldosCategoriasArea}>
            <Text style={styles.ReceitasDespesasTitulos}>Saldos por categorias:</Text>
            <ScrollView style={{maxHeight: 200, marginTop: 20}}>
            <SomaPorCategorias />
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Resumo;
