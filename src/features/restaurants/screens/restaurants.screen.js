import React from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { StatusBar, Platform, SafeAreaView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight + "px" : "0"};
`;

const CardList = styled.View`
  padding: 16px;
  background-color: blue;
  flex: 1;
`;

const ScreenSearchBar = styled.View`
  padding: 16px;
  background-color: lightblue;
`;

export const RestaurantsScreen = () => (
  <ScreenContainer>
    <ScreenSearchBar>
      <Searchbar placeholder="Search" />
    </ScreenSearchBar>
    <CardList>
      <RestaurantInfoCard />
    </CardList>
  </ScreenContainer>
);
