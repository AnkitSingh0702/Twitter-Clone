import { getFirestore } from "@firebase/firestore";
import { initializeApp ,getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB5zGMMHKrW3VH_aquO8a2KfTYfJYGmkZM",
  authDomain: "twitter-clone-8d10e.firebaseapp.com",
  projectId: "twitter-clone-8d10e",
  storageBucket: "twitter-clone-8d10e.appspot.com",
  messagingSenderId: "123845363064",
  appId: "1:123845363064:web:61826524449d8ddb11f48d"
};
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
 
const DataBase = getFirestore();
// const storage = getStorage();
export {DataBase};