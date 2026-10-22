import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9TWaeSDocPrJ8l5altkrAVuOzdcPubxc",
  authDomain: "crud-3-ba344.firebaseapp.com",
  databaseURL: "https://crud-3-ba344-default-rtdb.firebaseio.com",
  projectId: "crud-3-ba344",
  storageBucket: "crud-3-ba344.firebasestorage.app",
  messagingSenderId: "631905312331",
  appId: "1:631905312331:web:be50202770c53ceae0b7ce",
  measurementId: "G-FF30W1459T"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);