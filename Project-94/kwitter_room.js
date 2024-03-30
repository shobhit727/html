
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD_LwrKO-oouJMSivg1Gt5ZifmFkvVSgbg",
      authDomain: "test-b8a39.firebaseapp.com",
      databaseURL: "https://test-b8a39-default-rtdb.firebaseio.com",
      projectId: "test-b8a39",
      storageBucket: "test-b8a39.appspot.com",
      messagingSenderId: "901566009368",
      appId: "1:901566009368:web:9e9bf7ec7f74b7c6d9336d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("Roomname", room_name);

      window.location = "kwitter_page.html";

      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
