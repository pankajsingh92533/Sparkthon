import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const HomeSearchBar = ({
  handleChange,
  desiredProduct,
  handleSubmit,
}: {
  handleChange: (text: string) => void;
  desiredProduct: string;
  handleSubmit: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <MaterialCommunityIcons
          name="microphone-outline"
          size={28}
          color="#007abd"
          style={styles.micIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search coffee ..."
          value={desiredProduct}
          onChangeText={handleChange}
        />
        <Feather
          name="search"
          onPress={handleSubmit}
          size={28}
          color="#007abd"
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: 350,
    marginHorizontal: "auto",
    marginTop: 16,
    position: "relative",
    zIndex: 50,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 4,
  },
  micIcon: {
    borderLeftWidth: 1,
    borderColor: "#ccc",
    paddingLeft: 4,
  },
});

export default HomeSearchBar;
