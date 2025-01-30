import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2bbzwe1AQRMxov5FHrvtAGAgQ364urDk",
  authDomain: "reactjs4-ec38a.firebaseapp.com",
  databaseURL: "https://reactjs4-ec38a-default-rtdb.firebaseio.com",
  projectId: "reactjs4-ec38a",
  storageBucket: "reactjs4-ec38a.firebasestorage.app",
  messagingSenderId: "49049935052",
  appId: "1:49049935052:web:5a59e869209737e60af669",
  measurementId: "G-338N1JNHGZ",
};

export const app = initializeApp(firebaseConfig);
