// Loads results onto the page
function getResults() {
  // Empty any results currently on the page
  $("#results").empty();
  // Grab all of the current notes
  $.getJSON("/all", function(data) {
    // For each note...
    console.log(data);
    // for (var i = 0; i < data.length; i++) {
    //   // ...populate #results with a p-tag that includes the note's title and object id
    //   $("#results").prepend(
    //     data
    //   );
    // }
  });
}

// Runs the getResults function as soon as the script is executed
// getResults();

$(".btn").on("click", function () {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/hi",
        // On a successful call, clear the #results section
        success: function(response) {
            $("#results").empty();
        }
    });
});