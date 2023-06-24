import { View, Text, Pressable, StyleSheet } from "react-native";
import { Plus } from "react-native-feather";
import { COLORS } from "../common/constants";

export function PlainTextBtn({ title, onPress }) {
	return (
		<Pressable
			onPress={onPress}
			android_ripple={{ color: "orangered" }}
			style={({ pressed }) => [
				pressed && styles.pressed,
			]}
			>
			<Text style={[styles.secondaryBtnTitle, styles.underlined]}>{title}</Text>
		</Pressable>
	);
}

//secondary button on Login and Registration page (shapeless)
export function AuthSecondaryBtn({ title, hint, onPress }) {
	return (
		<View style={{ flexDirection: "row", justifyContent: "center", gap: 4 }}>
			<Text style={styles.secondaryBtnTitle}>{hint}</Text>
			<PlainTextBtn title={title} onPress={onPress} />
		</View>
	);
}

//main button on the page - Login / Register
export function AuthMainBtn({ title, onPress }) {
	return (
    <Pressable
      onPress={onPress}
      android_ripple={{color: 'orangered'}}
			style={({ pressed }) =>
				[{marginBottom: 16}, styles.textBtn, styles.accented, pressed && styles.pressed]
      }>
			<Text style={styles.btnTitle}>{title}</Text>
		</Pressable>
	);
}

//main button on Publications page
export function AddPublicationBtn({onPress}) {
	return (
		<Pressable
			onPress={onPress}
			android_ripple={{ color: "orangered" }}
			style={({ pressed }) => [
				styles.plusBtn,
				styles.accented,
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

//button to show/hide password
export function ShowHideBtn({ title, onPress}) {
	return (
		<Pressable
			onPress={onPress}
			android_ripple={{ foreground: true, color: COLORS.accent }}
			style={({ pressed }) => [
				{alignSelf:'flex-end',
					top: -50,
					right: 16,
				},
				pressed && styles.pressed,
			]}
		>
			<Text style={styles.secondaryBtnTitle}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	textBtn: {
		height: 51,
		borderRadius: 100,
		alignItems: "center",
		padding: 16,
	},
	plusBtn: {
		height: 40,
		width: 70,
		borderRadius: 20,
		alignItems: "center",
		padding: 10,
	},

	accented: {
		color: COLORS.secondaryText,
		backgroundColor: COLORS.accent,
	},
	pressed: {
		opacity: 0.5,
	},
	btnTitle: {
		color: COLORS.secondaryText,
		fontSize: 16,
		fontFamily: "Roboto-Regular",
  },
  secondaryBtnTitle: {
		color: COLORS.linkText,
		fontSize: 16,
		lineHeight: 19,
		fontFamily: "Roboto-Regular",
	},
});
