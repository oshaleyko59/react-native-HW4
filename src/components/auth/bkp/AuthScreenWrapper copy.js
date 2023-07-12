import {
	ImageBackground,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Keyboard,
	StyleSheet,
	SafeAreaView,
} from "react-native";
import { bkgImage } from "../../common/constants";

export default function AuthScreenWrapper({ children }) {
	//resizeMode="cover" imageStyle ? TODO:
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
			<ImageBackground
				source={bkgImage}
				resizeMode="cover"
				style={styles.imageBkg}
			>
				<SafeAreaView style={styles.mainContainer}>
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
				</SafeAreaView>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
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
