// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-am-journal.firebaseapp.com",
  projectId: "blog-am-journal",
  storageBucket: "blog-am-journal.appspot.com",
  messagingSenderId: "1060312792684",
  appId: "1:1060312792684:web:e5d296caa76c1858fd6249",
  measurementId: "G-Y24DBVZLQ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
