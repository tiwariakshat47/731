import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBEWQOGGsIrVFw3cPveeXR5TL-fBNudz6k",
    authDomain: "signal-clone-build-639d0.firebaseapp.com",
    projectId: "signal-clone-build-639d0",
    storageBucket: "signal-clone-build-639d0.appspot.com",
    messagingSenderId: "175104554138",
    appId: "1:175104554138:web:b53cbfa9b90abcb7411b23"
};

let app;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = app();
}

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
