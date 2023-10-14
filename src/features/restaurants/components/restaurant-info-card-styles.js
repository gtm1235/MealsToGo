// StyledComponents.js

import { Card } from "react-native-paper";
import styled from "styled-components";

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Icon = styled.Image`
  height: 15px;
  width: 15px;
`;

export const Section = styled.View`
  flex-direction: row;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const RightJustify = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
