import React from "react";
import styled from "styled-components";
import { Text, StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "../../../../assets/icon.png",
    photos = [
      "https://t3.ftcdn.net/jpg/05/60/99/66/240_F_560996661_QW68Tqj480hkYulYivdMxKqXkiWh661v.jpg",
    ],
    address = "100 SOme Street",
    isOpenNow = true,
    rating = 5,
    isCLosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
