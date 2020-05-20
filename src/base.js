import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBNRJ-EBCXngeEF3GJONRMyRvvE7lJKX2s",
  authDomain: "krzysiek-app.firebaseapp.com",
  databaseURL: "https://krzysiek-app.firebaseio.com",
  projectId: "krzysiek-app",
  storageBucket: "krzysiek-app.appspot.com",
  messagingSenderId: "619259280937"
});

  const base = Rebase.createClass(firebaseApp.database());

  export { firebaseApp };
  export default base;


