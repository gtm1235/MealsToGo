import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getApps, initializeApp } from "firebase/app";

// //console.log(getApps());
// const app = getApps()[0];
// const auth = getAuth(app);

export const loginRequest = (email, password) => {
  const app = getApps()[0];
  console.log(app);
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password);
};
