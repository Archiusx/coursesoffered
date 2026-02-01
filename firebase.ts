
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_4_adS0YQs8bGMbEvNSpLpW3BpCdvIAU",
  authDomain: "mark1-7ce7e.firebaseapp.com",
  databaseURL: "https://mark1-7ce7e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mark1-7ce7e",
  storageBucket: "mark1-7ce7e.firebasestorage.app",
  messagingSenderId: "147908886392",
  appId: "1:147908886392:web:fef85a974d50189472128d",
  measurementId: "G-D8TH2FNZJR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

export const logout = () => signOut(auth);
