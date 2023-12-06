import { StyleSheet, Text, View } from 'react-native';

function Titulo({texto}) {
    return (
        <View>
            <Text style={styles.texto}>{texto}</Text>
        </View>
    );
}
export default Titulo;

const styles = StyleSheet.create({
    texto:{
        fontSize: 24,
        fontWeight: 'bold',
    }
});