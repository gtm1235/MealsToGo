import { Platform, SafeAreaView, StatusBar } from "react-native";

import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight + "px" : "0"};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

const RestaurantListContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
