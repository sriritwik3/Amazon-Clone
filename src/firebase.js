import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCe0zfPRA53OjHMmDRs98FyQtB8a3Gx9b4",
    authDomain: "clone--not-really.firebaseapp.com",
    projectId: "clone--not-really",
    storageBucket: "clone--not-really.appspot.com",
    messagingSenderId: "104722862796",
    appId: "1:104722862796:web:0d7ec8d427a773d1e06869",
    measurementId: "G-GWC6C3XJT1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };