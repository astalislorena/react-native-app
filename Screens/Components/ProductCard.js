import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";

const ProductCard = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.image}
          source={{
            uri: item.imageUrl,
          }}
        />
      </TouchableOpacity>
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 30,
    overflow: "hidden",
    paddingLeft: 8,
    paddingVertical: 8,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    width: Dimensions.get("window").width / 2 - 15,
    height: Dimensions.get("window").height / 3,
    borderRadius: 30,
    overflow: "hidden",
  },
});

export default ProductCard;
