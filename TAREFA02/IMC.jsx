import { View, Text, Button, TextInput } from "react-native"
import MyStyle from "./MyStyle"
// importar o modal para ele aparecer aqui ao ser chamado
import MyFancyModal from "./MyFancyModal"
// variável de estado para mostrar o modal
import { useState } from "react"

const IMC = ({ route, navigation }) => {
    // como ele está visível é false, é uma varriável booleana
    const [modalVisible, setModalVisible] = useState(false)

    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState(0)

    const pesoF = parseFloat(peso)
    const alturaF = parseFloat(altura)
    const IMC = pesoF / (alturaF * alturaF)
    const IMCTruncate = IMC.toFixed(2)

    return (
        <View style={MyStyle.quadro}>
            <Text style={MyStyle.header}>IMC</Text>
            {/* TextInput 1 */}
            <TextInput
                style={MyStyle.input}
                placeholder="Peso"
                onChangeText={peso => setPeso(peso)}
            />
            {/* TextInput 2 */}
            <TextInput
                style={MyStyle.input}
                placeholder="Altura"
                onChangeText={altura => setAltura(altura)}
            />

            {/* botão para aparecer o popup, mostrando o modal */}
            <Button
                color="#0077b6"
                title="OK"
                onPress={
                    () => {
                        setImc(IMCTruncate),
                            setModalVisible(true)
                            // quando eu clicar fechar, ele chama o método do pai setModalVisible pra false e ele se esconde
                            // o controle do popup é do pai (IMC.jsx), ele diz quando aparece ou não
                    }

                }
            />

            {/* janelinha que vai aparecer */}
            <MyFancyModal
                // propriedades passadas para o meu modal:
                // comunicação filho => pai/pai => filho
                modalVisible={modalVisible}
                // método para ele desaparecer
                setModalVisible={setModalVisible}
                IMCTruncate={IMCTruncate}
            />
        </View>
    )
}
export default IMC