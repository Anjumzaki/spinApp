import React from 'react';
import { View, Stylesheet } from 'react-native';
import { AdMobBanner, AdMobInterstitial } from 'react-native-admob';
import { BannerAdID, InterstitialAdID } from '../Utils/AppConfig';

export const BannerAd = () => {
    return(
        <View style={styles.container}>
            <AdMobBanner
                adSize="banner"
                adUnitID= {BannerAdID}
                testDevices={[AdMobBanner.simulatorId]}
                onAdFailedToLoad={error => console.error(error)}
            />
        </View>
    )
}

const styles = {
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}

export const InterstitialAd = () => {
    AdMobInterstitial.setAdUnitID(InterstitialAdID);
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
}