function showCopyButton() {
  var copyInfo = document.getElementById("copy-info");
  copyInfo.style.display = "block";
  copyInfo.style.zIndex = "10";
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

function bobDown(icon) {
  var bobImg = document.getElementById(icon);
  bobImg.style.paddingTop = "5%";
}

function bobUp(icon) {
  var bobImg = document.getElementById(icon);
  bobImg.style.paddingTop = "0";
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function menuFunction() {
  var navList = document.getElementById("nav-list");
  var navContact = document.getElementById("nav-contact");

  if (getComputedStyle(document.getElementById("menu-icon")).display == "none") {
    return;
  }
  /*+ document.getElementById("nav-contact");*/
  if (navList.style.display == "block" && navContact.style.display == "block") {
    navList.style.display = "none";
    navContact.style.display = "none";
  } else {
    navList.style.display = "block";
    navContact.style.display = "block";
  }
}