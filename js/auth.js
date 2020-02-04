
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  // var email=document.getElementById("email");
  // this.email=email;
  // var pass=document.getElementById("pass");
  // password=pass;
 var errorCode = error.code;
  var errorMessage = error.message; 
  // ...
});