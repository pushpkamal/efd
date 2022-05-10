import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMLZzqU0QhEWGgWYXY_FIr8LiLjqgbjUc",
  authDomain: "elibrabarayryayry.firebaseapp.com",
  projectId: "elibrabarayryayry",
  storageBucket: "elibrabarayryayry.appspot.com",
  messagingSenderId: "831991138818",
  appId: "1:831991138818:web:e539aa90912444909d751b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
