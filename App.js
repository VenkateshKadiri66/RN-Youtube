import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      searchText: 'Maradona'
    };
  }

  onSearch = (text) => {
    
    this.setState({searchText: text});
  }

  render() {

    return (
      <View style={styles.container}>
        <Header onSearch={this.onSearch}/>
        <Body searchText={this.state.searchText}/>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
