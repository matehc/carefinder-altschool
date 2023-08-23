
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABb86-mW_ouANBhHEb1bmpaXYlIF7xRPY",
  authDomain: "carefinder-app-7344a.firebaseapp.com",
  projectId: "carefinder-app-7344a",
  storageBucket: "carefinder-app-7344a.appspot.com",
  messagingSenderId: "160215905013",
  appId: "1:160215905013:web:93da7a06488d8e78740bbc",
  measurementId: "G-9YDJ1SW5XH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();











