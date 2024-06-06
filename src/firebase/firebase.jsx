import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkmFrYN_g0AryTQTUkDuazegI05upMePk",
  authDomain: "atleticapanterao.firebaseapp.com",
  projectId: "atleticapanterao",
  storageBucket: "atleticapanterao.appspot.com",
  messagingSenderId: "627407607316",
  appId: "1:627407607316:web:5af5c6c17b60fb97fb7901",
  measurementId: "G-4JK68PBRL1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };