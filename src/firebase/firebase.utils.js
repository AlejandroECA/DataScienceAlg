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


export const createUserProfileDocument = async (userAuth,additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    console.log(snapShot);
    if(!snapShot.exist) {
        const { displayName, email} = userAuth;
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error){
            console.log('error creatin user',error.message);
        }

    }

    return userRef

}

firebase.initializeApp(config)

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const firestore = firebase.firestore();

firestore.collection('users')


export default firebase