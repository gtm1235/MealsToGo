import { FlatList } from "react-native";
import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[3]};
  margin-left: ${(props) => props.theme.space[2]};
  margin-right: ${(props) => props.theme.space[2]};
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
