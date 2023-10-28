import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { getApps, initializeApp } from "firebase/app";

import firebaseConfig from "./firebase.config";

import React from "react";


import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastucture/theme/index";

import { Navigation } from "./src/infrastucture/navigation/index";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Your web app's Firebase configuration

// Check if any apps have been initialized
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>

                <Navigation />

        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
