import Firebase from 'firebase'
 let config = {
    apiKey: "AIzaSyC4YCQZQjhWSgJyPSlgYMwbizBNPTJUiw0",
    authDomain: "customer-38fae.firebaseapp.com",
    databaseURL: "https://customer-38fae.firebaseio.com",
    projectId: "customer-38fae",
    storageBucket: "customer-38fae.appspot.com",
    messagingSenderId: "712736876241"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()
export const customerRef = db.ref('customer')
export const editRef = db.ref('edits')