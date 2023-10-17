import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsB49a_FqUQQAljYxhjS5y57rHv5dxp18",
  authDomain: "vagtplan-e65ee.firebaseapp.com",
  projectId: "vagtplan-e65ee",
  storageBucket: "vagtplan-e65ee.appspot.com",
  messagingSenderId: "407523073882",
  appId: "1:407523073882:web:617f982ecd23e8192bdd63",
  measurementId: "G-TXS0CJ4V3Y",
};

const FirebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(FirebaseApp);
