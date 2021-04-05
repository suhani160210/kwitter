
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDA8l7g0mBl6CKjCVqXuNIkfixTE6u1z7Y",
      authDomain: "kwitter-c6183.firebaseapp.com",
      databaseURL: "https://kwitter-c6183-default-rtdb.firebaseio.com",
      projectId: "kwitter-c6183",
      storageBucket: "kwitter-c6183.appspot.com",
      messagingSenderId: "27500180031",
      appId: "1:27500180031:web:ae053d5f52cbe6cf8b7e8a",
      measurementId: "G-WJ2ZZ2806Z"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome " + user_name+"!";
    function add_room(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose:"addingRoom"});
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name'id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}