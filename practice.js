const firebaseConfig = {
    apiKey: "AIzaSyBHMpg9-8ygcDMwxrCVjNfMEs0_QouHy4E",
    authDomain: "kwitter-7c118.firebaseapp.com",
    databaseURL: "https://kwitter-7c118-default-rtdb.firebaseio.com",
    projectId: "kwitter-7c118",
    storageBucket: "kwitter-7c118.appspot.com",
    messagingSenderId: "843846176793",
    appId: "1:843846176793:web:2c69f0ef6f69907c779a88",
    measurementId: "G-602MXZP614"
  };

  firebase.initializeApp(firebaseConfig);
  function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update
    ({
         purpose : "adding user" 
        });
 }