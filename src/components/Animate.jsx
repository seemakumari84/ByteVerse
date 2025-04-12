import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, x: "-100%" }, // Start from left
  animate: { opacity: 1, x: 0 }, // Move to the center
  exit: { opacity: 0, x: "100%" }, // Exit to right
  transition: { duration: 0.6 } // Adjust duration as needed
};

const alternateAnimations = {
  initial: { opacity: 0, x: "100%" }, // Start from right
  animate: { opacity: 1, x: 0 }, // Move to the center
  exit: { opacity: 0, x: "-100%" }, // Exit to left
  transition: { duration: 0.6 } // Adjust duration as needed
};

const AnimatedPage = ({ children, alternate = false }) => {
  return (
    <motion.div
      initial={alternate ? alternateAnimations.initial : animations.initial}
      animate={alternate ? alternateAnimations.animate : animations.animate}
      exit={alternate ? alternateAnimations.exit : animations.exit}
      transition={alternate ? alternateAnimations.transition : animations.transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
