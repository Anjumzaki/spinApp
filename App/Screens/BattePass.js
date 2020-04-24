import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
  TextInput,
  Alert
} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { height, totalSize, width } from 'react-native-dimension';
import { BannerAd,InterstitialAd } from '../components/AdMob';
import axios from 'axios';
import { URL } from '../Utils/AppConfig';

export const BattlePass = (props) => {
  const [name, setName] = useState("");
    const [ checked, setChecked] = useState(false);
    useEffect(() => {
      axios.get(URL)
      .then(function (response) {
        // handle success
        setChecked(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }, [])
  
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
        source={require('../Assets/battlePassText.png')}
        resizeMode="contain"
        style={styles.aboutText}
      />
      <View style={styles.searchSection}>
        <Image style={styles.searchIcon} source={require('../Assets/battleForm.png')} />
        <TextInput
          style={styles.input}
          placeholder="Enter Battle Pass Tiers"
          onChangeText={text => setName(text)}
          value={name}
          underlineColorAndroid="transparent"
          keyboardType='decimal-pad'
        />
      </View>
      <View style={{ alignItems: 'center', }}>
        <TouchableOpacity onPress={() => Alert.alert(
          'Battle Pass Tiers Cost',
          'This battle pass tiers amount will cost you:  ' + name * 30 + '  V-Bucks',
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
            source={require('../Assets/letsCount.png')}
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
    marginBottom: height(16)
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: 'orange'
  },
  searchIcon: {
    padding: 10,
    width: totalSize(10),
    height: totalSize(10)
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    backgroundColor: '#fff',
    color: '#424242',
    fontSize: totalSize(1.8),
    fontWeight: "bold"
  },
});
