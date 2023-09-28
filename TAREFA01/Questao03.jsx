import {View,Text} from "react-native"

const Questao03 = ({color}) => {
    return (
        <View style={{alignItems:"center"}}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>
                Disciplinas Favoritas
            </Text>
            <Text style={{fontSize:15, color}}>
                Desenho I
            </Text>
            <Text style={{fontSize:15, color}}>
                Tipografia
            </Text>
            <Text style={{fontSize:15, color}}>
                User Experiense
            </Text>
            <Text style={{fontSize:15, color}}>
                Avaliação de IHC
            </Text>
        </View>
    )
}
export default Questao03