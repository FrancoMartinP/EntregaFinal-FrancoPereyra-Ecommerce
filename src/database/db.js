
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB59dZ3vN14yCyBf5cU1mDo5fEiueRKfCY",
  authDomain: "e-commerce-react-85f5b.firebaseapp.com",
  projectId: "e-commerce-react-85f5b",
  storageBucket: "e-commerce-react-85f5b.appspot.com",
  messagingSenderId: "124256722182",
  appId: "1:124256722182:web:f0d15bae6457e1a43a5287"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db