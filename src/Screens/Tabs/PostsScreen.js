import { View, Text, StyleSheet } from "react-native";
import { useNavigation,  } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { LogOut } from "react-native-feather";
import { useAuthContext } from "../../store/auth-context";
//import BottomBar from "../../components/ui/BottomBar";
import UserCard from "../../components/UserCard";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import { COLORS } from "../../common/constants";
//import { styles } from "../../common/stylesCommon";

export default function PostsScreen() {
  const navigation = useNavigation();
		const { getUser, logout } = useAuthContext();
  const user = getUser();
  console.debug("PostsScreen>>user", user);
  if (!user) {
    return <Text>No user ERROR</Text>
  }


	//const Tabs = createBottomTabNavigator();

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "space-between",
				backgroundColor: COLORS.mainBkg,
			}}
		>
			<View>
				<UserCard user={user} />
			</View>
			{/* <BottomBar /> */}
		</View>
	);
}
//style={{ position: "absolute", bottom: 86, zIndex: 100 }}
/*
				<Tabs.Screen hane="Posts" component="PostsScreen" />
 */

const styles = StyleSheet.create({
	topBar: {
		height: 44,
		marginTop: 50,
		paddingTop: 11,
		borderStyle: "solid",
		borderBottomWidth: 0.5,
		borderColor: "rgba(0, 0, 0, 0.3)",
		backgroundColor: COLORS.mainBkg,
	},
	header: {
		fontSize: 17,
		lineHeight: 22,
		letterSpacing: -0.41,
		textAlign: "center",
		color: COLORS.mainText,
		fontFamily: "Roboto-Medium",
	},
});

/* 				<View style={styles.topBar}>
					<Text style={styles.header}>Публікації</Text>
					<LogOut
						style={{ position: "absolute", right: 10, top: 10 }}
						stroke={COLORS.inactive}
						fill={COLORS.mainBkg}
						width={24}
						height={24}
					/>
				</View> */
