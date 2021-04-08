import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvweFJQrOqFqWLGvOpTYXkoVrPBN4R9iA",
    authDomain: "inventory-app-2f273.firebaseapp.com",
    projectId: "inventory-app-2f273",
    storageBucket: "inventory-app-2f273.appspot.com",
    messagingSenderId: "734621325331",
    appId: "1:734621325331:web:9a99a30b3580a86baf87e6",
    measurementId: "G-ENH2KRPR9W"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();