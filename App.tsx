import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import { Onboarding } from "./src/authentication";

// components
import { LoadAssets } from "./src/components";

const AuthenticationStack = createStackNavigator();

const fonts = {
	"SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.ttf"),
	"SFProText-SemiBold": require("./assets/fonts/SF-Pro-Text-Semibold.ttf"),
	"SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.ttf")
};

const AuthenticationNavigator = () => {
	return (
		<AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
			<AuthenticationStack.Screen name='Onboarding' component={Onboarding} />
		</AuthenticationStack.Navigator>
	);
};

export default function App() {
	return (
		<LoadAssets {...{ fonts }}>
			<AuthenticationNavigator />
		</LoadAssets>
	);
}
