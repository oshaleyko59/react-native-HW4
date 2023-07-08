import { useFonts } from "expo-font";

//imports for navigation

//-required in App for expo, to use react-navigation stack,
//-(along with react-native-screens TODO: ???
//- & react-native-safe-area-context  TODO: ???)
import "react-native-gesture-handler";

//-wrapper, like BrowserRouter
import { NavigationContainer } from "@react-navigation/native";
//-for navigation tasks - returns Screens and Navigator
import { createStackNavigator } from "@react-navigation/stack";

//screens
import RegistrationScreen from "./src/Screens/Registration/RegistrationScreen";
import LoginScreen from "./src/Screens/Login/LoginScreen";
import PostsScreen from "./src/Screens/Posts/PostsScreen";
import Home from "./src/Screens/Home";

const MainStack = createStackNavigator(); //groups Screens inside main Navigator

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
			<MainStack.Navigator initialRouteName="Login">{/* render starts with Login */}
				<MainStack.Screen name="Registration" component={RegistrationScreen} />
				<MainStack.Screen name="Login" component={LoginScreen} />
				<MainStack.Screen
					name="Home"
					component={Home}
					options={{ title: "Start screen" }}
        /><MainStack.Screen name='Posts' component={PostsScreen} />
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
