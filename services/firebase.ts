import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-zy784ZF0jr5dkaI7gKGjue7IQHUlAJg",
  authDomain: "stories-for-children-59124.firebaseapp.com",
  projectId: "stories-for-children-59124",
  storageBucket: "stories-for-children-59124.appspot.com",
  messagingSenderId: "150688496449",
  appId: "1:150688496449:web:ae8b0d422137a4923a3fc0",
  measurementId: "G-7221H6TZX9",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);