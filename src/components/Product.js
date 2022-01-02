import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export function Product({ name, price, image, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.thumbnail} source={image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>${name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#dddddd",
    borderRadius: 25,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 1,
    marginVertical: 18,
  },

  thumbnail: {
    height: 280,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    width: "100%",
  },

  infoContainer: {
    padding: 25,
  },

  name: {
    fontSize: 21,
    fontWeight: "normal",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
