//import { useState } from "react";
import {
	StyleSheet,
	View,
	ImageBackground,
	KeyboardAvoidingView,
} from "react-native";


//import FlatButton from "../ui/FlatButton";
import AuthForm from "./AuthForm";
//import { Colors } from "../../constants/styles";

import { bkgImage } from "../../common/constants";

function AuthContent({ modeLogin, onAuthenticate }) {

	function submitHandler(credentials) {
		let { name, email, password } = credentials;
	//TODO:	validate somewherer... console.log("credentials>>", credentials);
		onAuthenticate({ name, email, password });
	}

	return (
		<View style={styles.mainContainer}>
			<ImageBackground
				source={bkgImage}
				resizeMode="cover"
				style={styles.imageBkg}
			>
				<KeyboardAvoidingView
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					<AuthForm modeLogin={modeLogin} onSubmit={submitHandler} />
				</KeyboardAvoidingView>
			</ImageBackground>
		</View>
	);
}

export default AuthContent;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	imageBkg: {
		flex: 1,
	},
	/*
	authContent: {
		marginTop: 64,
		marginHorizontal: 32,
		padding: 16,
		borderRadius: 8,
		backgroundColor: Col ors.primary800,
		elevation: 2,
		shadowColor: "black",
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.35,
		shadowRadius: 4,
	},
	buttons: {
		marginTop: 8,
	}, */
});

/* TODO: validate inputs inside respective inputs

	const emailIsValid = email.includes("@");
		const passwordIsValid = password.length > 6;
		const emailsAreEqual = email === confirmEmail;
		const passwordsAreEqual = password === confirmPassword;

		if (
			!emailIsValid ||
			!passwordIsValid ||
			(!isLo gin && (!emailsAreEqual || !passwordsAreEqual))
		) {
			Alert.alert("Invalid input", "Please check your entered credentials.");
			setCredentialsInvalid({
				email: !emailIsValid,
				confirmEmail: !emailIsValid || !emailsAreEqual,
				password: !passwordIsValid,
				confirmPassword: !passwordIsValid || !passwordsAreEqual,
			});
			return;
		} */
/*
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    name: false,
		email: false,
		password: false,
		confirmPassword: false,
	});
 */
/*
  	*/
