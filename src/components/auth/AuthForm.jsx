import { useState, useMemo } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AuthMainBtn from "../../components/ui/AuthMainBtn";
import  AuthSecondaryBtn  from "../ui/AuthSecondaryBtn";
import PasswordInput from "./PasswordInput";
import EmailInput from "../../components/auth/EmailInput";
import StyledTextInput from "../../components/auth/StyledTextInput";
import Avatar from './Avatar';
import { COLORS } from "../../common/constants";

function AuthForm({ modeLogin, onSubmit }) {
	const [kbdStatus, setKbdStatus] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const height = useMemo(() => (modeLogin ? 489 : 549), [modeLogin]);
	const paddTop = useMemo(() => (modeLogin ? 32 : 92), [modeLogin]);
	const marginTopCalculated = useMemo(
		() => Dimensions.get("screen").height - height,
		[height]
	);

	function submitHandler() {
		onSubmit({
			name,
			email,
			password,
		});
	}
	const navigation = useNavigation();

	function onAlternativePress() {
		if (modeLogin) {
			navigation.replace("Signup");
		} else {
			navigation.replace("Login");
		}
	}

	return (
		<View
			style={[
				styles.formContainer,
				{
					marginTop: marginTopCalculated,
					height: height,
					paddingTop: paddTop,
				},
			]}
		>
			{!modeLogin && <Avatar />}
			<Text style={styles.header}>{modeLogin ? "Увійти" : "Реєстрація"}</Text>
			{!modeLogin && (
				<StyledTextInput
					autoComplete="name"
					autoCapitalize="words"
					placeholder="Логін"
					onEndEditing={(value) => setName(value)}
					setKbdStatus={setKbdStatus}
				/>
			)}
			<EmailInput
				onEndEditing={(value) => setEmail(value)}
				setKbdStatus={setKbdStatus}
			/>
			<PasswordInput
				onEndEditing={(value) => setPassword(value)}
				setKbdStatus={setKbdStatus}
			/>
			<AuthMainBtn
				title={modeLogin ? "Увійти" : "Зареєстуватися"}
				onPress={submitHandler}
			/>
			<AuthSecondaryBtn
				title={modeLogin ? "Зареєструватися" : "Увійти"}
				hint={modeLogin ? "Немає акаунту?" : "Вже є акаунт?"}
				onPress={onAlternativePress}
			/>
		</View>
	);
}

export default AuthForm;

const styles = StyleSheet.create({
	formContainer: {
		backgroundColor: COLORS.mainBkg,
		paddingHorizontal: 16,
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
	},
	header: {
		marginBottom: 32,
		fontSize: 30,
		lineHeight: 35,
		letterSpacing: 0.3,
		textAlign: "center",
		color: COLORS.mainText,
		fontFamily: "Roboto-Medium",
	},
});

/*
	buttons: {
		marginTop: 12,
	},

	function updateInputValueHandler(inputType, enteredValue) {
		switch (inputType) {
			case "email":
				setEnteredEmail(enteredValue);
				break;
			case "confirmEmail":
				setEnteredConfirmEmail(enteredValue);
				break;
			case "password":
				setEnteredPassword(enteredValue);
				break;
			case "confirmPassword":
				setEnteredConfirmPassword(enteredValue);
				break;
		}
	}


<View>
				<Input
					label="Email Address"
					onUpdateValue={updateInputValueHandler.bind(this, "email")}
					value={enteredEmail}
					keyboardType="email-address"
					isInvalid={emailIsInvalid}
				/>
				{!isLo gin && (
					<Input
						label="Confirm Email Address"
						onUpdateValue={updateInputValueHandler.bind(this, "confirmEmail")}
						value={enteredConfirmEmail}
						keyboardType="email-address"
						isInvalid={emailsDontMatch}
					/>
				)}
				<Input
					label="Password"
					onUpdateValue={updateInputValueHandler.bind(this, "password")}
					secure
					value={enteredPassword}
					isInvalid={passwordIsInvalid}
				/>
				{!isL ogin && (
					<Input
						label="Confirm Password"
						onUpdateValue={updateInputValueHandler.bind(
							this,
							"confirmPassword"
						)}
						secure
						value={enteredConfirmPassword}
						isInvalid={passwordsDontMatch}
					/>
				)}
				<View style={styles.buttons}>
					<Button onPress={submitHandler}>
						{isLo gin ? "Log In" : "Sign Up"}
					</Button>
				</View>
			</View> */
