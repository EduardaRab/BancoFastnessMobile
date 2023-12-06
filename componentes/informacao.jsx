import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Texto from '../componentes/texto'

function Informacao(props) {
  return (
    <View style={styles.all}>
        <View style={styles.container}>
            <View style={styles.linha}>
                <Texto texto="Data: "></Texto>
                <Texto texto={props.data}></Texto>
            </View>

            <View style={styles.linha}>
                <Texto texto="Valor: R$"></Texto>
                <Texto texto={props.valor}></Texto>
            </View>

            <View style={styles.linha}>
                <Texto texto="Histórico: "></Texto>
                <Texto texto={props.historico}></Texto>
            </View>
        </View>
    </View>
  )
}

export default Informacao

const styles = StyleSheet.create({
    all:{
        display: 'flex',
        alignItems: 'center',
    },
    container:{
        borderColor: '#CBA135',
        borderWidth: 2,
        display: 'flex',
        width: 380,
        paddingLeft: 10,
        marginBottom: 10
    },
    linha:{
        display: 'flex',
        flexDirection: 'row'
    }
});