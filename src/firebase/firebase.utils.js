import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5C0KPsbmdBFYSjc_mXMXYFUR9LNplFYY",
    authDomain: "crwn-db-11172.firebaseapp.com",
    databaseURL: "https://crwn-db-11172.firebaseio.com",
    projectId: "crwn-db-11172",
    storageBucket: "",
    messagingSenderId: "425691511143",
    appId: "1:425691511143:web:af843f24e112c2ef"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;