var ismenuopen = 0;
function settings() {
	var dis = document.getElementById("settings");

	if(ismenuopen == 0) {
		dis.style.display = "block";
		ismenuopen = 1;
	} else if (ismenuopen == 1) {
		dis.style.display = "none";
		ismenuopen = 0;
	}
}
function close_settings() {
	document.getElementById("settings").style.display = "none";
	ismenuopen = 0;
}

document.addEventListener("keydown", function(event) {
    const active = document.activeElement;
    const isTyping =
        active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        active.isContentEditable;

    if (!isTyping && (event.key === "o" || event.key === "O")) {
        settings();
    }
});

document.addEventListener("keydown", function(event) {
    const active = document.activeElement;
    const isTyping =
        active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        active.isContentEditable;

    if (!isTyping && (event.key === "Escape")) {
        close_settings();
    }
});

document.addEventListener("keydown", function(event) {
    const active = document.activeElement;
    const isTyping =
        active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        active.isContentEditable;

    if (!isTyping && (event.key === "?")) {
        console.log(get_cookies());
    }
});