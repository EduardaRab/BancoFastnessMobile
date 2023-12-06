import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from '../componentes/header';
import Titulo from '../componentes/titulo';
import Texto from '../componentes/texto';
import Input from '../componentes/input';
import Subtitulo from '../componentes/subtitulo'
import Botao from '../componentes/botao';
import axios from 'axios';
import { useAppContext } from '../AppContext';

function Transferencia({navigation}) {
    const [cpf, setCpf] = useState()
    const [historico, setHistorico] = useState()
    const [valor, setValor] = useState()
    const {id, setId} = useAppContext() // variavel global que recebe o id do usuario logado

    const transferir = async(e) => {
        try{
            const resposta = await axios.post('https://ac40-189-57-188-42.ngrok-free.app/api/api_movimentacao/', {
                historico: historico,
                valor: parseFloat(valor),
                recebido_por: cpf,
                cliente: id
            })
            const dados = resposta.data
            console.log(dados)
            alert('Transferência realizada!')
        }
        catch(erro){
            alert('Transferência recusada! Confira as informações passadas.')

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
            <Titulo texto="TRANSFERÊNCIA"></Titulo>

            <View style={styles.espaco}>
                <Subtitulo texto="Preencha os dados de quem vai receber"></Subtitulo>
            </View>

            <View style={styles.form}>

                <View>
                    <Texto texto="CPF"></Texto>
                    <Input placeholder="Digite somente números" type="numeric" onChangeText={setCpf} value={cpf}></Input>
                </View>

                <View>
                    <Texto texto="Histórico"></Texto>
                    <Input placeholder="Digite o nome do banco" type="text" onChangeText={setHistorico} value={historico}></Input>
                </View>

                <View>
                    <Texto texto="Valor R$"></Texto>
                    <Input placeholder="Digite somente números" type="decimal" onChangeText={setValor} value={valor}></Input>
                </View>                
            </View>

            <View style={styles.posBtn}>
                <Botao textoBtn="Transferir" backgroundColor="#3AD138" onPress={transferir}></Botao>
            </View>
            
        </View>
    </View>
  )
}

export default Transferencia

const styles = StyleSheet.create({
    container:{
      margin: 10,
    },
    form:{
        alignItems: 'center',
    },
    espaco:{
        marginTop: 20,
    },
    posBtn:{
        marginTop: 30,
    }
});