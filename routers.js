import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialCommunityIcons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppProvider } from "./AppContext";
import Login from "./Pages/login";
import Home from './Pages/home'
import Cadastro from "./Pages/cadastro";
import Emprestimo from "./Pages/emprestimo";
import Extrato from "./Pages/extrato";
import Transferencia from "./Pages/transferencia";
import CartaoCredito from "./Pages/cartaoCredito";


const Pilha = createStackNavigator() //instanciando uma pilha de navegação
const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#E9DCB6',
                    paddingVertical: 1,
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen
                name='SAIR'
                component={Login}
                options={{
                    headerShown:false,
                    tabBarStyle:{display:'none'},
                    tabBarIcon: ({size}) => (
                        <Ionicons name='exit-outline' size={size} color={'black'}></Ionicons>
                    )
                }}
            ></Tab.Screen>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown:false,
                    // tabBarStyle:{display:'none'},
                    tabBarIcon: ({size}) => (
                        <Ionicons name='home-outline' size={size} color={'black'}></Ionicons>
                    )
                }}
            ></Tab.Screen>

            <Tab.Screen
                name='Emprestimo'
                component={Emprestimo}
                options={{
                    headerShown:false,
                    // tabBarStyle:{display:'none'},
                    tabBarIcon: ({size}) => (
                        <FontAwesome5 name='hand-holding-usd' size={size} color={'black'}></FontAwesome5>
                    ),
                }}
            ></Tab.Screen>

            <Tab.Screen
                name='CartaoCredito'
                component={CartaoCredito}
                options={{
                    headerShown:false,
                    // tabBarStyle:{display:'none'},
                    tabBarIcon: ({size}) => (
                        <Entypo name='credit-card' size={size} color={'black'}></Entypo>
                    ),
                    tabBarVisible: false,
                }}
            ></Tab.Screen>

            <Tab.Screen
                name='Extrato'
                component={Extrato}
                options={{
                    headerShown:false,
                    // tabBarStyle:{display:'none'},
                    tabBarIcon: ({size}) => (
                        <Ionicons name='newspaper-outline' size={size} color={'black'}></Ionicons>
                    ),
                    tabBarVisible: false,
                }}
            ></Tab.Screen>

            <Tab.Screen
                name='Transferencia'
                component={Transferencia}
                options={{
                    headerShown:false,
                    // tabBarStyle:{display:'none'},
                    tabBarIcon: ({size}) => (
                        <MaterialCommunityIcons name='bank-transfer' size={size} color={'black'}></MaterialCommunityIcons>
                    ),
                    tabBarVisible: false,
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

export default function Routers(){
    return(
        <NavigationContainer>
            <AppProvider>
                <Pilha.Navigator>
                    <Pilha.Screen
                        name="MyTabs"
                        component={MyTabs}
                        options={{headerShown: false}}
                    />
                    <Pilha.Screen
                        name='Login'
                        component={Login}
                        options={{headerShown: false}}
                    ></Pilha.Screen>
                    <Pilha.Screen
                        name='Cadastro'
                        component={Cadastro}
                        options={{headerShown: false}}
                    ></Pilha.Screen>
                    <Pilha.Screen
                        name='Home'
                        component={Home}
                        options={{headerShown: false}}
                    ></Pilha.Screen>
                    <Pilha.Screen
                        name='Emprestimo'
                        component={Emprestimo}
                        options={{headerShown: false}}
                    ></Pilha.Screen>
                    <Pilha.Screen
                        name='Extrato'
                        component={Extrato}
                        options={{headerShown: false}}
                    ></Pilha.Screen>
                    <Pilha.Screen
                        name='Transferencia'
                        component={Transferencia}
                        options={{headerShown: false}}
                    ></Pilha.Screen>
                    <Pilha.Screen
                        name='CartaoCredito'
                        component={CartaoCredito}
                        options={{headerShown: false}}
                    ></Pilha.Screen>
                </Pilha.Navigator>
            </AppProvider>
        </NavigationContainer>
    )
}