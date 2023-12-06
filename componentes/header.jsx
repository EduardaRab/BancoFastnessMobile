import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image source={require('../assets/logo.png')}></Image>
                </View>
            </View>
        </View>
    );
}
export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40,
        justifyContent: 'flex-start',
    },
    header: {
        marginTop: '3px',
        backgroundColor: '#E9DCB6',
        width: '100%',
        height: 70,
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});