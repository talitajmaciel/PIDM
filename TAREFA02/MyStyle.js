import { StyleSheet } from "react-native"

const MyStyle = StyleSheet.create({
    container: {
        flex: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontWeight: "bold",
        fontSize: 25,
        color: "white",
        paddingBottom: 100,
        backgroundColor: "#A1B5D8"
    },
    input: {
        width: 300,
        height: 40,
        borderColor: "#D0D9E8",
        borderWidth: 1,
        margin: 10,
        padding: 10,
        color: "white",
        fontWeight: 2
    },
    dados: {
        fontWeight: 2,
        fontSize: 20,
        color: "white",
        paddingBottom: 10,
    },
    sobre: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 15,
        width: 300,
        paddingBottom: 10,
        color: "#E8EBF0"
    },
    quadro: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#A1B5D8",   
    },
})

export default MyStyle