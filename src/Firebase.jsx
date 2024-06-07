// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZQWGS9c5hpZFqHEJ6z33s1c-OmX1xkRc",
  authDomain: "loginsignupauth-fbbb6.firebaseapp.com",
  projectId: "loginsignupauth-fbbb6",
  storageBucket: "loginsignupauth-fbbb6.appspot.com",
  messagingSenderId: "648158828271",
  appId: "1:648158828271:web:0d46414dcf12825f35ed1a"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)

 export{auth}