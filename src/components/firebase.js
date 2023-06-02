import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAiSQ2B-yXc8SoWDNlmTAwCksrMpgBFmw",
  authDomain: "rozimurod-dropbox.firebaseapp.com",
  projectId: "rozimurod-dropbox",
  storageBucket: "rozimurod-dropbox.appspot.com",
  messagingSenderId: "1062054634643",
  appId: "1:1062054634643:web:a30c5f13fe7b43ec559966",
  measurementId: "G-SC006Q5PBD"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);