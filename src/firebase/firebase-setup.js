import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const config = { // config object contain information about my website
  apiKey: "AIzaSyCv9B-fmx2bDSP1mjp9JLBx8HuxqyOR-28",
  authDomain: "ecommerce-db-e966b.firebaseapp.com",
  databaseURL: "https://ecommerce-db-e966b.firebaseio.com",
  projectId: "ecommerce-db-e966b",
  storageBucket: "ecommerce-db-e966b.appspot.com",
  messagingSenderId: "979174596645",
  appId: "1:979174596645:web:d113429a56edc4d3f65fcc",
  measurementId: "G-2954NYBEH1"
};

firebase.initializeApp(config); // we made request to Authorization endpoint 
// with mine configuration object
firebase.firestore().settings({experimentalForceLongPolling: true})

export const auth = firebase.auth(); // Authorization requst
export const firestore = firebase.firestore();
export default firebase;