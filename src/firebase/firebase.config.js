import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.evn.VITE_APIKEY,
  authDomain: import.meta.evn.VITE_AUTHDOMAIN,
  projectId: import.meta.evn.VITE_PROJECTID,
  storageBucket: import.meta.evn.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.evn.VITE_MESSAGINGSENDERID,
  appId: import.meta.evn.VITE_APPID
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;