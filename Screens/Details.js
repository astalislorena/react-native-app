import React from "react";
import { Text, View } from "react-native";

export default function Details({ navigation }) {
  return (
    <View>
      <Text>{navigation.getParam("name")}</Text>
    </View>
  );
}
