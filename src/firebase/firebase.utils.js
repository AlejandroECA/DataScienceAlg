import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAunK2_r4QqEdHyF2zDbOtqnpW1me1CZTw",
    authDomain: "datasc-6fb40.firebaseapp.com",
    projectId: "datasc-6fb40",
    storageBucket: "datasc-6fb40.appspot.com",
    messagingSenderId: "195553255464",
    appId: "1:195553255464:web:fd92e0129acb6dbb90151d",
    measurementId: "G-67P64KQVTV"
};

firebase.initializeApp(config)

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const firestore = firebase.firestore();


export default firebase