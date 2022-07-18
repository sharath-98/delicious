import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCwletKWUeVYooYUTHwcd_uRymOZeoTbk0",
  authDomain: "delicious-e372a.firebaseapp.com",
  databaseURL: "https://delicious-e372a-default-rtdb.firebaseio.com",
  projectId: "delicious-e372a",
  storageBucket: "delicious-e372a.appspot.com",
  messagingSenderId: "1063020496398",
  appId: "1:1063020496398:web:be4292f2263e48b6839e5f",
  measurementId: "G-V34H08N6D8"
};

const app = getApps.Length > 0 ? getApp(): initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {app, db, storage};



