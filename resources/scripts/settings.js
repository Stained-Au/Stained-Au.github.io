function menu_out() {
	var m3nu_hidden = document.getElementById("left_in");
	var m3nu_shown = document.getElementById("left_out");
	var mid_section = document.getElementById("mid");

	m3nu_hidden.style.display = "none";
	m3nu_shown.style.display = "block";
	mid_section.style.width = "72%";
}
function menu_in() {
	var m3nu_hidden = document.getElementById("left_in");
	var m3nu_shown = document.getElementById("left_out");
	var mid_section = document.getElementById("mid");

	m3nu_hidden.style.display = "block";
	m3nu_shown.style.display = "none";
	mid_section.style.width = "92%";
}
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