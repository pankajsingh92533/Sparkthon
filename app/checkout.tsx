import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import ConfettiCannon from "react-native-confetti-cannon";
import { Link } from "expo-router";
import useCartStore from "@/store/cartStore";
import ProductCard from "@/components/ProductCard";
import { Colors } from "@/constants/Colors";

const checkout = () => {
  const store = useCartStore();
  const [order, setOrder] = useState(false);

  const FEES = {
    service: 2.99,
    delivery: 5.99,
  };

  const startCheckout = () => {
    setOrder(true);
    store.clearCart();
  };

  const total = store.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      {order && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          fallSpeed={2500}
          fadeOut={true}
          autoStart={true}
        />
      )}
      {order && (
        <View style={{ marginTop: "50%", padding: 20, alignItems: "center" }}>
          <Text
            style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}
          >
            Thank you for your order!
          </Text>
          <Link href={"/"} asChild>
            <TouchableOpacity style={styles.orderBtn}>
              <Text style={styles.footerText}>New order</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}
      {!order && (
        <>
          <FlatList
            data={store.cartItems}
            ListHeaderComponent={<Text style={styles.section}>Items</Text>}
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: Colors.grey }} />
            )}
            renderItem={({ item, index }) => (
              <ProductCard
                product={item}
                key={index}
                isCartPage={true}
                store={store}
              />
            )}
            ListFooterComponent={
              <View style={{marginBottom:"30%"}}>
                <View
                  style={{ height: 1, backgroundColor: Colors.grey }}
                ></View>
                <View style={styles.totalRow}>
                  <Text style={styles.total}>Subtotal</Text>
                  <Text style={{ color: "#007abd", fontSize: 14 }}>
                    ${total}
                  </Text>
                </View>

                <View style={styles.totalRow}>
                  <Text style={styles.total}>Service fee</Text>
                  <Text style={{ fontSize: 14 }}>${FEES.service}</Text>
                </View>

                <View style={styles.totalRow}>
                  <Text style={styles.total}>Delivery fee</Text>
                  <Text style={{ fontSize: 14 }}>${FEES.delivery}</Text>
                </View>
                <View
                  style={{
                    height: 1,
                    backgroundColor: Colors.grey,
                  }}
                ></View>
                <View style={styles.totalRow}>
                  <Text style={styles.total1}>Order Total</Text>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    ${(total + FEES.service + FEES.delivery).toFixed(2)}
                  </Text>
                </View>
              </View>
            }
          />

          <View style={styles.footer}>
            <SafeAreaView
              edges={["bottom"]}
              style={{ backgroundColor: "#fff" }}
            >
              <TouchableOpacity
                style={styles.fullButton}
                onPress={startCheckout}
              >
                <Text style={styles.footerText}>Order now</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    gap: 20,
    alignItems: "center",
  },
  section: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
  },
  total: {
    fontSize: 15,
    color: "#686764",
  },
  total1:{
    fontSize: 18,
    color: "#3d3d3d",
  },
  footer: {
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingTop: 20,
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
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  orderBtn: {
    backgroundColor: "#28a745",
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    width: 250,
    height: 50,
    justifyContent: "center",
    marginTop: 20,
  },
});

export default checkout;
