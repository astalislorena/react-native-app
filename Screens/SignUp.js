import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Colors from "../Constants/Colors";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.image} />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={Colors.chinese}
        selectionColor={Colors.chinese}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor={Colors.chinese}
        selectionColor={Colors.chinese}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg100,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    fontFamily: "epilogue-bold",
    width: "80%",
    backgroundColor: Colors.bg200,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 15,
    color: Colors.chinese,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: Colors.chinese,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    fontFamily: "epilogue-bold",
    color: Colors.bg100,
    fontSize: 11,
  },
  image: {
    width: 300,
    height: 300,
    padding: 30,
  },
});

export default SignUp;
