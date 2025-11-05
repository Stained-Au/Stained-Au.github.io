var iso = false;

function toggle_menu() {
    var menu = document.getElementById("left");

    if (iso == false) {
        menu.style.display = "block";
        iso = true;
    } else if (iso == true) {
        menu.style.display = "none";
        iso = false;
    }
}