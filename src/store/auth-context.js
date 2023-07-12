import { createContext, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({
	isAuthenticated: false,
	authenticate: (token) => {},
	logout: () => {},
	getUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	function getUser() {
		console.log("getUser>>");
		return user;
	}

	async function authenticate(user) {
		console.log("authenticate>>", user);
		try {
			if (!user) { //TODO: validate data
				console.log(`User ${user} cannot be authenticated!`);
				throw new Error("ERROR");
      }
      user.password = '';
			console.log("setUser>>JSON", user, JSON.stringify(user));
			setUser(user);

			await AsyncStorage.setItem("user", JSON.stringify(user));
		} catch (e) {
			setUser(null);
			throw new Error(`User ${user} not authenticated!`);
		}
	}

	function logout() {
		setUser(null);
		AsyncStorage.removeItem("user");
		console.log("logout>>");
	}

	const value = {
		isAuthenticated: !!user, //make it real true
		authenticate: authenticate,
		logout: logout,
		getUser,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
