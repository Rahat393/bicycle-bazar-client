import { createContext, React, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from "../Firebsae/Firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)

 

const Authprovider = ({children}) => {

  const [user, setUser] = useState(null)


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo)
  }

  const logOut = () => {
    return signOut(auth)
  }
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        // console.log('user observer');
        setUser(currentUser)
         
    });
    return () => unsubscribe()
}, [])


 const authInfo ={
  user,
  createUser,
  signIn,
  updateUser,
  logOut
 }
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;