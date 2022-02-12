import { Dimensions, Image, StyleSheet } from "react-native";
import React from "react";

// components
import { Box, Button, Text, useTheme } from "../../components";

const picture = {
  src: require("./assets/1.png"),
  height: 1800,
  width: 1254.92,
};

export const assets = [picture.src];

const { width, height } = Dimensions.get("window");

const Welcome = () => {
  const theme = useTheme();

  return (
    <Box flex={1} backgroundColor="background" overflow="hidden">
      <Box
        flex={1}
        backgroundColor="background2"
        borderBottomRightRadius="xl"
        justifyContent="center"
        alignItems="center"
      >
        <Text variant="hero" style={styles.heroText}>
          out
        </Text>

        <Image
          source={picture.src}
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              width: width - theme.borderRadii.xl,
              height:
                ((width - theme.borderRadii.xl) * picture.height) /
                picture.width,
              transform: [{ translateX: 30 }],
            },
          ]}
        />
      </Box>
      <Box flex={1} backgroundColor="background2">
        <Box
          py="s"
          px="l"
          position="absolute"
          top={0}
          right={0}
          left={0}
          bottom={0}
          borderTopLeftRadius="xl"
          backgroundColor="background"
          flex={1}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Text variant="title2" style={styles.centerAlign}>
            Let's get started
          </Text>
          <Text variant="body" style={styles.centerAlign}>
            Login to your account below or sign up for an amazing experience.
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => null}
          />
          <Button
            variant="default"
            label="Join us, it's free"
            onPress={() => null}
          />
          <Button
            variant="transparent"
            label="Forgot Password?"
            onPress={() => null}
            style={{ marginTop: -10 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  heroText: {
    width: "200%",
    fontSize: 320,
    lineHeight: 320,
    letterSpacing: -20,
    textAlign: "center",
    transform: [{ translateX: -30 }],
  },
  centerAlign: {
    textAlign: "center",
  },
});
