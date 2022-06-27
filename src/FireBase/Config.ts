
import firebase from 'firebase'
import "firebase/firestore"


// import firebase from "firebase/app";
// import "firebase/firestore";



// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

//import firebase from '../../node_modules/firebase/index'



if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, 
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, 
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}

export default firebase