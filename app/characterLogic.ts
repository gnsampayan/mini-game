import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacterCurrentX } from './redux/actions/userActions';
import { RootState } from './redux/store';
import { CHARACTER_SPEED } from './constants/magicConfig'; // Import CHARACTER_SPEED

export default function useCharacterMovement() {
  const dispatch = useDispatch();
  const characterCurrentX = useSelector((state: RootState) => state.user.characterCurrentX);
  const destinationX = useSelector((state: RootState) => state.user.userCurrentX);
  
  const isAnimating = useRef(false); // Track if animation is running

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      let newX = characterCurrentX;

      if (characterCurrentX < destinationX) {
        newX = Math.min(characterCurrentX + CHARACTER_SPEED * 0.01, destinationX);
      } else if (characterCurrentX > destinationX) {
        newX = Math.max(characterCurrentX - CHARACTER_SPEED * 0.01, destinationX);
      }

      // Clamp newX between 0 and 100
      newX = Math.max(0, Math.min(newX, 100));

      console.log(`characterCurrentX: ${characterCurrentX}, newX: ${newX}`); // Debugging line

      if (newX !== characterCurrentX) {
        dispatch(setCharacterCurrentX(newX));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        isAnimating.current = false; // Animation completed
      }
    };

    if (characterCurrentX !== destinationX && !isAnimating.current) {
      isAnimating.current = true;
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [characterCurrentX, destinationX, dispatch]);

  return characterCurrentX;
}
