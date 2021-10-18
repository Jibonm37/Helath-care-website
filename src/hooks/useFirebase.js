import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut ,createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firbaseInitialize from "../components/FIREBASE/firebase.init";

firbaseInitialize()

const useFirebase = () => {

    const[user, setUser] = useState({})
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
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



    const handleNewUser = e => {
        
        console.log(email,password)

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
        })
        e.preventDefault()
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
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
        isLoading,
        handleNewUser,
        handleEmail,
        handlePassword,

    }

}


export default useFirebase;