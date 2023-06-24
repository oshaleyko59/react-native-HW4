import { useState } from "react";
import {	View } from "react-native";
import { MainHeader } from "../../components/headers";
import { AuthMainBtn, AuthSecondaryBtn } from "../../components/buttons";
import PasswordInput from "../../components/inputs/PasswordInput";
import EmailInput from "../../components/inputs/EmailInput";
import StyledTextInput from "../../components/inputs/StyledTextInput";
import Avatar from "./Avatar";
import { styles } from "../../common/styles";

export default function RegistrationForm({ signUp }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [kbdStatus, setKbdStatus] = useState(false);

	return (
		<View style={[styles.formContainer, { paddingTop: 92 }]}>
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
			{!kbdStatus && (
				<View style={{ paddingTop: 8, paddingBottom: 78 }}>
					<AuthMainBtn
						title="Зареєстуватися"
						onPress={() => signUp(name, email, password)}
					/>
					<AuthSecondaryBtn
						title="Увійти"
						hint="Вже є акаунт?"
						onPress={() => console.info("@RegistrationForm>> 'Login' pressed")}
					/>
				</View>
			)}
		</View>
	);
}
