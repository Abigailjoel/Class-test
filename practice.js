var firebaseConfig = {
    apiKey: "AIzaSyB-BsnH1cfNY1qtoGODMcm26SF6N1IfZzk",
    authDomain: "class-test-176ab.firebaseapp.com",
    databaseURL: "https://class-test-176ab-default-rtdb.firebaseio.com",
    projectId: "class-test-176ab",
    storageBucket: "class-test-176ab.appspot.com",
    messagingSenderId: "771337506814",
    appId: "1:771337506814:web:59a0b3ce43db0589267aaf",
    measurementId: "G-M1DZYEXR1X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

// PASTE YOUR FIREBASE LINK HERE

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        name : "abigail joel",
        age:"9"
    });
}