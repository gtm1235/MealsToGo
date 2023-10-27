import React, { useContext } from "react";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Text, Button } from "react-native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="Logout" onPress={onLogout} />
    </SafeArea>
  );
};
