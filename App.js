import { useState, useLayoutEffect } from "react";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useStackNavigator } from "./src/hooks/useStackNavigator";

import AuthContextProvider, { useAuthContext } from "./src/store/auth-context";
import Loading from "./src/components/ui/Loading";

//separated to get rid of Login flickering
function Root() {
	const { getStackNavigator } = useStackNavigator();
	console.log("Root>>getStackNavigator", getStackNavigator);
	const [isLoading, setIsLoading] = useState(true);
	const { authenticate, isAuthenticated } = useAuthContext();

	useLayoutEffect(() => {
		async function fetchUser() {
			try {
				const storedUser = await AsyncStorage.getItem("user");

				if (storedUser != null) {
					authenticate(JSON.parse(storedUser));
				}
				console.log("storedUser>>isAuthenticated", storedUser, isAuthenticated);
			} catch (e) {
				console.log("fetchUser>> ERROR", e.message);
			} finally {
				setIsLoading(false);
			}
		}

		fetchUser();
	}, []);

	return isLoading ? (
		<Loading msg="Loading..." />
	) : (
		<NavigationContainer>{getStackNavigator()}</NavigationContainer>
	);
}

export default function App() {
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
		"Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"), //for the future
	});

	if (!fontsLoaded) {
		return <Loading msg="Loading..." />;
	}

	console.log("App>>");
	return (
		<AuthContextProvider>
			<Root />
		</AuthContextProvider>
	);
}
