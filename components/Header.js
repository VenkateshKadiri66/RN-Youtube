import React, { Component } from 'react';
import {  View, Text, TextInput, Image, StyleSheet, TouchableOpacity,Alert } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component {

    constructor(){
        super();
        this.state = {
            searchOn: false
        };
    }
   
    toggleSearchStatus= () => {
        
        if(this.state.searchOn == true){
            this.setState({searchOn:false});            
        }
        else{
            this.setState({searchOn:true});            
        }
    }

    onSearhTextChanged= (text) => {
          this.props.onSearch(text);
    }

    render() {
        return (
        <View style={styles.headerContainer}>
            
            <View style={styles.headerLeft}>
                     
                     {this.state.searchOn ? 
                     <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={this.toggleSearchStatus}> 
                            <Icon name='arrow-back' size={25} />
                            {/* <Image source={require('../Images/yt_icon_rgb.png')}  style={styles.logoIcon} /> */}
                        </TouchableOpacity>  
                        <TextInput 
                        style= {styles.searchBox}
                        onChangeText= {(text) => this.onSearhTextChanged(text)}
                        > </TextInput>  
                     </View>                   
                     :
                     <View style={{flex: 1}}>
                            <Image source={require('../Images/yt_logo_rgb_light.png')}  style={styles.mainLogo}/>
                     </View>
                     
                     }
                
                <TouchableOpacity onPress={this.toggleSearchStatus}>
                    <Icon name='search' size={25} />
                </TouchableOpacity>
                <Icon name='account-circle' size={25} />
                
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({

        headerContainer:{
            paddingHorizontal: 15,
            paddingTop: 35,
            paddingBottom: 15,           
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: '#E5E5E5',            
            borderBottomWidth: 1,
        },
        mainLogo:{
            width: 150,
            height: 33,
        },
        logoIcon: {
            width:24,
            height:29
        },
        headerLeft: {
            flexDirection:'row'
        },
        searchBox: { 
            marginHorizontal: 20,
            flex:1,
            // width:100, 
            height: 30, 
            borderBottomWidth:2, 
            borderBottomColor:'#050505' 
        }
});
