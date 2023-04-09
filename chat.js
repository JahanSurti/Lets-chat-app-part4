
const firebaseConfig = {
    apiKey: "AIzaSyD_tapPpjTCztq1c37SNH0YfyQAqbRkdoY",
    authDomain: "lets-chat-web-app-6a040.firebaseapp.com",
    projectId: "lets-chat-web-app-6a040",
    storageBucket: "lets-chat-web-app-6a040.appspot.com",
    messagingSenderId: "45566742320",
    appId: "1:45566742320:web:eb8cf54361e2ce89c302f5",
    measurementId: "G-L5NDX2CZ3Q"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
});});}
getData();


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";


}


