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
  Alert
} from 'react-native';
import {totalSize, height} from 'react-native-dimension';
import { BannerAd,InterstitialAd } from '../components/AdMob';
import axios from 'axios';
import { URL } from '../Utils/AppConfig';


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
  const [ checked, setChecked] = useState(false);
  const [ btnAppear, setBtnAppear ] = useState(false);


  useEffect(() => {
    const listner = spinValue.addListener((progress) => {
      // this.setState({ progress: progress.value });
      setValue(progress);
    });
    // spinValue.extractOffset()

    spinValue.removeListener();

    axios.get(URL)
      .then(function (response) {
        // handle success
        setChecked(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });


  const spinWheel = () => {

    if( btnAppear ) setBtnAppear(false);
    
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
    setTimeout(() => {
      spinValue.stopAnimation(({value}) => setIndex(end));
      // Btn appearance func
      setBtnAppear(true);
    }
    
    , 1950);
  };

  return (
    <View style={styles.container}>
      <View style={{overflow: 'hidden'}}>
        
        <Image
            source={require('../Assets/pointer.png')}
            resizeMode="contain"
            style={{
              height: totalSize(5),
              width: totalSize(5),
              alignSelf: 'center',
              position: "absolute",
              zIndex: 200,
              marginTop: -5
            }}
        />

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

        { btnAppear ? (
          <TouchableOpacity onPress={() => Alert.alert(
            'Quiz Free Bucks',
            'Free V-Bucks',
            !checked ? [
                { text: 'OK', onPress: () => console.log('Ask me later pressed') },
                { text: 'GET FREE V-BUCKS', onPress: () => {
                InterstitialAd();
                props.navigation.push('WebVBucks')
                }
            },
            ] : [{ text: 'OK', onPress: () => console.log('Ask me later pressed') }],
            { cancelable: false },
            )}>
                <Image
                    source={require('../Assets/free_rbx.png')}
                    resizeMode="contain"
                    style={{
                        height: totalSize(10),
                        width: totalSize(32),
                    }}
                />
            </TouchableOpacity>
        ) : (
          <View style={{height: 75}}></View>
        )

        }
        
      </View>
      <BannerAd />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent:'center', paddingTop:height(10)},
});
