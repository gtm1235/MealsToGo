import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://t3.ftcdn.net/jpg/05/60/99/66/240_F_560996661_QW68Tqj480hkYulYivdMxKqXkiWh661v.jpg",
    ],
    address = "100 SOme Street",
    isOpenNow = true,
    rating = 5,
    isCLosedTemporarily = false,
  } = restaurant;
  return <Text style={{ color: "white" }}>{name}</Text>;
};
