import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../componentes/header';
import Subtitulo from '../componentes/subtitulo';
import Informacao from '../componentes/informacao';
import axios from 'axios';
import { format } from 'date-fns';
import { useAppContext } from '../AppContext';

function Extrato() {
  const { id, setId } = useAppContext();
  const [movimentacoes, setMovimentacoes] = useState([]);

  useEffect(() => {
    const buscar = async () => {
      console.log('id ' + id);
      try {
        const resposta = await axios.get(`https://ac40-189-57-188-42.ngrok-free.app/api/api_movimentacao/${id}/`);
        setMovimentacoes(resposta.data);
      } catch (erro) {
        console.error("Erro ao buscar dados na API", erro);
      }
    };
    buscar();
  }, [id]);

  return (
    <View>
      <Header></Header>
      <View style={styles.posicao}>
        <Subtitulo texto="EXTRATO"></Subtitulo>
      </View>
      
        {movimentacoes.map((movimentacao) => (
          <Informacao
            key={movimentacao.id}
            data={format(new Date(movimentacao.data_movimentacao), 'dd/MM/yyyy')}
            valor={movimentacao.valor}
            historico={movimentacao.historico}
          ></Informacao>
        ))}
      
    </View>
  );
}

export default Extrato;

const styles = StyleSheet.create({
  posicao: {
    margin: 12,
  },
});
