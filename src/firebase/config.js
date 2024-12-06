import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBBa4MPKdUP9aI4-du9u9b88C31kW6g3Xs",
    authDomain: "join-react-9df5c.firebaseapp.com",
    projectId: "join-react-9df5c",
    storageBucket: "join-react-9df5c.firebasestorage.app",
    messagingSenderId: "467654770162",
    appId: "1:467654770162:web:da877f22bfdc940e787f6b"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };