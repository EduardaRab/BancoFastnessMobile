import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Card from '../componentes/cards';
import Header from '../componentes/header';
import Titulo from '../componentes/titulo';
import Texto from '../componentes/texto';
import axios from 'axios';
import { useAppContext } from '../AppContext';

function Home({navigation}) {

    const [info, setInfo] = useState({}) // armazena as informações do cliente
    const {id, setId} = useAppContext() // variavel global que recebe o id do usuario logado

    // função para buscar os dados do cliente na API
    useEffect(() => {
        const buscarInformacao = async() => {
            try{
                // busca as informações do cliente na api de acordo com o id
                const resposta = await axios.get(`https://ac40-189-57-188-42.ngrok-free.app/api/api_cliente/${id}/`)
                setInfo(resposta.data)
            }
            catch(erro){ // apresenta os erros
                console.error("Erro ao buscar dados na API", erro)
            }
        }

        // chama as funções após a montagem do componente
        buscarInformacao() 
    }, [id])

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <View style={styles.perfil}>
                    <Image style={{ width: 90, height: 90, borderRadius:90 }} source={{uri: `https://ac40-189-57-188-42.ngrok-free.app/api/api_cliente/${id}/image_blob/`}} /> 
                    <Texto texto={info.nome} />
                    <View style={styles.saldo}>
                        <Texto texto="Confira seu saldo:" style={{ marginLeft: 10 }} />
                        <Titulo texto={'R$'+info.saldo} />
                    </View>
                </View>

                <View style={styles.cardsRow}>
                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('Emprestimo')}>
                        <Card textCard="Fazer um empréstimo" imgCard={require('../assets/icones/emprestimoPessoal.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('Transferencia')}>
                        <Card textCard="Transferir" imgCard={require('../assets/icones/transferencia.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.cardsRow}>
                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('CartaoCredito')}>
                        <Card textCard="Solicitar cartão de crédito" imgCard={require('../assets/icones/cartaoCredito.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardItem} onPress={() => navigation.navigate('Extrato')}>
                        <Card textCard="Extrato" imgCard={require('../assets/icones/doc.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        alignItems: 'center',
        padding: 10,
    },
    perfil: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        width: 350,
        height: 250,
        borderWidth: 2,
        borderColor: '#997928',
        borderRadius: 20,
    },
    saldo: {
        backgroundColor: '#49CE3F',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        width: 220,
        height: 70,
        alignItems: 'center',
    },
    cardsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Espaçamento entre os cartões
        marginTop: 20, // Adicione margem para separar as linhas de cartões
        height: 200, 
    },
    cardItem: {
        flex: 1,
        margin: 8,
    },
});
