import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Botao({ textoBtn, backgroundColor, onPress }) {
  const stylesBtn = { //Passa como parâmetro a cor
    backgroundColor,
    ...styles.button, //Chama todo o estilo do btn junto
  };

  return (
    <View style={styles.containerBtn}>
      <TouchableOpacity activeOpacity={0.6}  style={stylesBtn} onPress={onPress}>
        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>{textoBtn}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Botao;

const styles = StyleSheet.create({
  containerBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'white',
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

});