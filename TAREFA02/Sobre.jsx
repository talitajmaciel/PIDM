import { View, Text, Button } from "react-native"
import MyStyle from "./MyStyle"

const Sobre = ({ route, navigation }) => {
    return (
        <View style={MyStyle.quadro}>
            <Text style={MyStyle.header}>Sobre</Text>
            <Text style={MyStyle.sobre}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim aliquam voluptates, accusamus natus vero mollitia quia incidunt earum autem atque temporibus, repudiandae assumenda? Enim est minima tempora voluptas nulla consectetur?</Text>

            <Button
                color="#0077b6"
                title="Home"
                // onPress={() => navigation.popToTop("Home")}
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}
export default Sobre