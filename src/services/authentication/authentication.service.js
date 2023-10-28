import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  initializeAuth,
} from "firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { getApps } from "firebase/app";

export const loginRequest = (email, password) => {
  const app = getApps()[0];
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
};

export const initFirebaseAuth = (app) => {
  const auth = getAuth(app);
  initializeAuth(auth, {
    persistenceKey: "myAuthKey",
    browserLocalPersistence: AsyncStorage,
  });

  return auth;
};
