import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRd5pQDXth4_6ySxYt9gN39XodPT7_PnE",
  authDomain: "beerhouse-d71d2.firebaseapp.com",
  projectId: "beerhouse-d71d2",
  storageBucket: "beerhouse-d71d2.appspot.com",
  messagingSenderId: "422764391934",
  appId: "1:422764391934:web:4c63fc5e2aa381606664af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)