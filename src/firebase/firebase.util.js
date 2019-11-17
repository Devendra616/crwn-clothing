//Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'; 
import 'firebase/firestore';//database related
import 'firebase/auth';//authentication related

const firebaseConfig = {
    apiKey: "AIzaSyBTcMz8UFAu8oh7FtjNEiF6C--WioOEFZQ",
    authDomain: "crwn-db-ac008.firebaseapp.com",
    databaseURL: "https://crwn-db-ac008.firebaseio.com",
    projectId: "crwn-db-ac008",
    storageBucket: "crwn-db-ac008.appspot.com",
    messagingSenderId: "461908066851",
    appId: "1:461908066851:web:98acf2023be5fb33bfa796",
    measurementId: "G-TRR6HK6W5D"
  };

  export const createUserProfileDocument =  async (userAuth, additionalData) => {
    if(!userAuth) return; //if not signed in

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);

    //if user don't exist create a new user
    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
      } catch (err) {
        console.log('error creating user',err.message);
      }
    }
    return userRef;
  }

//Initialize Firebase in your app
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;