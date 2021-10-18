import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const firbaseInitialize = () => {

   return initializeApp(firebaseConfig);

}


export default firbaseInitialize;