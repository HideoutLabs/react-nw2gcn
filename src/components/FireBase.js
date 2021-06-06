import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyBCd-41us5o7vx1rSFwFrArACZZnUMFPM4',
  authDomain: 'kids-2e44a.firebaseapp.com',
  projectId: 'kids-2e44a',
  storageBucket: 'kids-2e44a.appspot.com',
  messagingSenderId: '702937110723',
  appId: '1:702937110723:web:460cd02fee2d454e6c2a76',
  measurementId: 'G-022JBR4RGS'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
