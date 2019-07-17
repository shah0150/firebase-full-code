  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBNn-zlmW_5SToTa5iAu-I58pV1ZclICWk",
    authDomain: "madd-summer.firebaseapp.com",
    databaseURL: "https://madd-summer.firebaseio.com",
    projectId: "madd-summer",
    storageBucket: "madd-summer.appspot.com",
    messagingSenderId: "699984375241",
    appId: "1:699984375241:web:a361136f4b2da58b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const dbRef = firebase.database().ref();

  const usersRef = dbRef.child('users');
  const userListUI = document.getElementById("userList");
  
  usersRef.on("child_added", snap => {
  
      let user = snap.val();
  
      let $li = document.createElement("li");
      $li.innerHTML = user.name;
      $li.setAttribute("child-key", snap.key);
      $li.addEventListener("click", userClicked)
      userListUI.append($li);
  
  });
  
  
  function userClicked(e) {
  
      var userID = e.target.getAttribute("child-key");
  
      const userRef = dbRef.child('users/' + userID);
      const userDetailUI = document.getElementById("userDetail");
  
      userDetailUI.innerHTML = ""
  
      userRef.on("child_added", snap => {
  
  
          var $p = document.createElement("p");
          $p.innerHTML = snap.key  + " - " +  snap.val()
          userDetailUI.append($p);
  
  
      });
  
  }