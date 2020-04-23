import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Image,
} from 'react-native';
import React from 'react';
import { height, totalSize, width } from 'react-native-dimension';
import { BannerAd,InterstitialAd } from '../components/AdMob';
const quizes = [
    {
        "question": "WHO DEVELOPED FORTNITE?",
        "answer": [
            "Microsoft",
            "Epic Games",
            "Ubisoft"
        ]
    },
    {
        "question": "HOW MANY PEOPLE PLAY IN BATTLE ROYALE?",
        "answer": [
            "100 Players",
            "50 Players",
            "30 Players"

        ]
    },
    {
        "question": "HOW LONG DO YOU HAVE UNTIL THE STORM WHEN IT FIRST BEGINS?",
        "answer": [
            "1:00 Minutes",
            "2:00 Minutes",
            "3:00 Minutes"
        ]
    },
    {
        "question": "WHAT COLOR IS THE STORM?",
        "answer": [
            "Blue",
            "Pink",
            "Purple"
        ]
    },
    {
        "question": "HOW MANY V-BUCKS YOU NEED FOR BATTLE PASS:",
        "answer": [
            "500 V-Bucks",
            "1000 V-Bucks",
            "2000 V-Bucks"
        ]
    },
    {
        "question": "HOW MUCH CIRCLES ARE THERE IN A GAME?",
        "answer": [

            "1",
            "2",
            "3"
        ]
    },
    {
        "question": "1000 V-bucks is worth __ dollars",
        "answer": [
            "10 Dollars",
            "500 Dollars",
            "1000 Dollars"

        ]
    },
    {
        "question": "HOW MUCH TIME IS IT TO USE A BANDAGE?",
        "answer": [
            "2 Seconds",
            "5 Seconds",
            "10 Seconds"
        ]
    },
    {
        "question": "WHAT IS THE MOST POPULAR PLACE ON THE MAP?",
        "answer": [
            "Tilted Towers",
            "Shifty Shafts",
            "Twin Towers "
        ]
    },
    {
        "question": "FROM THE LIST WHICH IS NOT A MODE?",
        "answer": [
            "Solo",
            "50v50",
            "Ranked"

        ]
    },

    {
        "question": "WHAT WAS THE IN-GAME CURRENCY IN FORTNITE?",
        "answer": [
            "Tickets",
            "V-Bucks",
            "Coins"

        ]
    }
]

export default class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quizNu: 0
        }
    }
    handleAnswer = () =>{
        if(quizes.length == this.state.quizNu + 1){
            this.props.navigation.push('QuizEnd')
        }
        else{
            this.setState({
                quizNu:this.state.quizNu + 1
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: totalSize(5), alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 30, color: 'teal', fontWeight: 'bold', fontStyle: 'italic' }}>
        {this.state.quizNu+1}/{quizes.length}
                    </Text>
                </View>
                <View style={{ marginTop: totalSize(8), alignItems: 'center', marginBottom: totalSize(8), flex: 1 }}>

                    <Text style={{ fontSize: 30, color: 'teal', fontWeight: 'bold', fontStyle: 'italic', marginBottom: totalSize(8) }}>
                        {quizes[this.state.quizNu].question}
                    </Text>
                    {quizes[this.state.quizNu].answer.map((item, i) => (
                        <TouchableOpacity onPress={this.handleAnswer} style={{ marginTop: totalSize(1), backgroundColor: '#3dd2e3', width: '100%', alignItems: 'center', padding: 20, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>{item}</Text>
                        </TouchableOpacity>
                    ))}

                </View>
                <BannerAd/>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: width(4),

        marginLeft: width(4),

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
