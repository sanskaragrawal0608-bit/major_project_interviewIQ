import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseApiKey = (import.meta.env.VITE_FIREBASE_APIKEY || "")
  .trim()
  .replace(/,+$/, "");

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "interviewiq-d2d2b.firebaseapp.com",
  projectId: "interviewiq-d2d2b",
  storageBucket: "interviewiq-d2d2b.firebasestorage.app",
  messagingSenderId: "581364622704",
  appId: "1:581364622704:web:1ea951ce3d7cfdae2b5bb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
// Har baar Google account chooser dikhaye (alag email se login ke liye)
provider.setCustomParameters({ prompt: "select_account" });

export { auth, provider };
