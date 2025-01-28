import {initializeApp} from "firebase/app";
import {getAuth} from "firebase.auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC82stZgDW8bwbKmLtlGKoVnn6TuohPUuo",
    authDomain: "universalbookmark.firebaseapp.com",
    projectId: "universalbookmark",
    storageBucket: "universalbookmark.firebasestorage.app",
    messagingSenderId: "22201188008",
    appId: "1:22201188008:web:aec21f8d6a931e7fd28c9d",
    measurementId: "G-257QBB41XR"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
