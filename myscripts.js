function copyFunction() {
  // Get the text field
  var copyText = document.getElementById("email-copy");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the email: " + copyText.value);
}



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function menuFunction() {
  var x = document.getElementById("nav-list");
  var y = document.getElementById("nav-contact");
  var z = document.getElementById("nav");
  /*+ document.getElementById("nav-contact");*/
  if (x.style.display === "block" && y.style.display === "block") {
    x.style.display = "none";
    y.style.display = "none";
  } else {
    x.style.display = "block";
    y.style.display = "block";
    /*z.style.border-radius = "0px 0px var(--curve) var(--curve)";*/
  }
}