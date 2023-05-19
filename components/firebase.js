import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "portfolio-b1c43.firebaseapp.com",
    databaseURL: "https://portfolio-b1c43-default-rtdb.firebaseio.com",
    projectId: "portfolio-b1c43",
    storageBucket: "portfolio-b1c43.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGEID,
    appId: process.env.REACT_APP_APPID
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)