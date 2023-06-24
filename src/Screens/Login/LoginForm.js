import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { View } from "react-native";
import { MainHeader } from "../../components/headers";
import { AuthMainBtn, AuthSecondaryBtn } from "../../components/buttons";
import PasswordInput from "../../components/inputs/PasswordInput";
import EmailInput from "../../components/inputs/EmailInput";
import { styles } from "../../common/styles";

export default function LoginForm({ signIn }) {
	const navigation = useNavigation();
		const {
		params //: { userId }
	} = useRoute(); //TODO:  Приймання параметрів
	console.debug("params>>", params);
	function handleSignIn() {
		signIn(email, password);
		navigation.navigate("Home");
	}
	const [kbdStatus, setKbdStatus] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View style={[styles.formContainer, { paddingTop: 32 }]}>
			<MainHeader style={{ marginBottom: 32 }}>Увійти</MainHeader>
			<EmailInput
				onEndEditing={(value) => setEmail(value)}
				setKbdStatus={setKbdStatus}
			/>
			<PasswordInput
				onEndEditing={(value) => setPassword(value)}
				setKbdStatus={setKbdStatus}
			/>
			{!kbdStatus && (
				<View style={{ paddingTop: 8, paddingBottom: 144 }}>
					<AuthMainBtn title="Увійти" onPress={handleSignIn} />
					<AuthSecondaryBtn
						title="Зареєструватися"
						hint="Немає акаунту?"
						onPress={() => {
							console.info("@LoginForm>> 'Register' pressed");
							navigation.navigate("Registration");
						}}
					/>
				</View>
			)}
		</View>
	);
}
