import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CharacterTrackerProps {
    currentX: number;
}

const CharacterTracker: React.FC<CharacterTrackerProps> = ({ currentX }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{currentX.toFixed(2)}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 100,
        left: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 5,
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
});

export default CharacterTracker;
