import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
} from "react-native";
import CheckBox from "expo-checkbox";
function UserAccount() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.TextStyle}>
          Create account with {"\n"} Druk Digital Museum
        </Text>
        <View style={styles.main}>
          <View style={styles.Secondmain}>
            <Text>Username</Text>
            <TextInput style={styles.userInput}></TextInput>
            <Text>Phone</Text>
            <TextInput style={styles.userInput}></TextInput>
            <Text>Password</Text>
            <TextInput style={styles.userInput}></TextInput>
          </View>
          <View style={styles.subCheckbox}>
            <CheckBox
              //   value={isSelected}
              //   onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>
              I accept the terms and privacy policy
            </Text>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.lastone}>
            <Text style={styles.lastword}>Already have an account? </Text>
          
            <Text style={styles.lastword1}>Log in</Text>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position:"relative",
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
    marginTop: 120,
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
    position:"absolute",
    bottom:90,
    left:38,
    
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop:-500
  },
  button: {
    backgroundColor: "#19C463",
    paddingVertical: 12,
    paddingHorizontal: 72,
    borderRadius: 10,
    
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  lastone:{
    position:"relative",
    flex:1,
    justifyContent:"center",
    flexDirection:"row",
    alignItems:"center",
    // gap:23
  },
  lastword:{
    position:"absolute",
    bottom:170,
    left:50
  },
  lastword1:{
    position:"absolute",
    bottom:170,
    left:220,
    borderBottomWidth: 1, // Adjust the width as needed
    borderBottomColor: 'black', // Adjust the color as needed
    borderBottomStyle: 'solid',
    
  }
});

export default UserAccount;
