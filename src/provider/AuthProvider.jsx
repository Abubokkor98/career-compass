import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);
  // register user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login existing user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
//   logout user
const logoutUser = ()=>{
  setLoading(true);
    return signOut(auth);
}
// google login
const googleProvider = new GoogleAuthProvider()
const googleSignIn = ()=>{
  return signInWithPopup(auth, googleProvider)
}

  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const AuthInfo = {
    createNewUser,
    loginUser,
    logoutUser,
    googleSignIn,
    user,
    setUser,
    loading,


  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
}
