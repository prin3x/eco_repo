import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCbm7gRSzbbqG_cF9_XqKDCIRdBGkyKZvA",
  authDomain: "eco-db-ff194.firebaseapp.com",
  databaseURL: "https://eco-db-ff194.firebaseio.com",
  projectId: "eco-db-ff194",
  storageBucket: "eco-db-ff194.appspot.com",
  messagingSenderId: "334294281475",
  appId: "1:334294281475:web:df9bb2dd354546ba9c4d36",
  measurementId: "G-JXY83LP7ND",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
