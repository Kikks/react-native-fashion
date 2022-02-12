import { StyleSheet } from "react-native";
import React from "react";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";
import { interpolateColor } from "react-native-redash";

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.5, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const backgroundColor = interpolateColor(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: ["#CCC", "#2CB9B0", "#CCC"],
  });

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          backgroundColor,
          opacity,
          transform: [{ scale }],
        },
      ]}
    />
  );
};

export default Dot;

const styles = StyleSheet.create({
  dot: {
    height: 6,
    width: 6,
    borderRadius: 4,
    margin: 4,
  },
});
