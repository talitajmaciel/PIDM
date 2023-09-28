import {View,Text,Image,Button} from "react-native"
import Questao03 from "./Questao03"
import { useState } from "react"

const Questao01 = () => {

    {/* Questã0 04 */}
    const image1 = 'https://i.pinimg.com/originals/4b/c6/6c/4bc66c07f8f07d427271a08a43de9d1c.jpg';
    const image2 = 'https://i.pinimg.com/564x/fc/a6/af/fca6afadb2c8f5a9d71a758c499be1fe.jpg';
    const [image, setImage] = useState(image1)

    const toggleImage = () => {
        if (image === image1) {
            setImage(image2)
        } else {
            setImage(image1)
        }
    }

    return (
        <View style={{alignItems:"center"}}>
            {/* Questã0 02 */}
            <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: image }}
            />

            {/* Botão para alternar a imagem da Questã0 02*/}
            <Button
                onPress={toggleImage}
                title="ALTERNAR IMAGEM"
                color="grey"  
            />

            <Text style={{fontSize:20,fontWeight:"bold"}}>
                Talita Justino Maciel
            </Text>
            <Text style={{fontSize:15}}>
                Boa Viagem - CE
            </Text>
            <Text style={{fontSize:15, color:"red"}}>
                Design Digital - 6º semestre
            </Text>

            <Questao03 color='green'/>
        </View>
    )
}
export default Questao01