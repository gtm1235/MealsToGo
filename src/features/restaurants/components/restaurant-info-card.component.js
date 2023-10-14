import { Card } from "react-native-paper";
import { Image } from "react-native";
import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SvgXml } from "react-native-svg";
import isopen from "../../../../assets/isopen";
import star from "../../../../assets/star";
import styled from "styled-components";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Closed = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.error};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Section = styled.View`
  flex-direction: row;
`;

const Row = styled.View`
  flex-direction: row;
`;

const RightJustify = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

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
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
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
                <Closed>Closed Temporarily</Closed>
              ) : (
                isOpenNow && <SvgXml xml={isopen} width={20} height={20} />
              )}
            </RightJustify>

            <Spacer position="left" size="large" />
            <Spacer position="top" size="medium">
              <Spacer variant="left.large">
                <Image
                  style={{ width: 15, height: 15 }}
                  source={{ uri: icon }}
                />
              </Spacer>
            </Spacer>
          </Section>
        </Spacer>
        <Spacer position="top" size="medium">
          <Address>{address}</Address>
        </Spacer>
      </Info>
    </RestaurantCard>
  );
};
