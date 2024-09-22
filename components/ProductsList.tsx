import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ProductCard from "./ProductCard";
import useCartStore from "@/store/cartStore";
import { Product } from "@/types/Product";

export const ProductList = ({
  productsArray,
}: {
  productsArray?: Product[][];
}) => {
  const store = useCartStore();
  const renderItem = ({ item }: { item: Product }) => (
    <View style={{ width: "auto" }}>
      <ProductCard
        key={item.product_id}
        product={item}
        isCartPage={false}
        store={store}
      />
      {/* <TouchableOpacity
        style={{
          position: "absolute",
          top: "45%",
          right: "15%",
          transform: [{ translateY: -12 }],
        }}
      >
        <AntDesign name="rightcircleo" size={30} color="#565959" />
      </TouchableOpacity> */}
    </View>
  );

  return (
    <ScrollView>
      {productsArray?.map((products: Product[], index: number) => {
        return (
          <FlatList
            key={index}
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.product_id}
            horizontal={true} // Enable horizontal scrolling
            showsHorizontalScrollIndicator={false} // Hide scroll indicator
            contentContainerStyle={styles.contentContainer} // Optional styling for content container
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 1, // Optional padding for items within the list
  },
});
