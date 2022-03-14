import { getFirestore } from "@firebase/firestore";
import { initializeApp ,getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
//  Add your own Firebase Configuration
};
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
 
const DataBase = getFirestore();
export {DataBase};