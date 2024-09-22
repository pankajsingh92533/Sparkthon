import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

export const Loading = ({ size }: { size?: number }) => {
  return (
    <View style={styles.loader}>
      <LottieView
        style={{ flex: 1 }}
        source={require("../assets/images/loading.json")}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    aspectRatio: 1,
    marginBottom: 20,
  },
});
