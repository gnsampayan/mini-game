import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, PanResponder, Dimensions, GestureResponderEvent } from 'react-native';
import Character from './character';
import CharacterTracker from './components/CharacterTracker';
import TouchTracker from './components/TouchTracker';
import { CHARACTER_WIDTH } from './constants/magicConfig';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SPEED = 5; // Character speed

export default function App() {
  const [currentX, setCurrentX] = useState(0); // Character's current X position
  const [targetX, setTargetX] = useState(0); // User's touch X position
  const animationRef = useRef<number | null>(null);

  // Function to handle touch or click events
  const handleTouch = (event: GestureResponderEvent) => {
    let touchX = event.nativeEvent.locationX - CHARACTER_WIDTH / 2; // Center character on touch
    touchX = Math.max(0, Math.min(touchX, SCREEN_WIDTH - CHARACTER_WIDTH)); // Constrain within screen
    setTargetX(touchX); // Update user_current_x
  };

  // PanResponder to handle user taps and pans
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: handleTouch, // Handle taps/clicks
      onPanResponderMove: handleTouch,   // Handle drag movements
    })
  ).current;

  // Animation effect to move the character towards the target X
  useEffect(() => {
    const animate = () => {
      setCurrentX((prevX) => {
        if (Math.abs(prevX - targetX) <= SPEED) {
          return targetX;
        }
        return prevX < targetX ? prevX + SPEED : prevX - SPEED;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetX]);

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Character translateX={currentX} />
      <CharacterTracker currentX={currentX} />
      <TouchTracker touchX={targetX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
