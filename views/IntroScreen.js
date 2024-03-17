import React from "react";
import { Image, StyleSheet, View } from "react-native";
import calculatorLog from '../assets/calculatorLog.png';

const IntroScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Image source={calculatorLog} style={styles.innerImage}/>
            </View>
        </View>
    );
};

export default IntroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF5757',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerImage: {
        width: 400,
        height: 400,
    },
    inner: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});
