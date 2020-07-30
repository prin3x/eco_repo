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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error craeteing user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
