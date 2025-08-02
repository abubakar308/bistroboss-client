import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email,password)
    };

    const signinUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleSignin = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const updateUserProfile = (name,photo) =>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    };

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{
            setLoading(false);
            setUser(currentuser);
        });
        return () => unsubscribe();
        
    },[setLoading, setUser]);
    
    const authInfo = {
        createUser,
        signinUser,
        googleSignin,
        updateUserProfile,
        user,
        setUser,
        loading,
        logOut
    }
    return (
        <>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </>
    );
};

export default Authprovider;