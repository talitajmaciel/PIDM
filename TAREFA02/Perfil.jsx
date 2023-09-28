import { View, Text, Button, Image } from "react-native"
import MyStyle from "./MyStyle"

const Perfil = ({ route, navigation }) => {
    // route para pegar todas as informações de cadastro
    // desconstroi as imformaçoes dele aqui
    const { nome, idade, email } = route.params
    return (
        <View style={MyStyle.quadro}>
            <Text style={MyStyle.header}>Perfil</Text>
            <Image
                source={"https://i.pinimg.com/564x/a5/a7/3f/a5a73f2511f8c91436ef587dae8a342a.jpg"}
            />

            {/* e aqui irei imprimir os valores da variavel que desconstrui usando route  */}
            <Text style={MyStyle.dados}>{nome}</Text>
            <Text style={MyStyle.dados}>{idade}</Text>
            <Text style={MyStyle.dados}>{email}</Text>

            <Button
                color="#0077b6"
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}

export default Perfil