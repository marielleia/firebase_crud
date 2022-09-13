import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCu5-sNyXiVz9eoOkv9Wnjfwl377L9CFc",
  authDomain: "fir-tutorial-874db.firebaseapp.com",
  projectId: "fir-tutorial-874db",
  storageBucket: "fir-tutorial-874db.appspot.com",
  messagingSenderId: "725820111905",
  appId: "1:725820111905:web:5b7090d905c5e68cb87760"
};

export const app = initializeApp(firebaseConfig);

export const db =getFirestore()