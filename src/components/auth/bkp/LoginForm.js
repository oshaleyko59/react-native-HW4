import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { View, KeyboardAvoidingView, Dimensions, StyleSheet } from "react-native";
import { MainHeader } from "../headers";
import { AuthMainBtn, AuthSecondaryBtn } from "../buttons";
import PasswordInput from "../PasswordInput";
import EmailInput from "../../components/inputs/EmailInput";
//import { styles } from "../../../common/stylesCommon";
//import { COLORS } from "../../common/constants";

const marginTopCalculated = Dimensions.get("screen").height - 489;

export default function LoginForm({ signIn }) {
	function handleSignIn() {
		signIn(email, password);
		navigation.replace("Home", { userId: "logged1234" });
	}

	const navigation = useNavigation();
	const [kbdStatus, setKbdStatus] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View
				style={[
					styles.formContainer,
					{ marginTop: marginTopCalculated, height: 489, paddingTop: 32 },
				]}
			>
				<MainHeader style={{ marginBottom: 32 }}>Увійти</MainHeader>
				<EmailInput
					onEndEditing={(value) => setEmail(value)}
					setKbdStatus={setKbdStatus}
				/>
				<PasswordInput
					onEndEditing={(value) => setPassword(value)}
					setKbdStatus={setKbdStatus}
				/>
				<AuthMainBtn title="Увійти" onPress={handleSignIn} />
				<AuthSecondaryBtn
					title="Зареєструватися"
					hint="Немає акаунту?"
					onPress={() => {
						navigation.navigate("Registration");
					}}
				/>
			</View>
		</KeyboardAvoidingView>
	);
}
/* 			{!kbdStatus && (
				<View style={{ paddingTop: 8, paddingBottom: 144 }}>
					<AuthMainBtn title="Увійти" onPress={handleSignIn} />
					<AuthSecondaryBtn
						title="Зареєструватися"
						hint="Немає акаунту?"
						onPress={() => {
							con sole.info("@LoginForm>> 'Register' pressed");
							navigation.navigate("Registration");
						}}
					/>
				</View>
			)} */
const styles = StyleSheet.create({
	formContainer: {
		backgroundColor: COLORS.mainBkg,
		paddingHorizontal: 16,
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
	},
});
