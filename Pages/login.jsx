import { StyleSheet, View } from 'react-native'
import Titulo from '../componentes/titulo';
import Texto from '../componentes/texto';
import Header from '../componentes/header';
import Input from '../componentes/input';
import Botao from '../componentes/botao';
import React, { useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../AppContext';

function Login({navigation}) {

  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const {id, setId} = useAppContext()
  const [tentativas, setTentativas] = useState(0)

  const envioDeDados = async (event) => {
    event.preventDefault();

    try {
      const resposta = await axios.post('https://ac40-189-57-188-42.ngrok-free.app/api/api_login/', {
        email: usuario,
        senha: senha,
      });

      const data = resposta.data;
      console.log("Autenticação bem sucedida", data)
      await setId(resposta.data.id)
      // redirecionamento de página
      if (tentativas < 3){
        navigation.navigate('Home')
      }
      else{ // caso o usuário esteja bloqueado ele não consegue mudar de página
        alert('Usuário bloqueado! Ultrapassou o limite de 3 tentativas.')
      }
    
      // Lógica adicional após o login bem-sucedido, como redirecionamento para outra página
    } catch (erro) {
      if (tentativas < 3){ // se o usuário tentar a senha errada e não estiver bloqueado
        setTentativas(tentativas+1)
        alert("Senha ou usuário inválidos");
        console.error('Erro ao autenticar:', erro);
      }
      else{ // caso o usuário esteja bloqueado
        alert('Usuário bloqueado! Ultrapassou o limite de 3 tentativas.')
      }
    }
  };
  return (
    <View>
        <Header></Header>
        <View style={styles.container}>
            <Titulo texto="LOGIN"></Titulo>
            
            <View style={styles.form}>
                <Texto texto="Usuário"></Texto>
                <Input 
                    placeholder="Digite seu e-mail" 
                    type="email"
                    onChangeText= {setUsuario}
                    value= {usuario}
                    style=  {styles.caixa}
                    secureTextEntry = {false}
                    >
                    
                </Input>
                <Texto texto="Senha"></Texto>
                <Input 
                    placeholder="Digite sua senha" 
                    type="text" 
                    onChangeText={setSenha}
                    value={senha}
                    style={styles.caixa}
                    secureTextEntry={true}>
                </Input>
                <View style={styles.btn}>
                    <Botao textoBtn="Continuar" backgroundColor="#49CE3F" onPress={envioDeDados}></Botao>
                </View>

                <View style={styles.espaco}>
                    <Texto texto="Ainda não possui conta?"></Texto>
                </View>
                <View style={styles.btn2}>
                    <Botao textoBtn="Cadastrar" backgroundColor="#CBA135" onPress={() => navigation.navigate('Cadastro')}></Botao>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Login;

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
    },

    espaco:{
        marginTop: 50,
        alignItems: 'center',
    },

    btn:{
        marginTop: 30,
    },

    btn2:{
        marginTop: 20,
    },
});