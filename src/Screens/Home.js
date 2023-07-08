import React, {useEffect} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";


function getUserById(id) {
	//TODO:
	return { email: "e-mail@example.com", name: "Natali Romanova" };
}

export default function Home() {
	const navigation = useNavigation();
	const { params: { userId }} = useRoute(); //TODO:  to use for navigation to private routes?
  console.debug("Home params>>userId", userId);

  useEffect(() => {
    const user = getUserById(userId);
    console.debug("Home useeffect>>user", user);
    navigation.navigate("Posts", { user });
	}, [userId]);

	//  navigation.navigate('Posts');
	//TODO??? return why?
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

