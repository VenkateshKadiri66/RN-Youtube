import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import WatchButton  from './WatchButton';

export default class VideoItem extends Component {
  render() {
      let video = this.props.video;
      console.log(video);

    return (
      <ScrollView style={styles.container} >
      <View>
          
        <Image source={{uri: video.snippet.thumbnails.medium.url}} style={{height:200}}/>
        <View style={styles.descContainer}>
            <Image source={{uri:'https://randomuser.me/api/portraits/men/0.jpg'}} 
            style={styles.profilePic}/>
            <View style={styles.videoDetails}>
                <Text style={styles.videoTitle}>{video.snippet.title}</Text>
                
            </View>
        </View>
        <WatchButton videoId={video.id.videoId}/>
        </View>
      </ScrollView>
          );
  }
}

const styles = StyleSheet.create({
    container: {
       padding: 15,
    },
    descContainer: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    profilePic:{
        width:50,
        height:50,
        borderRadius: 25,
    },
    videoDetails:{
        paddingHorizontal: 15,
    },
    videoTitle:{
        fontSize: 16,
        color: '#3c3c3c'
    }

})
