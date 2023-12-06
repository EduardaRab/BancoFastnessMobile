import { StyleSheet, Text, View } from 'react-native';

function Subtitulo({texto}) {
    return (
        <View>
            <Text style={styles.texto}>{texto}</Text>
        </View>
    );
}
export default Subtitulo;

const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
        fontWeight: 'bold',
    }
});