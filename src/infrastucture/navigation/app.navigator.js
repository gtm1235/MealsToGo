import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MapScreen } from "../../features/restaurants/screens/map.screen";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { SettingsScreen } from "../../features/restaurants/screens/settings.screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const tabBarIcon =
  (iconName) =>
  ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />;

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
