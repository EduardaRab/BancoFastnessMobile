import { View, StyleSheet, TextInput } from 'react-native';

function Input(props) {
  

  return (
    <View style={styles.txts}>
        <TextInput
                placeholder={props.placeholder}
                inputMode={props.type}
                onChangeText={props.onChangeText}
                value={props.value}
                style={styles.caixa}
                secureTextEntry={props.secureTextEntry}
            />
    </View>

  );
}

export default Input;

const styles = StyleSheet.create({
    caixa:{
        width:350,
        borderRadius: 5,
        padding:8,
        fontSize:15,
        borderWidth: 1,
        borderColor: '#997928',
      
    },
 
      
});