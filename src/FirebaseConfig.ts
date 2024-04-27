import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBwRfwyPdFq_cdRTmZrTMdxefi-oTvcVjQ',
  authDomain: 'biblica-7e352.firebaseapp.com',
  projectId: 'biblica-7e352',
  storageBucket: 'biblica-7e352.appspot.com',
  messagingSenderId: '448155439894',
  appId: '1:448155439894:web:35f91788c4dc35b0ae7637',
  measurementId: 'G-M11EFRZ57Q',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
