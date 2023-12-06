import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Titulo from '../componentes/titulo';
import Texto from '../componentes/texto';
import Header from '../componentes/header';
import Input from '../componentes/input';
import Botao from '../componentes/botao';
import axios from 'axios';
import { useAppContext } from '../AppContext';

function CartaoCredito() {
  const [validade, setValidade] = useState()
  const [cvv, setCvv] = useState()
  const [limite, setLimite] = useState()
  const {id, setId} = useAppContext() // variavel global que recebe o id do usuario logado

  const solicitar = async(e) => {
    try{
      const resposta = await axios.post('https://ac40-189-57-188-42.ngrok-free.app/api/api_cartaocredito/', {
        validade: validade,
        cvv: parseInt(cvv),
        limite: parseFloat(limite),
        cliente: id
      })
      const dados = resposta.data
      console.log(dados)
      alert('Cartão de crédito aprovado!')
    }
    catch (erro){
      alert('Cartão de crédito negado!')

      if (erro.response){
        console.error('Erro detalhado:', erro.response.data)
      }
      else{
        console.error('Erro:', erro.message)
      }
    }
  }

  return (
    <View>
        <Header></Header>

        <View style={styles.container}>
            <Titulo texto='SOLICITAR CARTÃO DE CRÉDITO'></Titulo>

            <View style={styles.form}>
                <Texto texto="Validade"></Texto>
                <Input placeholder="Digite somente números" type="text" onChangeText={setValidade} value={validade}></Input>

                <Texto texto="CVV"></Texto>
                <Input placeholder="Digite somente números" type="numeric" onChangeText={setCvv} value={cvv}></Input>

                <Texto texto="Limite R$"></Texto>
                <Input placeholder="Digite somente números" type="decimal" onChangeText={setLimite} value={limite}></Input>

                <Botao textoBtn="Solicitar" backgroundColor="#3AD138" onPress={solicitar}></Botao>
            </View>
        </View>
    </View>
  )
}

export default CartaoCredito

const styles = StyleSheet.create({
    container:{
      margin: 10,
    },
    form:{
        borderWidth: 2,
        borderColor: '#997928',
        borderRadius: 10,
        padding: 10,
        height: 370,
        alignContent: 'center',
        marginTop: 12,
    },
});