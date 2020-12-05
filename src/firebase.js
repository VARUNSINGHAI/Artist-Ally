// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBcNAqXWyuucQ27FMe6ptutWy3AfR3ipLU",
    authDomain: "artist-ally-eb047.firebaseapp.com",
    databaseURL: "https://artist-ally-eb047.firebaseio.com",
    projectId: "artist-ally-eb047",
    storageBucket: "artist-ally-eb047.appspot.com",
    messagingSenderId: "472530904119",
    appId: "1:472530904119:web:606d254b6e6c62c5c4cbb2",
    measurementId: "G-GDF0BG79CM"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();//Database used
  const auth=firebase.auth();//We are using firebase authentication
  const provider=new firebase.auth.GoogleAuthProvider(); //Here telling that we are using google autjenticaation services

  export {auth,provider}; //To use the auth and provider outside the file tooo
  export default db; //To use db outside the file too