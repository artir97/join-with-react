import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBBa4MPKdUP9aI4-du9u9b88C31kW6g3Xs",
    authDomain: "join-react-9df5c.firebaseapp.com",
    projectId: "join-react-9df5c",
    storageBucket: "join-react-9df5c.firebasestorage.app",
    messagingSenderId: "467654770162",
    appId: "1:467654770162:web:da877f22bfdc940e787f6b"
};

// init firebase
const app = initializeApp(firebaseConfig);

// init services
const projectFirestore = getFirestore(app);
const auth = getAuth(app);

export { projectFirestore };