import React, { useState } from "react";
import {
  navigate,
  TextInput,
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  Alert,
  Pressable,
  TouchableOpacity,
} from "react-native";
import CheckBox from "expo-checkbox";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
function UserAccount() {
  const [name, setname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name: name,
      phone: phone,
      password: password,
    };

    if (!user.name.trim()) {
      alert("Please Enter Name");
      return;
    }
    if (!user.phone.trim()) {
      alert("Please Enter Phone");
      return;
    }
    if (!user.password.trim()) {
      alert("Please Enter Password");
      return;
    }

    if (isSelected) {
      axios
        .post("http://192.168.107.252:8000/users/register", user)
        .then((response) => {
          if (response.status === 200) {
            navigation.navigate("Login");
            setname("");
            setPassword("");
            setPhone("");
            setSelection("");
            Alert.alert("Registration is successful");
          } 
        })
        .catch((error) => {
          Alert.alert("Registrattion is unsuccessful");
          navigation.navigate("UserAccount");
          setname("");
          setPassword("");
          setPhone("");
          setSelection("");
          console.error("Error registering user: ", error);
          // Handle error
        });
    } else {
      Alert.alert(
        "You have failed to check the terms and the condition of the app"
      );
    }
  };

  // contentContainerStyle={{ flexGrow: 1 }}
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.TextStyle}>
          Create account with {"\n"} Druk Digital Museum
        </Text>
        <View style={styles.main}>
          <View style={styles.Secondmain}>
            <Text>Username</Text>
            <TextInput
              style={styles.userInput}
              value={name}
              onChangeText={(text) => {
                setname(text);
              }}
            ></TextInput>
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
          <View style={styles.subCheckbox}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>
              I accept the terms and privacy policy
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lastone}>
          <Text style={styles.lastword}>Already have an account? </Text>
          <Pressable
            style={styles.navigationOne}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.lastword1}>Log in</Text>
          </Pressable>
        </View>
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
    marginTop: 60,
    marginRight: 90,
    // marginBottom: 30,
  },
  main: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 100,
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
  subCheckbox: {
    marginBottom: 150,
    marginLeft: 35,
    flex: 1,
    flexDirection: "row",
    gap: 15,
  },
  checkbox: {
    borderRadius: 50,
  },
  button: {
    marginTop: 23,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 90,
    left: 38,
  },
  button: {
    backgroundColor: "#19C463",
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  lastone: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 23,
  },
  lastword: {
    position: "absolute",
    bottom: 160,
    left: 40,
  },
  lastword1: {
    position: "absolute",
    bottom: 162,
    left: 220,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});

export default UserAccount;
