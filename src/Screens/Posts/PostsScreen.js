import { View } from "react-native";
import { LogOut } from "react-native-feather";
import { Header2 } from "../../components/headers";
import BottomBar from "./BottomBar";
import UserCard from "./UserCard";
import { COLORS } from "../../common/constants";
import { styles } from "../../common/styles";

export default function PostsScreen() {
	const user = { email: "e-mail@example.com", name: "Natali Romanova" };

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "space-between",
				backgroundColor: COLORS.mainBkg,
			}}
		>
			<View>
				<View style={styles.topBar}>
					<Header2>Публікації</Header2>
					<LogOut
						style={{ position: "absolute", right: 10, top: 10 }}
						stroke={COLORS.inactive}
						fill={COLORS.mainBkg}
						width={24}
						height={24}
					/>
				</View>
				<UserCard user={user} />
			</View>
			<BottomBar />
		</View>
	);
}
//style={{ position: "absolute", bottom: 86, zIndex: 100 }}
