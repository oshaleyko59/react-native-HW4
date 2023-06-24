import LoginForm from "./LoginForm";
import AuthScreen from "../AuthScreen";

const signIn = (email, password) => {
	console.info(
		`HW3@LoginScreen>>"Login" pressed for "${email}": with password "${password}"`
	);
};

export default function LoginScreen() {
	return (
		<AuthScreen>
			<LoginForm signIn={signIn} />
		</AuthScreen>
	);
}


