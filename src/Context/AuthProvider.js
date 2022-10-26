import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';




 export const AuthContext = createContext();
 const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

   const providerLogin = (provider) =>{
    return signInWithPopup(auth,provider);
   }
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('inside auth state change', currentUser);

        if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser);
        }
       
    });

    return () => {
        unsubscribe();
    }

}, [])

   const authInfo ={providerLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;