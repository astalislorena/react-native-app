import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Data from "../Consts/Data";
import ProductCard from "./Components/ProductCard";
import ProductDetails from "./Details";
import Colors from "../Constants/Colors";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <View>
            <ProductCard
              item={item}
              onPress={() => navigation.navigate("Details", item)}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
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

export default Home;
