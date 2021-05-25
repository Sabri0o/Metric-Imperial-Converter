

 $( document ).ready(function() {
   $("#Length").show();
   $("#def").addClass("active");
   
   openTab = function (evt, cityName) {
     $("#def").removeClass("active");
   
     // Get all elements with class="tabcontent" and hide them
     $(".tabcontent").hide();
   
     // Get all elements with class="tablinks" and remove the class "active"
     $(".tablinks").removeClass("active");
   
     // Show the current tab, and add an "active" class to the button that opened the tab
     $(`#${cityName}`).show();
     evt.currentTarget.className += " active"
    }
  console.log( "ready!" );
});