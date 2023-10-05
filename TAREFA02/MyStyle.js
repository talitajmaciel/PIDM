// meu arquivo "css" (não existe css nativo) para estilizar em js, preciso importar StyleSheet
import { StyleSheet } from "react-native"

// e fazer uma cont que retorna StyleSheet.create
// essa constante pode ser feita assim em um arquivo separado ou solto no fim do código
const MyStyle = StyleSheet.create({
    // e vai criando as classes e chamando-as a const.classe
    // dentro da propriedade style={MyStyle.container}
    // numero sem aspas/palavras=string comn aspas

    // container é a classe básica do seu layout
    container: {
        // propriedades da classe:
        flex: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    // , para criar outra classe para estilizar
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

// exporto ele para importar no arquivo onde eu quiser estlizar com essas classes
export default MyStyle