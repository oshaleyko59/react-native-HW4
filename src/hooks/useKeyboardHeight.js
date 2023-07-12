import {useState,  useLayoutEffect } from "react";
import { Keyboard } from "react-native";
//import {  } from "./mounted";

export function useKeyboardHeight() {
	const [keyboardHeight, setKeyboardHeight] = useState(0);

	useLayoutEffect(() => {
		const showSubscription = Keyboard.addListener("keyboardDidShow", (e) =>
			setKeyboardHeight(e.endCoordinates.height)
		);
		const hideSubscription = Keyboard.addListener("keyboardWillHide", () =>
			setKeyboardHeight(0)
		);
		return () => {
			showSubscription.remove();
			hideSubscription.remove();
		};
	}, [setKeyboardHeight]);

	return keyboardHeight;
}
