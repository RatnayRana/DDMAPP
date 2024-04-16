import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
  Pressable,
  Alert
} from "react-native";
import axios from "axios";

import { useNavigation } from "@react-navigation/native";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleLogin = () => {
    const user = {
      phone: phone,
      password: password,
    };

    if (!user.phone.trim()) {
      alert("Please Enter Phone");
      return;
    }
    if (!user.password.trim()) {
      alert("Please Enter Phone");
      return;
    }

    axios
      .post("http://192.168.107.252:8000/users/login", user)
      .then((response) => {
        console.log(response.data);
        if(response.status==200){
          navigation.navigate("Home")
          Alert.alert("login is Successful");
          
        }
        setPassword("")
        setPhone("");
        
      })

      .catch((error) => {
        console.error("Error sending data: ", error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.TextStyle}>
          Login with {"\n"} Druk Digital Museum
        </Text>
        <View style={styles.main}>
          <View style={styles.Secondmain}>
            <Text>Phone</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.userInput}
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
              }}
            ></TextInput>
            <Text>Password</Text>
            <TextInput
            secureTextEntry={true}
              style={styles.userInput}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
            ></TextInput>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.lastword}> Don't have an account? </Text>
        </View>
        <Pressable
          style={styles.navigationOne}
          onPress={() => navigation.navigate("UserAccount")}
        >
          <Text style={styles.lastword2}>Register</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  TextStyle: {
    lineHeight: 36,
    fontFamily: "serif",
    padding: 10,
    textAlign: "center",
    fontSize: 22,
    marginTop: 10,
    marginRight: 90,
    // marginBottom: 30,
  },
  main: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 90,
    width: "100%",
    gap: 12,
  },
  Secondmain: {
    marginTop: 23,
    marginLeft: 30,
    marginBottom: 3,
    flex: 1,
    gap: 14,
  },
  userInput: {
    fontSize: 16,
    width: 300,
    height: 45,
    padding: 14,
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#E9EAEA",
    borderRadius: 10,
  },
  button: {
    marginTop: 23,
  },
  buttonContainer: {
    marginLeft: 30,
    marginTop: 12,
  },
  button: {
    backgroundColor: "#19C463",
    paddingVertical: 12,
    paddingHorizontal: 125,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },

  lastword: {
    top: -60,
    left: 50,
  },
  lastword2: {
    marginTop: -119,
    marginLeft: 80,
    marginBottom: 23,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  navigationOne: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Login;
