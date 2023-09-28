import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// importtando em minha tela principal as telas secundárias
import Home from './Home'
import Cadastro from './Cadastro'
import IMC from './IMC'
import Sobre from './Sobre'
import Perfil from './Perfil'
import Resultado from './Resultado'

// após criado o container, selecionei a natureza da minha navegação: pilha (stack)
// createNativeStackNavigator para criar o objeto que será usado como componente do meu container
const Stack = createNativeStackNavigator()

const MainScreen = () => {
    return (
        // container de navegação
        <NavigationContainer>
            {/*  em createNativeStackNavigator eu criei a pilha e aqui irei usar esse component que acabei de criar  */}
            
            {/* Stack - pilha, Navigator - componente interno dele */}
            {/* primeira tela da pilha é a de cima, no caso Home (initialRouteName)*/}
            <Stack.Navigator initialRouteName="Home">
                {/* estou dizendo p/ o meu navegador que existe essa tela na aplicação */}
                {/* toda terá um nome e um componente ligado a ela, no caso o obejto importado lá em cima */}
                <Stack.Screen name="Home" component={Home} options={{ 
                    title: "Home",
                    headerStyle: {
                        backgroundColor: '#bbd0ff',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      }
                    }} />
                <Stack.Screen name="Cadastro" component={Cadastro} options={{ 
                    title: "Cadastro",
                    headerStyle: {
                        backgroundColor: '#bbd0ff',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      }
                    }} />
                <Stack.Screen name="IMC" component={IMC} options={{ 
                    title: "IMC",
                    headerStyle: {
                        backgroundColor: '#bbd0ff',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      }
                    }} />
                <Stack.Screen name="Sobre" component={Sobre} options={{ 
                    title: "Sobre",
                    headerStyle: {
                        backgroundColor: '#bbd0ff',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      }
                    }} />
                <Stack.Screen name="Perfil" component={Perfil} options={{ 
                    title: "Perfil",
                    headerStyle: {
                      backgroundColor: '#bbd0ff',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    }
                }} 
                />
                <Stack.Screen name="Resultado" component={Resultado} options={{ title: "Resultado" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainScreen