import {View,Text, Button} from "react-native"
import MyStyle from "./MyStyle"
import { useState } from "react"

// const student = {name:"Talita"}

const Home = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={MyStyle.quadro}>
            <Text style={MyStyle.header}>Home</Text>
            <Button
                color="#0077b6"
                title="Cadastro"
                onPress={()=>navigation.navigate("Cadastro")}
            />
            <Button
                color="#0077b6"
                title="      IMC      "
                onPress={()=>navigation.navigate("IMC")}
            />
            <Button
                color="#0077b6"
                title="    Sobre    "
                onPress={()=>navigation.navigate("Sobre")}
            />
        </View>
    )
}
export default Home