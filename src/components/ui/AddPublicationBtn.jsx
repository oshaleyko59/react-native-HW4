import { Pressable, StyleSheet } from "react-native";
import { Plus } from "react-native-feather";
import { COLORS } from "../../common/constants";

//main button on Publications page
export default function AddPublicationBtn({onPress}) {
	return (
		<Pressable
			onPress={onPress}
			android_ripple={{ color: "orangered" }}
			style={({ pressed }) => [
				styles.btn,
				pressed && styles.pressed,
			]}
		>
			<Plus
				stroke={COLORS.secondaryText}
				fill={COLORS.mainBkg}
				width={20}
				height={20}
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	btn: {
		height: 40,
		width: 70,
		borderRadius: 20,
		alignItems: "center",
    padding: 10,
    color: COLORS.secondaryText,
		backgroundColor: COLORS.accent,
	},
	pressed: {
		opacity: 0.5,
	},
});
