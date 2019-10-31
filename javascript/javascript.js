
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBGQi4Eul6SrQteDJhsQSafyHTPx5qo1x0",
    authDomain: "train-scheduler-7ef6f.firebaseapp.com",
    databaseURL: "https://train-scheduler-7ef6f.firebaseio.com",
    projectId: "train-scheduler-7ef6f",
    storageBucket: "train-scheduler-7ef6f.appspot.com",
    messagingSenderId: "1056145283216",
    appId: "1:1056145283216:web:cb5ac67fbe018dfbd9e015",
    measurementId: "G-TM9PS4B90J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.database()
  
  db.ref().set({testing:"this should be in database"
});



