import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Product } from "../components/Product";
import { getProductData } from "../data/productData";

export function ProductList({ navigation }) {
  function renderProduct({ item: product }) {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate("ProductDetails", {
            productId: product.id,
          });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProductData());
  });
  return (
    <FlatList
      style={styles.ProductList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
  ProductList: {
    backgroundColor: "#d9d9d9",
  },
  productsListContainer: {
    backgroundColor: "#d9d9d9",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
