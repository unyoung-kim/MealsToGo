import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaruant-info.component";

export const RestaurantScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchContainer}>
      <Searchbar />
    </View>
    <View style={styles.listContainer}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
