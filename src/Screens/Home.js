import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
	const navigation = useNavigation();
	const { params: { userId }} = useRoute(); //TODO:  to use for navigation to private routes?
  console.debug("params>>userId", userId);

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

