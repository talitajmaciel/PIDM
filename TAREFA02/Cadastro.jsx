// em cada tela eu irei importar um button e colocar ele em meu component
import { View, Text, Button, TextInput } from "react-native"
import MyStyle from "./MyStyle"

// na tela 01, vou ter um botão pra 02, e nela terei um pra 03 e terei um pra voltar pra 01 e na 03 terei um pra voltar tudo

// para navegar entre as telas, utiliza-se a propriedade {{props}} navigation
const Cadastro = ({ route, navigation }) => {
    // const cadastro = { nome: "", idade: "", email: "" }
    return (
        <View style={MyStyle.quadro}>
            {/* cabeçalho */}
            <Text style={MyStyle.header}>Cadastro</Text>
            {/* TextInput 1 */}
            <TextInput
                style={MyStyle.input}
                placeholder="Nome"
                onChangeText={text => Cadastro.nome = text}
            />
             {/* TextInput 2 */}
            <TextInput
                style={MyStyle.input}
                placeholder="Idade"
                onChangeText={text => Cadastro.idade = text}
            />
             {/* TextInput 3 */}
            <TextInput
                style={MyStyle.input}
                placeholder="Email"
                onChangeText={text => Cadastro.email = text}
            />

            <Button
                color="#0077b6"
                title="OK"
                // chama o navigation na função Arrow (função seta) do onPress
                // método navigate
                // e passa a string que é nome da tela "Perfil" pra onde vai ao clicar no botão
                // navigate para passar todas as informações do objeto cadastro para perfil
                onPress={() => navigation.navigate("Perfil", Cadastro)}
                // evento que navegará p/ a próxima
            />

        </View>
    )
}
export default Cadastro