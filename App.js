import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native';
import { SearchBar,Header } from 'react-native-elements';


export default class App extends React.Component {

  state = {
    search: '',
    posts: [],
    loading: true,
  };

  updateSearch = search => {
    this.setState({ search });
  };

  componentDidMount(){
    fetch('http://192.168.0.105:3000/posts.json').then((response) => response.json()).then(
      (resJson) => this.setState({posts: resJson,loading:false})
    ).catch(error => console.log(error));
  }

  render() {
    const { search,posts } = this.state;
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MascotApp', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <SearchBar
          placeholder="Buscar post..."
          onChangeText={this.updateSearch}
          value={search}
        />
         <FlatList
          data={this.state.posts}
          renderItem={({item}) =>  <TouchableOpacity style={styles.card}>
          <Image style={styles.cardImage} source={{uri:'https://nerdist.com/wp-content/uploads/2017/07/MrPoopy_FEAT.jpg'}}></Image>
          <Text style={styles.cardText}>{item.title}</Text>
        </TouchableOpacity>}
          keyExtractor={({id}, index) => id}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
