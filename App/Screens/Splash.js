import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import {totalSize, height} from 'react-native-dimension';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = async () => {
    setTimeout(() => {
        this.props.navigation.navigate('Home');
    }, 2000);
  };

  render() {
    return (
      <View
        style={styles.container}>
        <View style={{overflow: 'hidden'}}>
          <Image
            source={require('../Assets/Logo.png')}
            resizeMode="contain"
            style={{height: totalSize(30), width: totalSize(30)}}
          />
        </View>
        <View style={{position: 'absolute', bottom: height(5)}}>
          <ActivityIndicator size={'large'} color="#2dadc0" />
        </View>
      </View>
    );
  }
}

export default Splash;


const styles=StyleSheet.create({
    container:{flex:1,alignItems: 'center', justifyContent: 'center'},
})