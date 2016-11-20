import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD0hq9EYUQK0Ztxmqhgo5kSWJx065WtR60",
  authDomain: "personal-site-b6e7c.firebaseapp.com",
  databaseURL: "https://personal-site-b6e7c.firebaseio.com",
  storageBucket: "personal-site-b6e7c.appspot.com",
  messagingSenderId: "598643425813"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
