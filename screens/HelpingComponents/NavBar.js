import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home.js";
import Cart from "../Cart.js";
import Profile from "../Profile.js";

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        tabBarOptions={{
          activeTintColor: "#006600",
        }}
        tabBarIcon={(tabInfo) => {
          return (
            <AntDesign
              name="home"
              size={24}
              color={tabInfo.focused ? "#006600" : "#8e8e93"}
            />
          );
        }}
      />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
// <View >
// <Pressable>
//
//   <Feather name="search" size={24} color="black" />
//   <AntDesign name="shoppingcart" size={24} color="black" />
//   <AntDesign name="user" size={24} color="black" />
// </Pressable>
// </View>

export default NavBar;
