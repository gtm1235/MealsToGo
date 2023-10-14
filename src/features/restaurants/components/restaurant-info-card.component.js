import {
  Address,
  Icon,
  Info,
  RestaurantCard,
  RestaurantCardCover,
  RightJustify,
  Row,
  Section,
} from "./restaurant-info-card-styles.js";

import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SvgXml } from "react-native-svg";
import { Text } from "../../../components/typography/text.component";
import isopen from "../../../../assets/isopen";
import star from "../../../../assets/star";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://t3.ftcdn.net/jpg/05/60/99/66/240_F_560996661_QW68Tqj480hkYulYivdMxKqXkiWh661v.jpg",
    ],
    address = "100 Some Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Spacer position="bottom" size="large">
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Spacer position="top" size="medium">
            <Section>
              <Spacer position="top" size="medium">
                <Row>
                  {ratingArray.map((_, index) => (
                    <SvgXml key={index} xml={star} width={20} height={20} />
                  ))}
                </Row>
              </Spacer>

              <RightJustify>
                {isClosedTemporarily ? (
                  <Text variant="error">CLOSED TEMPORARILY</Text>
                ) : (
                  isOpenNow && <SvgXml xml={isopen} width={20} height={20} />
                )}
              </RightJustify>

              <Spacer position="left" size="large" />
              <Spacer position="top" size="medium">
                <Spacer variant="left.large">
                  <Icon source={{ uri: icon }} />
                </Spacer>
              </Spacer>
            </Section>
          </Spacer>
          <Spacer position="top" size="medium">
            <Address>{address}</Address>
          </Spacer>
        </Info>
      </RestaurantCard>
    </Spacer>
  );
};
