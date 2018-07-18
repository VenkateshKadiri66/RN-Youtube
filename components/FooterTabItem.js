import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FooterTabItem extends Component {
   
  render() {
    return (
       <View style={styles.footerItem}>
            <Icon name={this.props.name}  size={25}/>
       </View> 
    
    );
  }
}

const styles = StyleSheet.create({

    footerItem: {

    }
});
