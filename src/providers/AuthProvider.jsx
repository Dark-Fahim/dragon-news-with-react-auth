import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";



// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the on auth state changed', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()

        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    }

    return (
        <div className="p-3">
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;