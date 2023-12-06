import { View, Text, StyleSheet, Image } from 'react-native';

function Card({textCard, imgCard}) {
  

  return (
    <View style={styles.tela}>
        <View style={styles.container}>
        <View style={styles.imgCard}>
                    <Image source={imgCard}></Image>
        </View>
            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold'}}>{textCard}</Text> 
        </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
    width: 175, 
    height: 175,
    borderWidth: 1,
    borderColor: '#997928',
  },
  tela:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCard:{
    flex: 1,
    width: 1,
    height: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
 
});