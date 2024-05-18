import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const firebaseConfig = {
  apiKey: "AIzaSyBfZUsRmHst7og1eH1yUGQJJLCItr-ZASg",
  authDomain: "foodrecipe-810af.firebaseapp.com",
  projectId: "foodrecipe-810af",
  storageBucket: "foodrecipe-810af.appspot.com",
  messagingSenderId: "94704535952",
  appId: "1:94704535952:web:d54b87916c4539ff0acb15",
  measurementId: "G-10P7JF07K6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);