import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function BottomBar() {
	return (
		<Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
			<Tab.Screen name="CreatePost" component={CreatePostsScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
}



/*

import { View, StyleSheet } from "react-native";
import { Grid, User, Plus } from "react-native-feather";
import { AddPublicationBtn } from "../../components/ui/AddPublicationBtn";
import { COLORS } from "../../common/constants";
//import { styles } from "../common/styles";

export default function BottomBar({ onPress }) {
	return (
		<View style={styles.bottomBar}>
			<View style={styles.bottomBarContent}>
				<Grid
					stroke={COLORS.inactive}
					fill={COLORS.mainBkg}
					width={24}
					height={24}
				/>
				<AddPublicationBtn />
				<User
					stroke={COLORS.inactive}
					fill={COLORS.mainBkg}
					width={24}
					height={24}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	bottomBar: {
		height: 83,
		paddingTop: 9,
		backgroundColor: COLORS.mainBkg,
		borderStyle: "solid",
		borderTopWidth: 1,
		borderColor: "rgba(0, 0, 0, 0.2)",
	},

	bottomBarContent: {
		gap: 31,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});
 */
