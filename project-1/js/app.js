// navbar start
let menuBar = document.getElementById("menuBar");
    let isClicked = false; // track click state

menuBar.addEventListener("click", function () {
    isClicked = !isClicked; // toggle true/false

    if (isClicked) {
        menuBar.style.background = "orange";
        menuBar.style.height = "40px";
        menuBar.style.width = "40px";
        menuBar.style.transition = ".3s ease" 
        menuBar.style.borderRadius = "50%";
    } else {
        menuBar.style.background = "";
        menuBar.style.height = "";
        menuBar.style.width = "";
        menuBar.style.borderRadius = "";
    }
});
// navbar end