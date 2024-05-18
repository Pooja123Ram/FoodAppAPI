// firebaseConfig.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBfZUsRmHst7og1eH1yUGQJJLCItr-ZASg",
  authDomain: "foodrecipe-810af.firebaseapp.com",
  projectId: "foodrecipe-810af",
  storageBucket: "foodrecipe-810af.appspot.com",
  messagingSenderId: "94704535952",
  appId: "1:94704535952:web:d54b87916c4539ff0acb15",
  measurementId: "G-10P7JF07K6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
