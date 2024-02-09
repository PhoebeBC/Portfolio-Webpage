function showCopyButton() {
  var copyInfo = document.getElementById("copy-info");
  copyInfo.style.display = "block";

}

function hideCopyButton() {
  var copyInfo = document.getElementById("copy-info");
  copyInfo.style.display = "none";
  copyInfo.innerText = "Click to copy Email";

}

function copyFunction() {
  // Get the text field
  var copyText = document.getElementById("email-copy");

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.textContent);

  var copyInfo = document.getElementById("copy-info");
  copyInfo.innerText = "Copied";
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