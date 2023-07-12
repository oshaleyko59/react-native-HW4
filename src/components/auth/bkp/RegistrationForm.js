import { useState, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
	StyleSheet,
	View,
	KeyboardAvoidingView,
	Dimensions,Keyboard
} from "react-native";
import { MainHeader } from "../headers";
import { AuthMainBtn, AuthSecondaryBtn } from "../buttons";
import PasswordInput from "./PasswordInput";
import EmailInput from "../../components/inputs/EmailInput";
import StyledTextInput from "../../components/inputs/StyledTextInput";
import Avatar from "./Avatar";

//import { useKeyboardHeight } from "../../hooks/useKeyboardHeight";
import { UserContext } from "../../store/auth-context";

const marginTopCalculated = Dimensions.get("screen").height - 549;

export default function RegistrationForm() {
	const [keyboardHeight, setKeyboardHeight] = useState(0);
	useLayoutEffect(() => {
		const showSubscription = Keyboard.addListener("keyboardDidShow", (e) =>
			setKeyboardHeight(e.endCoordinates.height)
		);
		const hideSubscription = Keyboard.addListener("keyboardWillHide", () =>
			setKeyboardHeight(0)
		);
		return () => {
			showSubscription.remove();
			hideSubscription.remove();
		};
	}, []);

	// const kbdheight = useKeyboardHeight();
	console.log("keyboardHeight", keyboardHeight);

	const userCtx = useContext(UserContext);
	function handleSignUp() {
		userCtx.signUp(name, email, password);
/* 		if (userCtx.isLoggedIn()) {
			navigation.replace("Home", { userId: "registered1234" });
    } */
    console.log("isLoggedIn", userCtx.isLoggedIn());
	}

	const navigation = useNavigation();
	const route = useRoute();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [kbdStatus, setKbdStatus] = useState(false);

	return (
		<>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View
					style={[
						styles.formContainer,
						{ marginTop: marginTopCalculated, height: 549, paddingTop: 92 },
						kbdStatus && {
							marginTop: marginTopCalculated - keyboardHeight + 176,
							height: 291 + keyboardHeight,
						},
					]}
				>
					<Avatar />
					<MainHeader style={{ marginBottom: 32 }}>Реєстрація</MainHeader>
					<StyledTextInput
						autoComplete="name"
						autoCapitalize="words"
						placeholder="Логін"
						onEndEditing={(value) => setName(value)}
						setKbdStatus={setKbdStatus}
					/>
					<EmailInput
						onEndEditing={(value) => setEmail(value)}
						setKbdStatus={setKbdStatus}
					/>
					<PasswordInput
						onEndEditing={(value) => setPassword(value)}
						setKbdStatus={setKbdStatus}
					/>
					<AuthMainBtn title="Зареєстуватися" onPress={handleSignUp} />
					<AuthSecondaryBtn
						title="Увійти"
						hint="Вже є акаунт?"
						onPress={() => {
							console.info("@RegistrationForm>> 'Login' pressed");
							//TODO:  ??? Передача параметрів, { sessionId: 45, userId: "22e24" }
							navigation.navigate("Login");
						}}
					/>
				</View>
			</KeyboardAvoidingView>
		</>
	);
}

/* 		<View style={{ paddingTop: 8, paddingBottom: 78 }}>
marginTop: marginTopCalculated - 116,
*/
const styles = StyleSheet.create({
	formContainer: {
		backgroundColor: COLORS.mainBkg,
		paddingHorizontal: 16,
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
	},
});
