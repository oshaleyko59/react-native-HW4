import { View, StyleSheet } from "react-native";
import { Grid, User, Plus } from "react-native-feather";
import {AddPublicationBtn} from "../../components/buttons";
import { COLORS } from "../../common/constants";
//import { styles } from "../common/styles";

export default function BottomBar({onPress}) {
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

