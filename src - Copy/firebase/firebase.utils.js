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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)  return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

   if(!snapShot.exists) {
    const { displayName, email } =userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
   }

   return userRef;

  };

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd ) => {
  const collectionRef = firestore.collection(collectionKey);
  

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  });

return await batch.commit();

}

export const convertCollectionsSnapshopToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  } );

 return transformedCollection.reduce((accumulator, collection) => {
   accumulator[collection.title.toLowerCase()] = collection;
   return accumulator;
 } , {})
}




  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;