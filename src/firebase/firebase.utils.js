import firebase from "firebase/compat/app";

// importing seperate utilities that we need of firebase
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyA4ZOfIg8pmT82CBP_0j29uFsk4R7RbYZg",
  authDomain: "dress-online-reactjs.firebaseapp.com",
  projectId: "dress-online-reactjs",
  storageBucket: "dress-online-reactjs.appspot.com",
  messagingSenderId: "968080692499",
  appId: "1:968080692499:web:19c945a1a4c19bf611f6e6",
  measurementId: "G-VFBM9VXW2M",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
