import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "portfolio-c7e1b.appspot.com",
  messagingSenderId: "1006415519337",
  appId: "1:1006415519337:web:e144f0b6173812ef470cf8",
  measurementId: "G-PL78PYT13R"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

const analytics = getAnalytics(app);

const database = getFirestore(app);

/*  Uncomment below line if you want to use the emulators
		Run the following command in the terminal to start the emulators: firebase emulators:start 
*/
// connectFunctionsEmulator(functions, "localhost", 5001);

export { auth, database };