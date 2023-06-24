import { useState } from "react";
import { View } from "react-native";
import StyledTextInput from "./StyledTextInput";
import {ShowHideBtn} from "../buttons";

export default function PasswordInput({ onEndEditing, setKbdStatus }) {
	const [isPasswordVisible, setPasswordVisible] = useState(false);

	return (
		<View>
			<StyledTextInput
				autoComplete="current-password"
				autoCapitalize="none"
				placeholder="Пароль"
				onEndEditing={onEndEditing}
				secureTextEntry={!isPasswordVisible}
				setKbdStatus={setKbdStatus}
			/>
			<ShowHideBtn
				title={isPasswordVisible ? "Сховати" : "Показати"}
				onPress={() => {
					setPasswordVisible(!isPasswordVisible);
				}}
			/>
		</View>
	);
}

