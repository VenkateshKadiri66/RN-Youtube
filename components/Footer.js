import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import FooterTabItem from './FooterTabItem';


export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footerContainer}>
        <FooterTabItem name='home'/>
        <FooterTabItem name='whatshot'/>
        <FooterTabItem name='subscriptions'/>
        <FooterTabItem name='folder'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    footerContainer: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
        alignItems: 'center',       
        borderTopColor: '#E5E5E5',
        borderTopWidth: 2,
       
    }
});