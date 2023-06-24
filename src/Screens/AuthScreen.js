import {
	ImageBackground,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Keyboard,
	StyleSheet,
} from "react-native";
import { bkgImage } from "../common/constants";

export default function AuthScreen({ children }) {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
			<ImageBackground source={bkgImage} style={styles.imageBkg}>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={{ flex: 1, justifyContent: "flex-end" }}
				>
					<TouchableWithoutFeedback
						onPress={Keyboard.dismiss}
						style={{ flex: 1 }}
					>
						{children}
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	imageBkg: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "stretch",
		resizeMode: "cover",
	},
});

/* TODO: ?	SafeAreaView,

				<StatusBar
					animated={true}
					barStyle={"default"}
					showHideTransition={"slide"}
					hidden={false}
				/>
   */
