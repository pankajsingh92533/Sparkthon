//@ts-nocheck
import useCartStore, { CartItem, CartState } from "@/store/cartStore";
import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedButton } from "./ThemedButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Product } from "@/types/Product";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export const ProductCard = ({
  product,
  isCartPage = false,
  store,
}: {
  product: Product | CartItem;
  isCartPage: Boolean;
  store: CartState;
}) => {
  const existsInCart = (productId: string) => {
    return store.cartItems.some((item) => item.product_id === productId);
  };

  const getQuantity = (productId: string) => {
    const item = store.cartItems.find((item) => item.product_id === productId);
    return item ? item.quantity : 0;
  };
  return (
    <View style={styles.productCard}>
      <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.productDetailsText}>
          {product.rating} stars ({product.reviews} reviews)
        </Text>
        {(isCartPage || (!isCartPage && existsInCart(product.product_id))) && (
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={[styles.quantityButton, styles.leftButton]}
              onPress={() => store.removeItem(product.product_id)}
              //   disabled={product.quantity <= 1}
            >
              <FontAwesome name="minus" size={15} color="white" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>
              {product.quantity ?? getQuantity(product.product_id)}
            </Text>
            <TouchableOpacity
              style={[styles.quantityButton, styles.rightButton]}
              onPress={() => store.addItem(product)}
            >
              <FontAwesome name="plus" size={15} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        )}
        {!isCartPage && !existsInCart(product.product_id) && (
          <ThemedButton
            //@ts-ignore
            style={styles.addToCartButton}
            onPress={() => store.addItem(product)}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Add to Cart
            </Text>
          </ThemedButton>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    // Adjust this width as needed
    maxWidth: "85%",
    display: "flex",
    flexDirection: "row",
    margin: 5,
    marginHorizontal: "auto",
    padding: 8,
    borderRadius: 5,
    borderColor:"#d3d0d0",
    borderWidth:1,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 1,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  productDetails: {
    width: 350,
    maxWidth: "60%",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  productDetailsText: {
    fontSize: 12,
    color: "#777",
    marginBottom: 5,
  },
  quantityContainer: {
    width: 150,
    backgroundColor: "#e6f0f5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    paddingHorizontal: 0,
  },
  quantityButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  leftButton: {
    backgroundColor: "#d91629",
  },
  rightButton: {
    color: "#FFFFFF",
    backgroundColor: "#007bff",
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: "#FFFFFF",
  },
});

export default ProductCard;
