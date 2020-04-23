import 'react-native-get-random-values';

import {
    Text,
} from 'react-native';
import React from 'react';
import { height, totalSize, width } from 'react-native-dimension';
import { WebView } from 'react-native-webview';
const VbuCkLink = require('../Assets/Index.html');
import 'react-native-get-random-values';

export const WebVBucks = (props) => {
    return (
        <WebView source={{ uri: 'https://reactnative.dev/' }} />
    )
}