import { ActivityIndicator, MD2Colors } from "react-native-paper";
import React, { useContext } from "react";

import { FlatList, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Search } from "../components/search.component";
import styled from "styled-components";

const RestaurantActivityIndicator = styled(ActivityIndicator)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantList = styled(FlatList).attrs((props) => ({
  contentContainerStyle: {
    padding: 16,
    ...props.contentContainerStyle, // Spread the existing contentContainerStyle
  },
}))``;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading ? (
        <RestaurantActivityIndicator
          animating={true}
          size="large"
          color={MD2Colors.blue300}
        />
      ) : null}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("restaurantDetail", { restaurant: item })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
