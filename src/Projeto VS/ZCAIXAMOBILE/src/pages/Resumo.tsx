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
  const {username} = useUser();

  
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const username = 'nome_do_usuario'; // Substitua 'nome_do_usuario' pelo valor adequado

        const categorias = await getCategoriasUsuario(username);
        setCategorias(categorias);

        const somaCategorias = {};
        for (const categoria of categorias) {
          const somaCategoria = await getSomaLancamentosPorCategoria(username, categoria);
          somaCategorias[categoria] = somaCategoria;
        }
        setSomaCategorias(somaCategorias);
      } catch (error) {
        console.error('Erro ao buscar as categorias e somar os lançamentos:', error);
      }
    };

    fetchCategorias();
  }, []);

  useEffect(() => {
    // Função assíncrona para buscar o total de receitas e atualizar o estado local
    const fetchTotalReceitas = async () => {
      try {
        const total = await getSomaLancamentos(username);
        setTotalReceitas(total);
      } catch (error) {
        console.error('Erro ao buscar o total de receitas:', error);
      }};
      fetchTotalReceitas();
    }, []);

    useEffect(() => {
      // Função assíncrona para buscar o total de despesas e atualizar o estado local
      const fetchTotalDespesas = async () => {
        try {
          const total = await getSomaDebLancamentos(username);
          setTotalDespesas(total);
        } catch (error) {
          console.error('Erro ao buscar o total de receitas:', error);
        }};
        fetchTotalDespesas();
      }, []);

   

  

  const Meta = () => {
    return (
      <View>
        <ProgressBar progress={0.7} color="#36AE3B" style={{ width: 300, height: 9, borderRadius: 20, marginTop: 10 }} />
      </View>
    );
  };
  


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
            <Text style={styles.Receitas}>{totalReceitas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
          </View>

          <View style={styles.ReceitasDespesasConteudo}>
              <Text style={styles.ReceitasDespesasTitulos}>Total de Despesas:</Text>
              <Text style={styles.Despesas}> {totalDespesas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
            </View>

            <View style={styles.TotalArea}>
              <Text style={styles.ReceitasDespesasTitulos}>Saldo Total:</Text>
              <Text style={styles.ReceitasDespesasTitulos}> {saldoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
            </View>

            <View style={styles.SaldosCategoriasArea}>
              <Text style={styles.ReceitasDespesasTitulos}>Saldos por categorias:</Text>
            

              <ScrollView style={{maxHeight: 250}}>
                <View style={styles.SaldosCategoriasCredito}>

                <ScrollView>
                  {Object.keys(somaCategorias).map((categoria) => (
                    <View style={styles.SaldosCategoriasUnitario} key={categoria}>
                      <Text style={styles.ReceitasDespesasTitulos}>{categoria}:</Text>
                      <Text style={styles.Receitas}> R$ {somaCategorias[categoria].toFixed(2)}</Text>
                    </View>
                  ))}
                </ScrollView>

                <View style={styles.SaldosCategoriasUnitario}>
              <Text style={styles.ReceitasDespesasTitulos}>Freelance:</Text>
              <Text style={styles.Receitas}> R$800,00</Text>
                </View>

                <View style={styles.SaldosCategoriasUnitario}>
              <Text style={styles.ReceitasDespesasTitulos}>Salário:</Text>
              <Text style={styles.Receitas}> R$1.692,20</Text>
                </View>

                <View style={styles.SaldosCategoriasUnitario}>
              <Text style={styles.ReceitasDespesasTitulos}>Salário:</Text>
              <Text style={styles.Receitas}> R$1.692,20</Text>
                </View>

                <View style={styles.SaldosCategoriasUnitario}>
              <Text style={styles.ReceitasDespesasTitulos}>Salário:</Text>
              <Text style={styles.Receitas}> R$1.692,20</Text>
                </View>

                <View style={styles.SaldosCategoriasUnitario}>
              <Text style={styles.ReceitasDespesasTitulos}>Salário:</Text>
              <Text style={styles.Receitas}> R$1.692,20</Text>
                </View>
                
                </View>

                <View style={styles.SaldosCategoriasDebito}>

                <View style={styles.SaldosCategoriasUnitario}>
              <Text style={styles.ReceitasDespesasTitulos}>Alimentação:</Text>
              <Text style={styles.Despesas}> R$48,60</Text>
                </View>

                <View style={styles.SaldosCategoriasUnitario}>
              <Text style={styles.ReceitasDespesasTitulos}>Saúde:</Text>
              <Text style={styles.Despesas}> R$78,00</Text>
                </View>

                <View style={styles.SaldosCategoriasUnitario}>
              <Text style={styles.ReceitasDespesasTitulos}>Saúde:</Text>
              <Text style={styles.Despesas}> R$78,00</Text>
                </View>


                <View style={styles.SaldosCategoriasUnitario}>
              <Text style={styles.ReceitasDespesasTitulos}>Saúde:</Text>
              <Text style={styles.Despesas}> R$78,00</Text>
                </View>


                <View style={styles.SaldosCategoriasUnitario}>
              <Text style={styles.ReceitasDespesasTitulos}>Saúde:</Text>
              <Text style={styles.Despesas}> R$78,00</Text>
                </View>

                <View style={styles.SaldosCategoriasUnitario}>
              <Text style={styles.ReceitasDespesasTitulos}>Saúde:</Text>
              <Text style={styles.Despesas}> R$78,00</Text>
                </View>


                </View>
              </ScrollView>
              </View>
        </View>
      </View>
    </View>
  );
};

export default Resumo;
