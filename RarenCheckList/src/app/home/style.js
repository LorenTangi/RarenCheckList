
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    header: {
        padding:25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#27233a',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff4e4',
    },
   footer:{
        position: "absolute",
        bottom: 0,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal:20,
        backgroundColor: "#27233a",
        bordertTopLeftRadius: 30,
        borderTopRightRadius: 30
   },
    inputContainer: {
        backgroundColor:"#27233a",
        elevation: 40,
        flex: 1,
        height: 50,
        marginVertical: 20,
        borderRadius: 30,
        paddingHorizontal: 20,
        justifyContent: "center",
        color: "white"
    },
    iconContainer:{
        borderRadius: 25,
        height: 50,
        width: 50,
        backgroundColor: "#27233a",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: 'white',
        backgroundColor: 'white'
    }
})

