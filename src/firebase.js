import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBY5MUcHWhbRkivmfnQB4EjuHzr09vFDEw",
  authDomain: "tinder-clone-83cf5.firebaseapp.com",
  databaseURL: "https://tinder-clone-83cf5.firebaseio.com",
  projectId: "tinder-clone-83cf5",
  storageBucket: "tinder-clone-83cf5.appspot.com",
  messagingSenderId: "891902289555",
  appId: "1:891902289555:web:6fb92961ce675033658f66",
  measurementId: "G-T4E8DZ7HP8"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const database = firebaseapp.firestore();

export default database;