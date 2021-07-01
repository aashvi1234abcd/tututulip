var firebaseConfig = {
      apiKey: "AIzaSyDf2mOqu8FPnHAjzihGB3Jz0WOWCDROoZQ",
      authDomain: "tututulip-fb504.firebaseapp.com",
      databaseURL: "https://tututulip-fb504-default-rtdb.firebaseio.com",
      projectId: "tututulip-fb504",
      storageBucket: "tututulip-fb504.appspot.com",
      messagingSenderId: "1044352876309",
      appId: "1:1044352876309:web:82525159f1a84f9df4b31c",
      measurementId: "G-M07DPF7GV3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username1=localStorage.getItem("username")
room_name=localStorage.getItem("roomname")

function sendmessage() {
      message=document.getElementById("message").value
      firebase.database().ref(room_name).push({
            name:username1,
            message:message,
           like:0 
      });
      document.getElementById("message").value="";
}







    function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
