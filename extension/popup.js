$(document).ready(function() {
    console.log("Test");
    document.getElementById("newDetails").addEventListener("click", testClick);
  });
  
  function testClick() {
    $('.title').html("The New Title");
  }