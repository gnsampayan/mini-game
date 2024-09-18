import React from 'react';
import { StyleSheet, View, Image, Animated } from 'react-native';
import { CHARACTER_WIDTH } from './constants/magicConfig';

interface CharacterProps {
    translateX: number;
}

const Character: React.FC<CharacterProps> = ({ translateX }) => (
    <View style={styles.container}>
        <Animated.View style={[styles.character, { transform: [{ translateX }] }]}>
            <Image source={require('../assets/images/Character.png')} style={styles.image} />
        </Animated.View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        height: 100,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
    },
    character: {
        // Additional styles if needed
    },
    image: {
        width: CHARACTER_WIDTH,
        height: 100,
    },
});

export default Character;
