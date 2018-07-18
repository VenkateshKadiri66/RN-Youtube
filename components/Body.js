import React, { Component } from 'react';
import {  View, Text, StyleSheet, FlatList } from 'react-native';
import data from './data.json';
import VideoItem from './VideoItem.js';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAdAn7d1uUr3sJlNlNAYxMGFMGeoQHMnNc';
export default class Body extends Component {

  state={
      videos:[]
  };

    searchYT = (term) =>{
        YTSearch({key:API_KEY,term}, videos => {
           this.setState({videos});
        });
    }

   componentDidMount(){
    this.searchYT(this.props.searchText);
   }  
   
   componentWillReceiveProps(nextProps) {
    if (this.props.searchText !== nextProps.searchText) {
        this.searchYT(nextProps.searchText);
    }
  }

  render() {
     
    return (
      <View style={styles.bodyContainer}>
        
        <FlatList 
            data={this.state.videos}
            renderItem={(video)=><VideoItem video={video.item} />}
            keyExtractor={(video)=>video.etag}
            ItemSeparatorComponent=
            {()=><View style={{height:0.5, backgroundColor: '#E5E5E5'}}></View>}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({

    bodyContainer: {
        flex: 1,
        padding: 15,
    }
});
