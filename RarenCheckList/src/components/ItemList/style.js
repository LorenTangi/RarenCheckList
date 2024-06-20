
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemList: {
        padding: 15,
        elevation: 12,
        borderRadius: 7,
        backgroundColor: "#27233a",
        borderWidth: 2,
        borderColor: "white",
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // color: '#fff4e4'
    },
    itemToBuy: {
        color: '#fff4e4',
        fontSize: 22,
        textDecorationLine: "none"
    },
    itemBought: {
        color: '#fff4e4',
        fontSize: 22,
        textDecorationLine: "line-through"
    },
    actionIcon: {
        height: 40,
        width: 40,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        borderRadius: 20,
    },
});
