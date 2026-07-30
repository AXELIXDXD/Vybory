import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCZ8lGpjglZRVECdxPSJSJkG6X_C2gou4",
  authDomain: "vybory-f1bbd.firebaseapp.com",
  databaseURL: "https://vybory-f1bbd-default-rtdb.firebaseio.com",
  projectId: "vybory-f1bbd",
  storageBucket: "vybory-f1bbd.firebasestorage.app",
  messagingSenderId: "545700356912",
  appId: "1:545700356912:web:403c03b1817b8318cadef5"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);