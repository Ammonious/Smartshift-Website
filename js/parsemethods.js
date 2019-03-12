function sendMessage(){
    
    var Message = Parse.Object.extend("Prospects");
    var messageObj = new Message();
    var company = document.getElementById("company").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if(!company || !name || !email || !message){
        // Display custom alert missing info
        alert("Missing info.")
    } else {
        messageObj.set("Company", company);
        messageObj.set("Name", name);
        messageObj.set("Email", email);
        messageObj.set("Message", message);

        messageObj.save(null, {
        success: function(message) {
        // Execute any logic messageObj should take place after the object is saved.
      
        },
        error: function(message, error) {
            
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            
        }
        }); 
    
}
    
}

function showDiv() {
   document.getElementById('mobilediv').style.display = "block";
    loadVideo();
}

function loadVideo()
{
var video = document.getElementById('mobilevid');
var mp4 = document.getElementById('mp4');
d = new Date();

mp4.src = "img/SmartshiftVideo.mp4";

video.load();
video.play();
}