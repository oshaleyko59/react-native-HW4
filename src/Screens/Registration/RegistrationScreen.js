import AuthScreenWrapper from "../AuthScreenWrapper";
import RegistrationForm from "./RegistrationForm";

const signUp = (name, email, password) => {
	console.info(
		`HW3@RegistrationScreen>>"Register" pressed for "${name}": with "${email}" & password "${password}"`
	);
};

export default function RegistrationScreen({navigation}) {
	return (
		<AuthScreenWrapper>
			<RegistrationForm  navigation={navigation} signUp={signUp} />
		</AuthScreenWrapper>
	);
}

