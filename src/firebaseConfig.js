import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCpiyzTotCDZqDA-H2kXQ7zgCcrchgqpCU",
  authDomain: "blogfirebase-56bd9.firebaseapp.com",
  projectId: "blogfirebase-56bd9",
  storageBucket: "blogfirebase-56bd9.appspot.com",
  messagingSenderId: "691295173977",
  appId: "1:691295173977:web:d1d3e28f72fb895587e048"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);