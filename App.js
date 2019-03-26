import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
          <Image style={styles.cardImage} source={{uri:'https://nerdist.com/wp-content/uploads/2017/07/MrPoopy_FEAT.jpg'}}></Image>
          <Text style={styles.cardText}>Titulo publicacion</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor:'#fff',
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width:3,
      height:3
    }
  },
  cardImage:{
    width:'100%',
    height: 200,
    resizeMode: 'cover'
  },
  cardText:{
    padding: 10,
    fontSize: 16
  }

});
