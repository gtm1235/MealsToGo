import React from "react";
import MapView from "react-native-maps";
import { SafeArea } from "../../../components/utils/safe-area.component";

export const MapScreen = () => {
  return (
    <>
      <SafeArea>
        <MapView style={{ height: "100%" }} />
      </SafeArea>
    </>
  );
};

// export const RestaurantsScreen = ({ navigation }) => {
//     const { isLoading, error, restaurants } = useContext(RestaurantsContext);
//     console.log(navigation);

//     return (
