import LoginForm from "./LoginForm";
import AuthScreenWrapper from "../AuthScreenWrapper";

const signIn = (email, password) => {
	console.info(
		`HW3@LoginScreen>>"Login" pressed for "${email}": with password "${password}"`
	);
};

export default function LoginScreen() {
	return (
		<AuthScreenWrapper>
			<LoginForm signIn={signIn} />
		</AuthScreenWrapper>
	);
}


