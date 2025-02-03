// Javascript file that handles program.html functions

function toggleAbstract(abstract) {
// Function that toggles upon click the abstract on the program section
    var element = document.getElementById(abstract);
    if (element.style.display !== "block" ) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}