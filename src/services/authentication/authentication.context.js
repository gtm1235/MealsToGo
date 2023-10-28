import React, { useState, createContext } from "react";
//import * as firebase from "firebase";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { getApps } from "firebase/app";

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);

  const app = getApps()[0];
  const auth = getAuth(app);
  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
      setError(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError("error on login", e);
        setError(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    // const app = getApps()[0];
    // const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setError(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError("error on creation", e);
      });
  };

  const onLogout = () => {
    // setUser(null);
    signOut(auth)
      .then((u) => {
        setUser(null);
        setError(false);
      })
      .catch((e) => {
        setError(e);
        console.log("error on logout", e);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
