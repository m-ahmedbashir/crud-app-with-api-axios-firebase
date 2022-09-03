import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDAaQsA6D6SkrXiJRNopralBW_sm2-O8ww",
  authDomain: "axios-auth-contact.firebaseapp.com",
  projectId: "axios-auth-contact",
  storageBucket: "axios-auth-contact.appspot.com",
  messagingSenderId: "149218385638",
  appId: "1:149218385638:web:4513620a30bdc338a3e527",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
