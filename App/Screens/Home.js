import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import { height, totalSize, width } from 'react-native-dimension';
// import { InterstitialAd, RewardedAd, BannerAd, TestIds } from '@react-native-firebase/admob';
import { BannerAd, InterstitialAd } from '../components/AdMob';
import OneSignal from 'react-native-onesignal';
import { OneSignalAppID } from '../Utils/AppConfig';

export const Home = (props, properties) => {

  useEffect(() => {
    //OneSignal
    OneSignal.init(OneSignalAppID, { kOSSettingsKeyAutoPrompt: true });
    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);


  }, []);

  function onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  function onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  function onIds(device) {
    console.log('Device info: ', device);
  }

  return (
    <View style={styles.container}>

      <TouchableWithoutFeedback
        onPress={() => {

          props.navigation.navigate('About');
        }}>
        <Image
          source={require('../Assets/about.png')}
          resizeMode="contain"
          style={styles.about}
        />
      </TouchableWithoutFeedback>
      <View style={styles.bucksContainer}>
        <TouchableOpacity onPress={() => {

          props.navigation.navigate('Counter');
        }}>
          <Image
            source={require('../Assets/bucks1.png')}
            resizeMode="contain"
            style={styles.bucks}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {

          props.navigation.navigate('Spin')
        }}>
          <Image
            source={require('../Assets/bucks.png')}
            resizeMode="contain"
            style={styles.bucks}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity>
          <Image
            source={require('../Assets/terms.png')}
            resizeMode="contain"
            style={styles.options}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {

          props.navigation.push('Quiz');
        }}>
          <Image
            source={require('../Assets/quiz.png')}
            resizeMode="contain"
            style={styles.options}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../Assets/privacy.png')}
            resizeMode="contain"
            style={styles.options}
          />
        </TouchableOpacity>
      </View>
      {/* <BannerAd unitId={'ca-app-pub-3940256099942544/6300978111'} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  about: {
    height: totalSize(19),
    width: width(100),
    marginTop: height(6),
  },
  bucksContainer: {
    width: width(96),
    flexDirection: 'row',
    marginTop: height(11),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  bucks: {
    height: totalSize(25),
    width: totalSize(21),
  },
  options: {
    height: totalSize(10),
    width: totalSize(10),
  },
  optionsContainer: {
    flexDirection: 'row',
    width: width(74),
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: height(10)
  },
});
