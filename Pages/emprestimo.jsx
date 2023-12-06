import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Titulo from '../componentes/titulo';
import Texto from '../componentes/texto';
import Header from '../componentes/header';
import Input from '../componentes/input';
import Botao from '../componentes/botao';
import Subtitulo from '../componentes/subtitulo';
import axios from 'axios';
import { useAppContext } from '../AppContext';

function Emprestimo({navigation}) {
  const [cpf, setCpf] = useState('')
  const [valor, setValor] = useState()
  const [parcelas, setParcelas] = useState()
  const {id, setId} = useAppContext() // variavel global que recebe o id do usuario logado

  const solicitar = async(e) => {
    try{
      const resposta = await axios.post('https://ac40-189-57-188-42.ngrok-free.app/api/api_emprestimo/', {
        valor: parseFloat(valor),
        parcelas: parseInt(parcelas),
        valor_parcela: null,
        cliente: id
      })
      const dados = resposta.data
      console.log(dados)
      alert("Empréstimo aprovado!")
      setCpf('')
      setParcelas('')
      setValor('')
    }
    catch (erro) {
      alert("Empréstimo negado")
      console.error('Erro', erro)
      console.error('Erro detalhado:', erro.response.data)
    }
  }

  return (
    <View>
    <Header></Header>

    <View style={styles.container}>
        <Titulo texto='EMPRÉSTIMO'></Titulo>

        <View style={styles.form}>
            <Subtitulo texto={"Preencha os dados para adquirir seu empréstimo"}></Subtitulo>
            <Texto texto="CPF"></Texto>
            <Input placeholder="Digite somente números" type="numeric" onChangeText={setCpf} value={cpf}></Input>

            <Texto texto="Valor"></Texto>
            <Input placeholder="Digite somente números" type="decimal" onChangeText={setValor} value={valor}></Input>

            <Texto texto="Quantidade de parcelas"></Texto>
            <Input placeholder="Digite somente números" type="numeric" onChangeText={setParcelas} value={parcelas}></Input>

            <Botao textoBtn="Solicitar" backgroundColor="#3AD138" onPress={solicitar}></Botao>
        </View>
    </View>
</View>
  )
}

export default Emprestimo
const styles = StyleSheet.create({
    container:{
      margin: 10,
    },
    form:{
        borderWidth: 2,
        borderColor: '#997928',
        borderRadius: 10,
        padding: 10,
        height: 400,
        alignContent: 'center',
        marginTop: 12,
    },
});