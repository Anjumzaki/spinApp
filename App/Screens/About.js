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
import { BannerAd } from '../components/AdMob';

export const About = (props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Image
          source={require('../Assets/about.png')}
          resizeMode="contain"
          style={styles.about}
        />
      </TouchableWithoutFeedback>

      <Image
        source={require('../Assets/aboutText.png')}
        resizeMode="contain"
        style={styles.aboutText}
      />

      <Image
        source={require('../Assets/info.png')}
        resizeMode="contain"
        style={styles.info}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  about: {
    height: totalSize(14),
    width: width(68),
    marginTop: height(6),
    alignSelf: 'center',
  },
  aboutText: {
    height: totalSize(8),
    width: totalSize(38),
    marginTop: height(3),
    alignSelf: 'center',
  },
  info: {
    height: totalSize(26),
    width: totalSize(42),
    marginTop: height(3),
    alignSelf: 'center',
  },
});
