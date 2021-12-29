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
import { axiosClient } from "../client";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const signUpRedirect = () => {
    navigation.navigate("Home");
  };

  const signUpHandler = async () => {
    // axiosClient
    //   .post("/consumer", {
    //     email: email,
    //     password: password,
    //     firstName: firstName,
    //     lastName: lastName,
    //     createdTs: Date.now(),
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     signUpRedirect();
    //   })
    //   .catch((err) => console.log(err));
    signUpRedirect();
  };

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
      <TextInput
        style={styles.textInput}
        placeholder="First Name"
        placeholderTextColor={Colors.chinese}
        selectionColor={Colors.chinese}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Last Name"
        placeholderTextColor={Colors.chinese}
        selectionColor={Colors.chinese}
        onChangeText={(text) => setLastName(text)}
      />
      <TouchableOpacity style={styles.loginBtn} onPress={signUpHandler}>
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
    fontFamily: "epilogue-regular",
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
