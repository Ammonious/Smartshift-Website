$.getScript("bower_components/moment/moment.js", function(){

  

});

$('.image_cover').each(function(){
var imageWidth = $(this).find('img').width();
var imageheight = $(this).find('img'). height();
  if(imageWidth > imageheight){
    $(this).addClass('landscape');
  }else{
    $(this).addClass('potrait');
  }
})

window.onload = function() {
    
    Parse.initialize("fGmWA1NBWlnkBqw9mpwZJ3EcZONyy2qkXrZpDqUB", "lYGeoP1NGuJEqxAMyqvE0suhjZP8BIBARPhLaorH");
    
   queryScheduledEmployees();
    
};


function queryScheduledEmployees(){
var Employee = Parse.Object.extend("TimeEntries");
var query = new Parse.Query(Employee);
query.limit(5);
query.find({
  success: function(results) {
   
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      var picUrl = object.get("photofile");
      var employeeName = object.get("name");
      var employerName = object.get("employerName");
      var clockInDate = object.get("clockIn");
      var day = moment(clockInDate);
      var clockInString = day.format('MMMM Do, h:mm:ss a');
        
      // SETUP IDS for HTML VIEWS
      var avatarId = "avatar_" + [i];
      var employeeNameId = "name_" + [i];
      var employerNameId = "employer_" + [i];
      var clockInId = "clockIn_" + [i];
        
      document.getElementById(avatarId).setAttribute('src', picUrl);
      document.getElementById(employeeNameId).innerHTML = employeeName;
      document.getElementById(clockInId).innerHTML = clockInString;
      document.getElementById(employerNameId).innerHTML = employerName;
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
}); 
    
    
}