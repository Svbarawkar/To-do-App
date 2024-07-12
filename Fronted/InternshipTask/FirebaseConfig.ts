
import { initializeApp } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdcnGLJhe_k5s9R9hAdhnPx-2SC2O-JAQ",
    authDomain: "to-do-application-12b69.firebaseapp.com",
    projectId: "to-do-application-12b69",
    storageBucket: "to-do-application-12b69.appspot.com",
    messagingSenderId: "385035519392",
    appId: "1:385035519392:web:271a04ecf262c0720090c5",
    measurementId: "G-344XQHPYFN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app};
