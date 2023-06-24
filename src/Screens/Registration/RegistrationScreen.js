import AuthScreen from "../AuthScreen";
import RegistrationForm from "./RegistrationForm";

const signUp = (name, email, password) => {
	console.info(
		`HW3@RegistrationScreen>>"Register" pressed for "${name}": with "${email}" & password "${password}"`
	);
};

export default function RegistrationScreen() {
	return (
		<AuthScreen>
			<RegistrationForm signUp={signUp} />
		</AuthScreen>
	);
}
