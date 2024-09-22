import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Loading } from "@/components/Loading";
import { generateListOfIngredients } from "@/lib/generateListOfIngredients";
import { generateProductDetails } from "@/lib/generateProductDetails";
import { ProductList } from "@/components/ProductsList";
import { mockRes } from "@/constants/constants";
import { Product } from "@/types/Product";
import HomeSearchBar from "@/components/HomeSearchBar";

export default function HomeScreen() {
  const [desiredProduct, setDesiredProduct] = useState("");
  const [products, setProducts] = useState<Product[][]>([]);

  const [loading, setLoading] = useState(false);

  const handleProductInput = (text: any) => {
    console.log(text);
    setDesiredProduct(text);
  };

  const handleListGeneration = async () => {
    if (desiredProduct == "pasta") return;
    setLoading((prev) => !prev);
    const listOfIngredients = (await generateListOfIngredients(
      desiredProduct
    )) as any;
    console.log(listOfIngredients);
    const products = await generateProductDetails(listOfIngredients);
    setProducts(products);
    setLoading((prev) => !prev);
    console.log(products);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#007abd", dark: "#007abd" }}
      headerImage={
        <Image
          source={require("@/assets/images/walmart-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to the DIY Maker!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.productInputContainer}>
        <View>
          <ThemedText type="default">
            Enter desired finished product:
          </ThemedText>
          <HomeSearchBar
            handleSubmit={handleListGeneration}
            desiredProduct={desiredProduct}
            handleChange={handleProductInput}
          />
        </View>

        {/* <ThemedButton
          onPress={handleListGeneration}
          style={styles.generateButton}
        >
          <MaterialCommunityIcons
            name="send-circle-outline"
            size={50}
            color="#007abd"
          />
        </ThemedButton> */}
      </ThemedView>

      {loading ? <Loading /> : <ProductList productsArray={products} />}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  productInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 16,
  },
  sectionContainer: {
    gap: 8,
    marginBottom: 8,
  },
  generateButton: {
    marginLeft: 12,
    borderRadius: 50,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  reactLogo: {
    height: 300,
    width: 320,
    objectFit: "contain",
    marginHorizontal: "auto",
    marginVertical: "auto",
  },
});
