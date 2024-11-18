import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  // register user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const AuthInfo = {
    createNewUser,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
}
