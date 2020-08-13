import * as firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDk2LGzq97mONMiSQKvdagtAEylefl3M_g",
    authDomain: "amazstore-92e0e.firebaseapp.com",
    databaseURL: "https://amazstore-92e0e.firebaseio.com",
    projectId: "amazstore-92e0e",
    storageBucket: "amazstore-92e0e.appspot.com",
    messagingSenderId: "314144537111",
    appId: "1:314144537111:web:324eba24f63f25cd957a52",
    measurementId: "G-5XLDM8EB6H"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }