import { View, Text, Button } from "react-native"
import MyStyle from "./MyStyle"

const Resultado = ({ route, navigation }) => {
    const { peso, altura } = route.params
    const pesoF = parseFloat(peso)
    const alturaF = parseFloat(altura)
    const IMC = pesoF / (alturaF * alturaF)
    const IMCTruncate = IMC.toFixed(2)
    return (
        <View style={MyStyle.container}>
            <Text style={MyStyle.header}>Resultado</Text>
            <Text style={MyStyle.dados}>Seu IMC é: {IMCTruncate}</Text>
            <Text style={MyStyle.dados}>Você está: </Text>
            <Text style={MyStyle.dados}>{IMCTruncate < 17 ? "Muito abaixo do peso" : IMCTruncate < 18.49 ? "Abaixo do Peso" : IMCTruncate < 24.99 ? "Peso normal"
                : IMCTruncate < 29.99 ? "Acima do peso" : IMCTruncate < 34.99 ? "Obesidade I" : IMCTruncate < 39.99 ? "Obesidade II (Severa)" : "Obesidade III (Mórbida)"}</Text>

            <Button 
                color="#0077b6"
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}

export default Resultado