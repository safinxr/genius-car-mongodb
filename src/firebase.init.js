import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDoeC_NUL95D_HIdb0SfWF4Pk8LVQhHoL0",
  authDomain: "genius-car-service-a57ce.firebaseapp.com",
  projectId: "genius-car-service-a57ce",
  storageBucket: "genius-car-service-a57ce.appspot.com",
  messagingSenderId: "714819663909",
  appId: "1:714819663909:web:1e337bad976445054227cc"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
