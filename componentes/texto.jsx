import { StyleSheet, Text, View } from 'react-native';


function Texto({texto}) {
    return (
        <View>
            <Text style={styles.texto}>{texto}</Text>
        </View>
    );
}
export default Texto;

const styles = StyleSheet.create({
    texto:{
        fontSize: 16,
        paddingTop: 8,
        paddingBottom:8,
    }
});