$( document ).ready(function() {
  $('.legislator-header').on('click', function(event) {
    alert("clicked on header")
    event.preventDefault();
    console.log("header clicked!!!!")
    
  })
});