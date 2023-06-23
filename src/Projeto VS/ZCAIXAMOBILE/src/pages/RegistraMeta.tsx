import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../componentes/Estilos';
import { useUser } from '../contexts/UserContext';
import { definicaoDeMeta } from '../services/categorias.services';
import { TextInputMask } from 'react-native-masked-text';

const RegistraMeta = () => {
  const { username, anoConsulta, mesConsulta, ultimoNome, name, email, telefone, dataNascimento, senha, meta, setMeta } = useUser();
  const id = 0;
  const [valorMeta, setValorMeta] = useState('');

  const handleDefineMeta = () => {
    if (!valorMeta || parseFloat(valorMeta) < 0) {
      Alert.alert('Atenção!', 'O valor da meta deve ser maior que R$0,00');
      return null;
    }

    const formattedMeta = valorMeta
      .replace(/[^\d.,]/g, '') // Mantém apenas dígitos, vírgula e ponto
      .replace(/\./g, ''); // Remove o separador de milhares

    const parsedMeta = parseFloat(formattedMeta.replace(',', '.'));

    definicaoDeMeta({
      nome: name,
      ultimoNome: ultimoNome,
      email: email,
      username: username,
      senha: senha,
      telefone: telefone,
      dataNascimento: dataNascimento,
      meta: parsedMeta,
      mesConsulta: mesConsulta,
      anoConsulta: anoConsulta
    })
      .then((res) => {
        console.log(res);

        if (res) {
          setMeta(parsedMeta);
          Alert.alert('Atenção!', 'Meta definida com sucesso! Para visualizar o progresso, navegue até a área de Resumo.');
        } else {
          Alert.alert('Atenção!', 'Houve um erro ao definir a meta.');
        }
      })
      .catch((error) => {
        console.error('Erro ao definir a meta.', error);
      });
  };

  return (
    <View style={styles.Body}>
      <View style={styles.pagLancamentosTitArea}>
        <Text style={styles.pagLancamentosTitulos}>Adicionando uma{'\n'}Meta</Text>
      </View>

      <View>
        <Text style={styles.textoLoginarea}>Valor da meta</Text>
        <TextInputMask
          type={'money'}
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: ''
          }}
          value={valorMeta}
          onChangeText={(text, rawValue) => setValorMeta(text)}
          style={styles.inputLogin}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.cadastroBotao} onPress={handleDefineMeta}>
          <Text style={styles.Textobotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistraMeta;
