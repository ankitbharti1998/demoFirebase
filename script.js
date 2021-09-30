
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
 apiKey: "AIzaSyDKTf0mRQTxbuv8FL3i0j_S1e3KFjleuOE",
 authDomain: "fir-app-cbabf.firebaseapp.com",
 databaseURL: "https://fir-app-cbabf-default-rtdb.firebaseio.com",
 projectId: "fir-app-cbabf",
 storageBucket: "fir-app-cbabf.appspot.com",
 messagingSenderId: "924136041356",
 appId: "1:924136041356:web:e4720b1339c59f39b884a9"
};




const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


