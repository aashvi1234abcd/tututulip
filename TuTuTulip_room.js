
//ADD YOUR FIREBASE LINKS HERE
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
username=localStorage.getItem("username");
document.getElementById("welcomeusername").innerHTML="Welcome "+username+"!!"; 

function addroom() {
      roomname=document.getElementById("addroom").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomname",roomname);
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='gotoroom(this.id)'>"+Room_names+"</div>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function gotoroom(name) {
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="inaroom.html";
}
