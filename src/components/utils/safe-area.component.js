import { Platform, SafeAreaView, StatusBar } from "react-native";

import styled from "styled-components";

const isAndroid = Platform.OS === "android";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight + "px" : "0"};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
