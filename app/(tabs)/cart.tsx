import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import useCartStore, { CartItem } from "@/store/cartStore";
import ProductCard from "@/components/ProductCard";
import { ThemedButton } from "@/components/ThemedButton";
import { router } from "expo-router";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  const store = useCartStore();
  console.log(store.cartItems);
  const total = store.cartItems?.reduce((acc, item) => acc + item.price, 0);
  const createTwoButtonAlert = () =>
    Alert.alert("Clear Cart", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => store.clearCart() },
    ]);

  return (
    <>
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
          <ThemedView style={{ display: "flex", flexDirection: "row", gap: 6 }}>
            <ThemedText type="title">Cart!</ThemedText>
            <Feather name="shopping-cart" size={30} color="#fcbb2f" />
            {/* <HelloWave /> */}
          </ThemedView>

          <ThemedView>
            <ThemedButton handlePress={createTwoButtonAlert}>
              <MaterialIcons name="delete-outline" size={36} color="red" />
            </ThemedButton>
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          {store.cartItems?.map((item: CartItem, index) => {
            return (
              <ProductCard
                product={item}
                key={index}
                isCartPage={true}
                store={store}
              />
            );
          })}
        </ThemedView>
      </ParallaxScrollView>
      <ThemedView style={styles.checkout}>
        <View style={styles.checkoutPrice}>
          <Text style={styles.totalPrice}>{total.toFixed(2)}$</Text>
        </View>
        <TouchableOpacity
          style={styles.fullButton}
          onPress={() => router.push("/checkout")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Checkout</Text>
        </TouchableOpacity>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: "15%",
  },
  reactLogo: {
    height: 300,
    width: 320,
    objectFit: "contain",
    marginHorizontal: "auto",
    marginVertical: "auto",
  },
  checkout: {
    position: "absolute",
    paddingHorizontal: 12,
    height: "10%",
    width: "100%",
    bottom: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "black", // Add shadow color
    shadowOffset: { width: 0, height: 2 }, // Add shadow offset
    shadowOpacity: 0.1, // Add shadow opacity
    shadowRadius: 10, // Add shadow radius
  },
  fullButton: {
    backgroundColor: "#28a745",
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 50,
  },
  checkoutPrice: {
    borderColor: "#a0a0a0", // Add border color
    borderWidth: 1, // Add border width
    borderRadius: 8, // Add border radius
    padding: 8, // Add padding
    height: 50,
    display: "flex", // Add display flex
    flexDirection: "row",
    alignItems: "center", // Add align items center
    justifyContent: "center", // Add justify content center
  },
  totalPrice: {
    color: "#444343",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },
});
