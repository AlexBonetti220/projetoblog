import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyBkDlNo5X2eSYVt0Hk_appracNdkS7ZwFY",
    authDomain: "blog-384d3.firebaseapp.com",
    databaseURL: "https://blog-384d3-default-rtdb.firebaseio.com",
    projectId: "blog-384d3",
    storageBucket: "blog-384d3.appspot.com",
    messagingSenderId: "872470985969",
    appId: "1:872470985969:web:696342c3050d7d9a3a7d50",
    measurementId: "G-HZ4YCTF7V7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase