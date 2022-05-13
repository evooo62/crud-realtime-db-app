import firebase from "firebase/compat/app";
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyCrYN90OMlcVKKvWk1Muvf49eFUJ0PgJX0",
  authDomain: "react-project-cea71.firebaseapp.com",
  projectId: "react-project-cea71",
  storageBucket: "react-project-cea71.appspot.com",
  messagingSenderId: "1061425591845",
  appId: "1:1061425591845:web:cf5e5ca176c23cb6ee31cc"
};


const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();