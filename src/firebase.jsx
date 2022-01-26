import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDsMZeiPiCeR7avIFzja67i4AFDmBWVmrA",
    authDomain: "clone-de-linkedin.firebaseapp.com",
    projectId: "clone-de-linkedin",
    storageBucket: "clone-de-linkedin.appspot.com",
    messagingSenderId: "1096165341531",
    appId: "1:1096165341531:web:86184ef939147cf97e427e",
    measurementId: "G-ZT2ZJ72YTX"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);


  export {db} ;