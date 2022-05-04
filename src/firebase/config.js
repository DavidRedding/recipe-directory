import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD0zOwtOuCn7rS9Wi0vxoZRiYN8LHAbxbc',
  authDomain: 'cooking-recipe-site-9315c.firebaseapp.com',
  projectId: 'cooking-recipe-site-9315c',
  storageBucket: 'cooking-recipe-site-9315c.appspot.com',
  messagingSenderId: '1093545976892',
  appId: '1:1093545976892:web:948a2edf25496594ea0f39',
};

// init firebase
// connects us to our firebase backend
firebase.initializeApp(firebaseConfig);

// init services
// returns an object we can use to interact with firestore
export const projectFirestore = firebase.firestore();
