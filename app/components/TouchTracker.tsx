import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface TouchTrackerProps {
    touchX: number;
}

const TouchTracker: React.FC<TouchTrackerProps> = ({ touchX }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{touchX.toFixed(2)}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 100,
        left: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 5,
        borderRadius: 5,
        height: 40,
    },
    text: {
        color: '#000000',
        fontSize: 24,
    },
});

export default TouchTracker;
