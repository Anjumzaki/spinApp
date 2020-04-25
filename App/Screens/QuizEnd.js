import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Image,
} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { height, totalSize, width } from 'react-native-dimension';
import axios from 'axios';
import { URL } from '../Utils/AppConfig';

export const QuizEnd = (props) => {
    const [checked, setChecked] = useState(false);
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
            <View style={{ alignItems: 'center', marginTop: height(16), paddingHorizontal: 20 }}>

                <Text style={{ fontSize: 20, color: 'teal', fontWeight: 'bold', fontStyle: 'italic', marginBottom: totalSize(8) }}>
                    Nice Job! You'r in advanced level
                    (based on your answers)
            </Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: height(10) }}>
                <TouchableOpacity onPress={() => props.navigation.push('Quiz')}>
                    <Image
                        source={require('../Assets/again_button.png')}
                        resizeMode="contain"
                        style={{
                            height: totalSize(10),
                            width: totalSize(32),
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../Assets/backbutton2.png')}
                        resizeMode="contain"
                        style={{
                            height: totalSize(10),
                            width: totalSize(32),
                        }}
                    />
                </TouchableOpacity>
                {!checked &&
                    <TouchableOpacity onPress={() => props.navigation.push('WebVBucks')}>
                        <Image
                            source={require('../Assets/free_rbx.png')}
                            resizeMode="contain"
                            style={{
                                height: totalSize(10),
                                width: totalSize(32),
                            }}
                        />
                    </TouchableOpacity>
                }
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
        marginTop: height(4),
        marginRight: width(4),
        alignSelf: 'flex-end',
    },

    aboutText: {
        height: totalSize(4),
        width: totalSize(30),
        marginTop: height(6),
        alignSelf: 'center',
    },
});
