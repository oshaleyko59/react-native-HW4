/* import LoginForm from "../../components/auth/LoginForm";
import AuthScreenWrapper from "../../components/auth/AuthScreenWrapper";

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
 */
import { useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../../components/auth/AuthContent';
import Loading from '../../components/ui/Loading';
import { useAuthContext } from '../../store/auth-context';

function LoginScreen() {
  const [isBusy, setIsBusy] = useState(false);

  const {authenticate} = useAuthContext();

  async function loginHandler({ email, password }) {
    setIsBusy(true);
    try {
      await authenticate({ email, password });
    } catch (error) {
      console.log('error', error);
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials!'
      );
    } finally {
      setIsBusy(false);
    }
  }

  if (isBusy) {
    return <Loading msg="Logging you in..." />;
  }

  return <AuthContent modeLogin={true} onAuthenticate={loginHandler} />;
}

export default LoginScreen;
