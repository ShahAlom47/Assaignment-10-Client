// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIAMO7xx3mbmq1IA4eJIA1YqOwywGzpHk",
  authDomain: "assaignment-10-with-server.firebaseapp.com",
  projectId: "assaignment-10-with-server",
  storageBucket: "assaignment-10-with-server.appspot.com",
  messagingSenderId: "453376241619",
  appId: "1:453376241619:web:56c329e6000560fe51c926"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default  auth;