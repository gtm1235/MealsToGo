import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getApps } from "firebase/app";

export const loginRequest = (email, password) => {
  const app = getApps()[0];
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
};
