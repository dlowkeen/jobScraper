// Display jobs when Button is pressed
$(".btn").on("click", function () {

    // // empty results div
    // $("#table-row").empty();

    // // grab all of the jobs in jobs collection
    // $.ajax({
    //     type: "GET",
    //     dataType: "json",
    //     url: "/all",
    //     // On a successful call, Append created table row to table
    //     success: function(response) {
    //         for (var i = 0; i < response.length; i++) {
    //         // Create table rows of the data values
    //             var tableRow = $("<tr>");
    //             tableRow.append($("<td>").html(response[i].company));
    //             tableRow.append($("<td>").html(response[i].title));
    //             tableRow.append($("<td>").html(response[i].link));

    //             $("#table-row").append(tableRow);
    //         }
    //     }
    // });

    // Empty any results currently on the page
    $("#results").empty();
    // Grab all of the current notes
    $.getJSON("/all", function(data) {
        // For each note...
        for (var i = 0; i < data.results.length; i++) {
        // ...populate #results with a p-tag that includes the note's title and object id
        $("#results").prepend("<p class='dataentry' data-id=" + data.results[i].company + "><span class='dataTitle' data-id=" +
            data.results[i].title + ">" + data.results[i].link + "</span><span class=deleter>X</span></p>");
        }
    });



});