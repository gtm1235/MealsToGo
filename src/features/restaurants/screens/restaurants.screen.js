import React from "react";
import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";

const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="Search" />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
    backgroundColor: "lightblue",
  },
  list: {
    padding: 16,
    backgroundColor: "blue",
    flex: 1,
  },
});
