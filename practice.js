var firebaseConfig = {
    apiKey: "AIzaSyAXpe0T7l2WqvFC5QuBsMwK8ZOaeBl9GmM",
    authDomain: "pranil-37f6b.firebaseapp.com",
    databaseURL: "https://pranil-37f6b-default-rtdb.firebaseio.com",
    projectId: "pranil-37f6b",
    storageBucket: "pranil-37f6b.appspot.com",
    messagingSenderId: "855566058682",
    appId: "1:855566058682:web:63827359bee9379e432e83"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
    });
}