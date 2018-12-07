import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDh4GD02CAlVzHftuf2dY6tg7o-EZh4bcI',
  authDomain: 'geo-ninja-95d3b.firebaseapp.com',
  databaseURL: 'https://geo-ninja-95d3b.firebaseio.com',
  projectId: 'geo-ninja-95d3b',
  storageBucket: 'geo-ninja-95d3b.appspot.com',
  messagingSenderId: '391987325459',
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
