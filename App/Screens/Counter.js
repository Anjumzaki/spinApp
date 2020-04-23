import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Image,
  } from 'react-native';
  import React, {Component, useState, useEffect} from 'react';
  import {height, totalSize, width} from 'react-native-dimension';
  import { BannerAd, InterstitialAd } from '../components/AdMob';
  
  export const Counter = (props) => {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={()=>{
          props.navigation.navigate('About')
        }}>
          <Image
            source={require('../Assets/share.png')}
            resizeMode="contain"
            style={styles.share}
          />
        </TouchableWithoutFeedback>
        <Image
        source={require('../Assets/selectCounter.png')}
        resizeMode="contain"
        style={styles.aboutText}
      />
        <View style={styles.bucksContainer}>
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate('VBucks')
          }}>
            <Image
              source={require('../Assets/counter.png')}
              resizeMode="contain"
              resizeMode="contain"
              style={styles.bucks}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate('SaveWorld');
          }}>
            <Image
              source={require('../Assets/worldCounter.png')}
              resizeMode="contain"
              resizeMode="contain"
              style={styles.bucks}
            />
          </TouchableOpacity>
        </View>
        
        <View style={[styles.bucksContainer,{marginTop:height(6),justifyContent:'center'}]}>
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate('BattlePass')
          }}>
            <Image
              source={require('../Assets/battle.png')}
              resizeMode="contain"
              resizeMode="contain"
              style={[styles.bucks]}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    share: {
      height: totalSize(10),
      width: totalSize(10),
      marginTop: height(2),
      marginRight:width(4),
      alignSelf:'flex-end',
    },
    bucksContainer: {
      width: width(92),
      flexDirection: 'row',
      marginTop: height(4),
      justifyContent: 'space-between',
      alignSelf: 'center',
    },
    bucks: {
      height: totalSize(23),
      width: totalSize(19),
    },
    options: {
      height: totalSize(10),
      width: totalSize(10),
    },
    optionsContainer: {
        flexDirection: 'row',
        width:width(74),
        alignSelf:'center',
        justifyContent:'space-between',
        marginTop:height(10)
      },
      aboutText: {
        height: totalSize(6),
        width: totalSize(34),
        marginTop:height(2),
        alignSelf: 'center',
      },
  });
  