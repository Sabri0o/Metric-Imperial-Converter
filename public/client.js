$(document).ready(function () {
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
    evt.target.className += " active";
  };

  $("form").on("submit", function (event) {
    event.preventDefault();
    console.log($(this).serialize());
    $.get("/api/convert", $(this).serialize(), function (result) {
      console.log(result);
      $("#result").text(result.string || "invalid number");
      $("#result").css("background-color", 'rgb(103, 224, 228)');
    });
  });

  console.log("ready!");
});
