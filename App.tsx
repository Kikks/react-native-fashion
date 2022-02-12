import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

// screens
import {
  Onboarding,
  Welcome,
  assets as authenticationAssets,
} from "./src/authentication";

// components
import { LoadAssets } from "./src/components";
import { ThemeProvider } from "./src/components/Theme";
import { Routes } from "./src/components/Navigation";

const AuthenticationStack = createStackNavigator<Routes>();

const assets = [...authenticationAssets];

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.ttf"),
  "SFProText-SemiBold": require("./assets/fonts/SF-Pro-Text-Semibold.ttf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.ttf"),
};

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LoadAssets {...{ fonts, assets }}>
        <AuthenticationNavigator />
        <StatusBar hidden />
      </LoadAssets>
    </ThemeProvider>
  );
}
