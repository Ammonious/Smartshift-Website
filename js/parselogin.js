function login(){
     var username = document.getElementById('username').value;
     var password = document.getElementById('password');
     Parse.User.logIn(username, password, {
  success: function(user) {
    // Open new window OR replace div with new additional info form
      window.location.replace("http://www.w3schools.com");
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});
    
}