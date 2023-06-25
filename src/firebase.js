
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNQlzzAHvrDtMw7M_HgFZ-Ljbl11cTw6o",
  authDomain: "netflix-clone-f3495.firebaseapp.com",
  projectId: "netflix-clone-f3495",
  storageBucket: "netflix-clone-f3495.appspot.com",
  messagingSenderId: "457954282449",
  appId: "1:457954282449:web:fdee4132278911362b2ef0"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);