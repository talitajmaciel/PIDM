import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import MyStyle from "./MyStyle"

//https://reactnative.dev/docs/modal
// MyFancyModal é o componente que vai receber como props (desccontruído)
// modalVisible a variavel que o torna visível
// e setModalVisible a variavel que o torna visível ou não
// e eu preciso da função pq ao apertar o botão se tornar invisível eu chamo a função
// comunicação pai=>filho (ou virse-versa) é sempre via PROPS, ação vinda de um para o outro
function MyFancyModal({ modalVisible, setModalVisible, IMCTruncate }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            } }>
            <View style={MyStyle.container}>
                <View style={styles.modalView}>

                    <Text style={styles.modalText}>Resultado</Text>
                    <Text style={styles.modalText}>Seu IMC é:{IMCTruncate}</Text>
                    <Text style={styles.modalText}>Você está:</Text>
                    <Text style={styles.modalText}>{IMCTruncate < 17 ? "Muito abaixo do peso" : IMCTruncate < 18.49 ? "Abaixo do Peso" : IMCTruncate < 24.99 ? "Peso normal"
                        : IMCTruncate < 29.99 ? "Acima do peso" : IMCTruncate < 34.99 ? "Obesidade I" : IMCTruncate < 39.99 ? "Obesidade II (Severa)" : "Obesidade III (Mórbida)"}</Text>

                    {/* dentro do componente do meu modal eu vou ter um botão que ao clicar eu mudo o estado dele pra not e ele desaparece e vira false*/}
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Fechar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#E8EBF0',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#8A9CB4',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#0077b6',
    },
    buttonClose: {
        backgroundColor: '#0077b6',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default MyFancyModal;