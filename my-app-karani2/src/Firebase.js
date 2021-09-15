import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvhPr9e5KB96q40yPhrRQ9RFdKZuaRv34",
    authDomain: "karanie-commerce.firebaseapp.com",
    projectId: "karanie-commerce",
    storageBucket: "karanie-commerce.appspot.com",
    messagingSenderId: "500945275089",
    appId: "1:500945275089:web:eb4e433a789d7ee8b55df0",
    measurementId: "G-PW5WEVP1TJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig );
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  export { db, auth};  
 