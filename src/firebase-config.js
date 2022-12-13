import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMRSXOr4CwrhFUran4Q3n3nwmgwKVhNHs",
  authDomain: "authenticate-f498d.firebaseapp.com",
  projectId: "authenticate-f498d",
  storageBucket: "authenticate-f498d.appspot.com",
  messagingSenderId: "715062342754",
  appId: "1:715062342754:web:0685d2a52f42fe43c68d3b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
