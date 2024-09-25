// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { ge} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn94xe1V5Eutgljmikql3ecWFxinL_T2I",
  authDomain: "signinsignup-7c537.firebaseapp.com",
  projectId: "signinsignup-7c537",
  storageBucket: "signinsignup-7c537.appspot.com",
  messagingSenderId: "995295050610",
  appId: "1:995295050610:web:65835cce071d64c7fffbeb",
  measurementId: "G-MK5FE9DKFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};