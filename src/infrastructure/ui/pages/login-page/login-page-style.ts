import { Dimensions, StyleSheet } from "react-native";

const loginPageStyle = StyleSheet.create({
    container: {
        backgroundColor: "#EFECCA",
        height: Dimensions.get("screen").height,
        display: "flex",
        justifyContent: "space-between"
    },

    tree: {
        position: "absolute",
        height: Dimensions.get("screen").height / 2.5,
        width: Dimensions.get("screen").height / 3,
        bottom: 0,
        right: -40,
        marginBottom: -20,
    },
})

export default loginPageStyle;