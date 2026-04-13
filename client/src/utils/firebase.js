import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-53c85.firebaseapp.com",
  projectId: "interviewiq-53c85",
  storageBucket: "interviewiq-53c85.firebasestorage.app",
  messagingSenderId: "656311607202",
  appId: "1:656311607202:web:de4405ba998b5bf7301cfb",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
