var firebaseConfig = {
    apiKey: "AIzaSyBHMpg9-8ygcDMwxrCVjNfMEs0_QouHy4E",
    authDomain: "kwitter-7c118.firebaseapp.com",
    projectId: "kwitter-7c118",
    storageBucket: "kwitter-7c118.appspot.com",
    messagingSenderId: "843846176793",
    appId: "1:843846176793:web:2c69f0ef6f69907c779a88",
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0

 });
 document.getElementById("msg").value="";
  }
