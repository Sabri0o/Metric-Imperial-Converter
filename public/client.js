$(document).ready(function () {
  $("#Length").show();
  $("#def").addClass("active");
  $(".ratesTable").hide();

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

  // toggle the rates table
  toggle = function (event) {
    if ($(`#${event.target.id}`).text() === "+") {
      $(`#${event.target.id}`).text("-");
    } else {
      $(`#${event.target.id}`).text("+");
    }
    $(`.ratesTable.${event.target.id}`).toggle((speed = "slow"));
  };

  // serialize the form
  $("form").on("submit", function (event) {
    event.preventDefault();
    console.log(event.target)
    console.log($(this).serialize());
    $.get("/api/convert", $(this).serialize(), function (result) {
      console.log(result);
      $(`.result.${event.target.id}`).text(result.string || "invalid number");
      $(`.result.${event.target.id}`).css("background-color", "rgb(103, 224, 228)");
    });
  });

  console.log("ready!");
});
