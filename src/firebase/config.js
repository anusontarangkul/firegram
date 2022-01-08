import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-G3L0WbVC3UCsy4L_BC-LaO7pyb-nzZQ",
    authDomain: "firegram-e8ab5.firebaseapp.com",
    projectId: "firegram-e8ab5",
    storageBucket: "firegram-e8ab5.appspot.com",
    messagingSenderId: "805033505313",
    appId: "1:805033505313:web:277c43459d427beb52e960"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }