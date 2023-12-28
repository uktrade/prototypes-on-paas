//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})
$(document).ready(function() {
  var autocompleteData = [
    "Brown",
    "Blue",
    "Black"
  ];

  $("#search").on("input", function() {
    var searchTerm = $(this).val().toLowerCase();
    var matches = [];

    if (searchTerm.length > 0) {
      matches = autocompleteData.filter(function(item) {
        return item.toLowerCase().indexOf(searchTerm) > -1;
      });
    }

    displayAutocomplete(matches);
  });

  function displayAutocomplete(matches) {
    var $autocompleteList = $("#autocomplete-list");
    $autocompleteList.empty();

    matches.forEach(function(match) {
      var $item = $("<li>").text(match);
      $item.on("click", function() {
        $("#search").val(match);
        $autocompleteList.empty();
      });
      $autocompleteList.append($item);
    });

    if (matches.length > 0) {
      $autocompleteList.show();
    } else {
      $autocompleteList.hide();
    }
  }

  $(document).on("click", function(e) {
    if (!$(e.target).closest(".search-input").length) {
      $("#autocomplete-list").hide();
    }
  });
});
