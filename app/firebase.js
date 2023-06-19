// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0mzzailfbbhnLo-49UGCiCQB5lNPyGT8",
  authDomain: "expense-tracker-5cb24.firebaseapp.com",
  projectId: "expense-tracker-5cb24",
  storageBucket: "expense-tracker-5cb24.appspot.com",
  messagingSenderId: "184450330511",
  appId: "1:184450330511:web:6c04b556077540b32825fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)