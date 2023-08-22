// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyDMENOiJPd_288uGydhd7uKGiw2qPqsDyA',
    authDomain: 'body-shop-a44ed.firebaseapp.com',
    databaseURL: 'https://crud-a2bfe.firebaseio.com',
    projectId: 'body-shop-a44ed',
    storageBucket: 'body-shop-a44ed.appspot.com',
    messagingSenderId:'519798548693',
    appId: '1:519798548693:web:76169a57fe815bd9955a5c',
    measurementId: 'G-MN2MYF6CER',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;