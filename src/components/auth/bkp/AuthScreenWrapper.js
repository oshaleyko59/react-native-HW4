import {
	ImageBackground,
	TouchableWithoutFeedback,
	KeyboardAvoidingView,
	Keyboard,
	StyleSheet,
	SafeAreaView,
	View,
	ScrollView,
} from "react-native";
import { bkgImage } from "../../common/constants";

export default function AuthScreenWrapper({ children }) {
	//resizeMode="cover" imageStyle ? TODO:
	return (
		<View style={styles.mainContainer}>
			<ImageBackground
				source={bkgImage}
				resizeMode="cover"
				style={styles.mainContainer}
			>{children}</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
/* 	imageBkg: {
		flex: 1,
		justifyContent: "fl ex-end",
		alignItems: "stretch",
		resizeMode: "cover",
	}, */
});

/* TODO: ?	SafeAreaView, no need if navigation stack used

				<StatusBar
					animated={true}
					barStyle={"default"}
					showHideTransition={"slide"}
					hidden={false}
				/>
   */
