import { FlatList, Platform, SafeAreaView, StatusBar } from "react-native";

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

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    padding: 16,
    ...props.contentContainerStyle, // Spread the existing contentContainerStyle
  },
}))``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
