import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaruant-info-card.component";

export const RestaurantScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchContainer}>
      <Searchbar />
    </View>
    <View style={styles.listContainer}>
      <RestaurantInfoCard />
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
