import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";

// Components
import { Button, Text } from "../../components";

interface SubSlideProps {
  title: string;
  description: string;
  last: boolean;
  onPress: () => void;
}

const { width } = Dimensions.get("window");

const SubSlide = ({ title, description, last, onPress }: SubSlideProps) => {
  return (
    <View style={[styles.container, { width }]}>
      <Text variant="title2" style={styles.title}>
        {title}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default SubSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  title: {
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    textAlign: "center",
    marginBottom: 30,
  },
});
