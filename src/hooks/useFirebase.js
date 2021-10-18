import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firbaseInitialize from "../components/FIREBASE/firebase.init";

firbaseInitialize()

const useFirebase = () => {

    const[user, setUser] = useState({})
    const [isLoading , setIsLoading] = useState(true)
    const auth = getAuth()



    const signInGoogle = () => {

        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .finally( () => setIsLoading(false))

    }

    useEffect( ()=> {
        onAuthStateChanged(auth,user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
                setIsLoading(false)
            }
        })
    },[])

    const logOut = () => {
       
        signOut(auth)
        .then( () => {

        })
        .finally( () => setIsLoading(false))
        
    }





    return{
        user,
        signInGoogle,
        logOut,
        isLoading

    }

}


export default useFirebase;