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
  
  export const SaveWorld = (props) => {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('About')}>
          <Image
            source={require('../Assets/share.png')}
            resizeMode="contain"
            style={styles.share}
          />
        </TouchableWithoutFeedback>
        <Image
          source={require('../Assets/saveWorldText.png')}
          resizeMode="contain"
          style={styles.aboutText}
        />
  
        <View style={{alignItems: 'center', marginTop: height(16)}}>
          <TouchableOpacity onPress={()=>{
          
            props.navigation.push('DailyVBucks')
          }}>
            <Image
              source={require('../Assets/dailyVbucks.png')}
              resizeMode="contain"
              style={{
                height: totalSize(10),
                width: totalSize(32),
              }}
            />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={()=>{
            
            props.navigation.push('UpgradeLlama')
          }}>
            <Image
              source={require('../Assets/upgradeVbucks.png')}
              resizeMode="contain"
              style={{
                height: totalSize(10),
                width: totalSize(32),
              }}
            />
          </TouchableOpacity>
        </View>
        <BannerAd/>
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
      marginTop: height(4),
      marginRight: width(4),
      alignSelf: 'flex-end',
    },
  
    aboutText: {
      height: totalSize(8),
      width: totalSize(36),
      marginTop: height(6),
      alignSelf: 'center',
    },
  });
  