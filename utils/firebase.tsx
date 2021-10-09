// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// @ts-ignore
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT4JaUWd9KFoVrQ4B225uEr4vjfC4t1Tk",
  authDomain: "cuckuku-fa48b.firebaseapp.com",
  projectId: "cuckuku-fa48b",
  storageBucket: "cuckuku-fa48b.appspot.com",
  messagingSenderId: "681495549579",
  appId: "1:681495549579:web:2caacb7032f0f1dca6a68e",
  measurementId: "G-0FRVH65DP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
export default storage;
