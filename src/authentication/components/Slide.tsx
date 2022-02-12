import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

// components
import { Text, useTheme } from "../../components";

interface SlideProps {
  label: string;
  right?: boolean;
}

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.6 * height;

const Slide = ({ right, label }: SlideProps) => {
  const theme = useTheme();
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    {
      translateX: right ? width / 2 - 50 : -width / 2 + 50,
    },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.titleContainer,
          {
            transform,
          },
        ]}
      >
        <Text variant="hero">{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  title: {
    fontSize: 70,
    lineHeight: 70,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "SFProText-Bold",
    textAlign: "center",
  },
  titleContainer: {
    height: 100,
  },
});

export default Slide;
