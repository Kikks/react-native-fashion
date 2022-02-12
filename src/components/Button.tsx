import React from "react";
import { StyleSheet } from "react-native";
import { Text, useTheme } from "./Theme";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label?: string;
  onPress: () => void;
  style?: RectButtonProperties["style"];
}

const Button = ({ variant, label, onPress, style }: ButtonProps) => {
  const { colors } = useTheme();
  const backgroundColor =
    variant === "primary"
      ? colors.primary
      : variant === "transparent"
      ? "transparent"
      : colors.background2;
  const color = variant === "primary" ? colors.background : colors.secondary;

  return (
    <RectButton
      style={[styles.button, style, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    height: 50,
    width: 245,
    alignItems: "center",
    justifyContent: "center",
  },
});
