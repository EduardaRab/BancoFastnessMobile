import { TextInput, StyleSheet, View, ScrollView, Image, ActivityIndicator } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' //rolagem da tela
import Header from '../componentes/header';
import Titulo from '../componentes/titulo';
import Texto from '../componentes/texto';
import Input from '../componentes/input';
import Botao from '../componentes/botao';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo, AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons'

function Cadastro({navigation}) {

  //Variáveis de armazenamento de dados
  const [name, setName] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [rg, setRg] = useState("")
  const [cpf, setCpf] = useState("")
  const [saldo, setSaldo] = useState("")
  const [data, setData] = useState("")
  const [image, setImage] = useState(null)
  const [imagem, setImagem] = useState(null)
  const [blob, setBlob] = useState(null)

  // Converte em binário para enviar ao Storage
  const getBlobFroUri = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });

    setBlob(blob);
  };

  const camera = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        getBlobFroUri(result.uri);  // Corrigir aqui
        setImage(result.uri);
        const path = result.uri;
        setImagem(path.substring(path.lastIndexOf('/') + 1, path.length));
      }
    } catch (E) {
      console.log(E);
    }
  };
  
  const gallery = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        getBlobFroUri(result.uri);  // Corrigir aqui
        setImage(result.uri);
        const path = result.uri;
        setImagem(path.substring(path.lastIndexOf('/') + 1, path.length));
      }
    } catch (E) {
      console.log(E);
    }
  };
  

  const cadastrar = async (e) => {
    e.preventDefault();

    const file = blob;

    if (!file) {
      console.log('Faltou imagem...');
      return;
    }
    if (!name || !email) {
      console.log('Faltou nome ou email...');
      return;
    }

    try {
      // Create FormData to send the data as multipart/form-data
      const formData = new FormData();
      formData.append('nome', name);
      formData.append('telefone', telefone);
      formData.append('email', email);
      formData.append('senha', senha);
      formData.append('rg', rg);
      formData.append('cpf', cpf);
      formData.append('data_nascimento', data);
      formData.append('saldo', saldo);
      formData.append('imagem', { uri: image, name: 'image.jpg', type: 'image/jpeg' });


      console.log('Blob type:', blob.type);
      console.log('Blob size:', blob.size);

      console.log(formData)
      await axios.post('https://ac40-189-57-188-42.ngrok-free.app/api/api_cliente/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
        }
      })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      alert('Cadastro realizado com sucesso');

      // Clear the input fields
      setName('');
      setTelefone('');
      setEmail('');
      setSenha('');
      setRg('');
      setCpf('');
      setSaldo('');
      setData('');
      setImagem(null);
      navigation.navigate('Login')
    } catch (error) {
      alert('Preencha os dados corretamente');
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Titulo texto="PREENCHA OS DADOS PARA SE CADASTRAR"></Titulo>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.scrollContainer}
          extraScrollHeight={Platform.OS === 'android' ? -100 : 0}
        >
          {/* Área para o nome */}
          <Texto texto="Nome completo"></Texto>
          <Input
            placeholder="Digite seu nome"
            type="text"
            onChangeText={setName}
            value={name}
            style={styles.caixa}
            secureTextEntry={false}
          ></Input>

          {/* Área para o telefone */}
          <Texto texto="Telefone"></Texto>
          <Input
            placeholder='Digite seu telefone'
            type="tel"
            onChangeText={setTelefone}
            value={telefone}
            style={styles.caixa}
            secureTextEntry={false}
          ></Input>

          {/* Área para o email */}
          <Texto texto="Email"></Texto>
          <Input
            placeholder='Digite seu email'
            type='email'
            onChangeText={setEmail}
            value={email}
            style={styles.caixa}
            secureTextEntry={false}
          ></Input>

          {/* Área para o CPF */}
          <Texto texto="CPF"></Texto>
          <Input placeholder='Digite seu CPF'
            type="numeric"
            onChangeText={setCpf}
            value={cpf}
            style={styles.caixa}
            secureTextEntry={false}
          ></Input>

          {/* Área para o RG */}
          <Texto texto="RG"></Texto>
          <Input placeholder='Digite seu RG'
            type="numeric"
            onChangeText={setRg}
            value={rg}
            style={styles.caixa}
            secureTextEntry={false}
          ></Input>

          {/* Área para a data de nascimento */}
          <Texto texto="Data de Nascimento"></Texto>
          <Input
            placeholder="Digite sua data de nascimento YYYY-MM-DD"
            type="date"
            onChangeText={setData}
            value={data}
            style={styles.caixa}
            secureTextEntry={false}
          ></Input>

          {/* Área para senha */}
          <Texto texto="Senha"></Texto>
          <Input
            placeholder='Digite sua senha'
            type="password"
            onChangeText={setSenha}
            value={senha}
            style={styles.caixa}
            secureTextEntry={true}></Input>

          {/* Área para a data de nascimento */}
          <Texto texto="Salário"></Texto>
          <Input
            placeholder='Digite seu salário'
            type="decimal"
            onChangeText={setSaldo}
            value={saldo}
            style={styles.caixa}
            secureTextEntry={false}
          ></Input>

           {/* Área para colocar a image */}
          <Texto texto="Carregar imagem de perfil"></Texto>
          <View style={styles.foto}>
            {image && (
              <>
                <Image source={{ uri: image }} style={styles.foto1} />
              </>
            )}
            {Image && <ActivityIndicator />}
          </View>
          <View style={styles.btns}>
            <TouchableOpacity
              onPress={gallery}
            >
              <FontAwesome
                name='image'
                size={40}
                color={'#000'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={camera}
            >
              <AntDesign
                name='camera'
                size={40}
                color={'#000'}
              />
            </TouchableOpacity>
          </View>
          <Botao textoBtn="Cadastrar" backgroundColor="#3AD138" onPress={cadastrar}></Botao>
          
        </KeyboardAwareScrollView>
      </View>
      
    </>
  )
}

export default Cadastro;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scrollContainer: {
    padding: 15,
  },
  foto1: {
    borderRadius: 10,
    width: '100%',
    height: 280,
    backgroundColor: '#E9DCB6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    borderRadius: 10,
    width: '70%',
    height: 300,
    backgroundColor: '#E9DCB6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});