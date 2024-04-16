import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartingPage from "./screens/StartingPage";
import UserAccount from "./screens/UserAccount";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "./screens/Cart.js";
import Home from "./screens/Home.js";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor=" rgb(255,255,255)" barStyle="dark-content" />
      <Stack.Navigator>
        <Tab.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="UserAccount"
          component={UserAccount}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
