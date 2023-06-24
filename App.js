import { useFonts } from "expo-font";

//imports for navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./src/Screens/Registration/RegistrationScreen";
import LoginScreen from "./src/Screens/Login/LoginScreen";
import PostsScreen from "./src/Screens/Posts/PostsScreen";
import Home from "./src/Screens/Home";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
		"Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"), //for the future
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer>
			<MainStack.Navigator initialRouteName="Login">
				{/* Аналог Routes */}
				<MainStack.Screen name="Registration" component={RegistrationScreen} />
				<MainStack.Screen name="Login" component={LoginScreen} />
				<MainStack.Screen
					name="Home"
					component={Home}
					options={{ title: "Start screen" }}
				/>
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
