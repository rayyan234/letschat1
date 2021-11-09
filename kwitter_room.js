
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAzaPWDGowQZNbym8ZWU3SYGejNB69FGQA",
      authDomain: "kwitter-8a6c0.firebaseapp.com",
      databaseURL: "https://kwitter-8a6c0-default-rtdb.firebaseio.com",
      projectId: "kwitter-8a6c0",
      storageBucket: "kwitter-8a6c0.appspot.com",
      messagingSenderId: "823052984681",
      appId: "1:823052984681:web:5b50a39d3bbb4a22ff9df8"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
