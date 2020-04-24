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
  import { BannerAd, InterstitialAd } from '../components/AdMob';
  import axios from 'axios';
  import { URL } from '../Utils/AppConfig';
  
  export const VBuckToDollars = (props) => {

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
    const [name, setName] = useState("")
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
         
            props.navigation.navigate('About')
          }}>
          <Image
            source={require('../Assets/share.png')}
            resizeMode="contain"
            style={styles.share}
          />
        </TouchableWithoutFeedback>
        <Image
          source={require('../Assets/titile1.png')}
          resizeMode="contain"
          style={styles.aboutText}
        />
        <View style={styles.searchSection}>
          <Image style={styles.searchIcon} source={require('../Assets/little_ic2.png')} />
          <TextInput
            style={styles.input}
            placeholder="Enter VBucks Amount"
            onChangeText={text => setName(text)}
            value={name}
            underlineColorAndroid="transparent"
            keyboardType='decimal-pad'
          />
        </View>
        <View style={{ alignItems: 'center', }}>
          <TouchableOpacity onPress={() => Alert.alert(
            'V-Bucks to Dollars',
            'Buying this much V-vucks will cost you:  ' + name / 100 + '  V-Bucks',
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
              source={require('../Assets/calc_btn4.png')}
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
      borderColor: '#3dd2e3'
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
  