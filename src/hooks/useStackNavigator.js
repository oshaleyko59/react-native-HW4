import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuthContext } from "../store/auth-context";
import LoginScreen from "../Screens/Auth/LoginScreen";
import RegistrationScreen from "../Screens/Auth/RegistrationScreen";
import HomeScreen from "../Screens/Protected/HomeScreen";
import MapScreen from "../Screens/Protected/MapScreen";
import CommentsScreen from "../Screens/Protected/CommentsScreen";
import LogoutBtn from "../components/ui/LogoutBtn";
import { COLORS } from "../common/constants";

const MainStack = createStackNavigator(); //groups Screens inside main Navigator

export function useStackNavigator() {
	function AuthStack() {
		console.log("AuthStack>>");
		return (
			<MainStack.Navigator screenOptions={{ headerShown: false }}>
				<MainStack.Screen name="Login" component={LoginScreen} />
				<MainStack.Screen name="Signup" component={RegistrationScreen} />
			</MainStack.Navigator>
		);
	}

	function ProtectedStack() {
		console.log("ProtectedStack>>");
    const { logout } = useAuthContext();

		return (
			<MainStack.Navigator
				screenOptions={{
					headerTitleAlign: "center",
					headerStyle: styles.header,
					headerTitleStyle: styles.headerTitle,
					headerRight: () => <LogoutBtn onPress={logout} />,
				}}
			>
				<MainStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
				<MainStack.Screen
					name="Map"
					component={MapScreen}
					options={{ title: "Карта" }}
				/>
				<MainStack.Screen
					name="Comments"
					component={CommentsScreen}
					options={{ title: "Коментарі" }}
				/>
			</MainStack.Navigator>
		);
	}

	//separated to use auth context
	function getStackNavigator() {
		const { isAuthenticated } = useAuthContext();
		console.log("Navigation>>isAuthenticated", isAuthenticated);
		if (isAuthenticated) return <ProtectedStack />;
		return <AuthStack />;
	}
	return {getStackNavigator};
}

const styles = StyleSheet.create({
	header: {
		height: 88,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.inactive,
	},
	headerTitle: {
		color: COLORS.mainText,
		fontFamily: "Roboto-Medium",
		fontSize: 17,
	},
});
