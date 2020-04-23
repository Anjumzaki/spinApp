import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import {totalSize, height} from 'react-native-dimension';
import { BannerAd,InterstitialAd } from '../components/AdMob';


const images=[
  {image:require('../Assets/wheel.png'),size:totalSize(20)},
  {image:require('../Assets/1.png')},
  {image:require('../Assets/2.png')},
  {image:require('../Assets/3.png')},
  {image:require('../Assets/4.png')},
  {image:require('../Assets/5.png')},
  {image:require('../Assets/6.png')},
  {image:require('../Assets/7.png')},
  {image:require('../Assets/8.png')},
  {image:require('../Assets/9.png')},
  {image:require('../Assets/10.png')},
]


export const Spin = (props) => {
  const [spinValue] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  const [value, setValue] = useState(0);
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const listner = spinValue.addListener((progress) => {
      // this.setState({ progress: progress.value });
      setValue(progress);
    });
    // spinValue.extractOffset()

    spinValue.removeListener();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });


  const spinWheel = () => {
    setIndex(0)

    const end= Math.floor(Math.random() * 10) + 1
    Animated.decay(spinValue, {
      velocity: 100,
      // deceleration:0.99,
      toValue: end,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true, // <-- Add this
    }).start(()=>{
      console.log('vaslfsdf:',spinValue)
    });
    // setIndex(end)
    setTimeout(() => spinValue.stopAnimation(({value}) => setIndex(end)), 1950);
  };

  return (
    <View style={styles.container}>
      <View style={{overflow: 'hidden'}}>
        
        <Animated.Image
          source={images[3].image}
          resizeMode="contain"
          style={{
            height: totalSize(30),
            width: totalSize(30),
            transform: [{rotate: spin}],
          }}
          resizeMode="cover"
        />
        
        <TouchableOpacity onPress={spinWheel} style={{marginTop:height(20)}}>
          <Image
            source={require('../Assets/rollBtn.png')}
            resizeMode="contain"
            style={{
              height: totalSize(10),
              width: totalSize(32),
            }}
          />
        </TouchableOpacity>
        
      </View>
      <BannerAd />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', paddingTop:height(20)},
});
