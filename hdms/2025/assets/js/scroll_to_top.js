// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top_button").style.display = "block";
  } else {
    document.getElementById("top_button").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function hover(element) {
  element.setAttribute('src', 'images/up-arrow-hover.png');
}

function unhover(element) {
  element.setAttribute('src', 'images/up-arrow.png');
}