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
import { Entypo } from "@expo/vector-icons";
import ProductDetails from "./screens/ProductDetails.js";
import NewProduct from "./screens/NewProduct.js";
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#000000", marginBottom: 5, fontWeight: "800" },

          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Entypo name="home" size={24} color="black" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="New Product"
        component={NewProduct}
        options={{
          tabBarLabel: "New",
          tabBarLabelStyle: { color: "#000000", marginBottom: 5, fontWeight: "800" },
          headerShown: false,
          styles: { color: "white" },
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Entypo name="upload" size={24} color="black" />
              ) : (
                <AntDesign name="upload" size={24} color="black" />
              );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarLabelStyle: { color: "#000000", marginBottom: 5, fontWeight: "800" },
          headerShown: false,
          styles: { color: "white" },
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Entypo name="shopping-cart" size={24} color="black" />
            ) : (
              <AntDesign name="shoppingcart" size={24} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: { color: "#000000", marginBottom: 5, fontWeight: "800" },
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Entypo name="user" size={24} color="black" />
            ) : (
              <AntDesign name="user" size={24} color="black" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor=" rgb(255,255,255)" barStyle="dark-content" />
      <Stack.Navigator>
        <Tab.Screen options={{ headerShown: false }} name="Main" component={MyTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="UserAccount"
          component={UserAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
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
