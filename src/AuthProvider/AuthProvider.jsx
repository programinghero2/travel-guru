import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null)
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
import { FacebookAuthProvider } from "firebase/auth";
const facebookProvider = new FacebookAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
       return signInWithPopup(auth,googleProvider)
    }
    const facebookLogin = () => {
       return signInWithPopup(auth,facebookProvider)
    }
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const logOut = () => {
       return signOut(auth)
    }
    const emailUpdate = email => {
       return updateEmail(auth.currentUser,email)
    }
    useEffect(() => {
         onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])
    const userInfo = {
        user,
        createUser,
        loginUser,
        forgetPassword,
        logOut,
        googleLogin,
        emailUpdate,
        facebookLogin,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;