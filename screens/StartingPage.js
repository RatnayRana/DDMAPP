import React from "react";
import { Image } from "react-native";
import { View, Text, TextInput, StyleSheet } from "react-native";
function StartingPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.TextStyle}>Welcome to the TradStore</Text>
      <Image source={require("../Images/Logo.png")} style={{width: 400, height: 400}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TextStyle: {
    fontSize: 43,
    marginBottom: 400,
  },
});

export default StartingPage;
