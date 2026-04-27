import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, push, remove, onValue, update }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey:            "AIzaSyAk1afg0GUjXVlUMVsJjcj5K_REHPpyOPQ",
  authDomain:        "yugrill-manager.firebaseapp.com",
  databaseURL:       "https://yugrill-manager-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "yugrill-manager",
  storageBucket:     "yugrill-manager.firebasestorage.app",
  messagingSenderId: "1094579836870",
  appId:             "1:1094579836870:web:7b4deda6276870abb244c7",
  measurementId:     "G-796G144RWY"
};

const app = initializeApp(firebaseConfig);
const db  = getDatabase(app);

export { db, ref, set, push, remove, onValue, update };
