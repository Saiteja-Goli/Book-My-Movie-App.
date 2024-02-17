import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB_EXQ3jTfgjZhuW6ZvWwDTDeQoWPsyXeE",
    authDomain: "movie-booking-app-aaf34.firebaseapp.com",
    projectId: "movie-booking-app-aaf34",
    storageBucket: "movie-booking-app-aaf34.appspot.com",
    messagingSenderId: "1079388834730",
    appId: "1:1079388834730:web:36db2a36f3ac485937f9d3"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };