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
function dark_mode() {
	var l3mn = document.getElementById("left_in"); // lewy pasek cienszy
	var l3mno = document.getElementById("left_out"); // lewy pasek szerszy
	var l3bt = document.getElementById("m3nu_out"); // lewy przycisk wysun
	var l3bto = document.getElementById("m3nu_in"); // lewy przycisk wsun
	var m1d = document.getElementById("mid"); // srodek
	var r1ght = document.getElementById("right"); // prawy pasek
	var st1ngs = document.getElementById("settings_btn"); // prawy przycisk
	var img = document.getElementById("test_image_mid");

	img.src = "resources/images/satono.png";

	document.body.style.backgroundImage = "none";
	l3mn.style.backgroundImage = "none";
	l3mno.style.backgroundImage = "none";
	r1ght.style.backgroundImage = "none";

	document.body.style.backgroundColor = "#141414";
	document.body.style.color = "#c9c9c9";

	l3mn.style.backgroundColor = "#262626";
	l3mno.style.backgroundColor = "#262626";
	l3bt.style.backgroundColor = "#1f1f1f";
	l3bt.style.color = "#888888";
	l3bto.style.backgroundColor = "#1f1f1f";
	l3bto.style.color = "#888888";
	m1d.style.backgroundImage = "radial-gradient(circle at center, #242424ff, #202020ff, #1d1d1dff)";
	m1d.style.backgroundColor = "#1f1f1f";
	r1ght.style.backgroundColor = "#262626";
	st1ngs.style.backgroundColor = "#1f1f1f";
}
function light_mode() {
	var l3mn = document.getElementById("left_in"); // lewy pasek cienszy
	var l3mno = document.getElementById("left_out"); // lewy pasek szerszy
	var l3bt = document.getElementById("m3nu_out"); // lewy przycisk wysun
	var l3bto = document.getElementById("m3nu_in"); // lewy przycisk wsun
	var m1d = document.getElementById("mid"); // srodek
	var r1ght = document.getElementById("right"); // prawy pasek
	var st1ngs = document.getElementById("settings_btn"); // prawy przycisk
	var img = document.getElementById("test_image_mid");

	img.src = "resources/images/rice.png";

	document.body.style.backgroundImage = "none";
	l3mn.style.backgroundImage = "none";
	l3mno.style.backgroundImage = "none";
	r1ght.style.backgroundImage = "none";

	document.body.style.backgroundColor = "#ccccccff";
	document.body.style.color = "#000000ff";

	l3mn.style.backgroundColor = "#a8a8a8ff";
	l3mno.style.backgroundColor = "#a8a8a8ff";
	l3bt.style.backgroundColor = "#ceccccff";
	l3bt.style.color = "#535353ff";
	l3bto.style.backgroundColor = "#ceccccff";
	l3bto.style.color = "#535353ff";
	m1d.style.backgroundImage = "radial-gradient(circle at center, #ffffffff, #ceccccff, #bebebeff)";
	m1d.style.backgroundColor = "#ceccccff";
	r1ght.style.backgroundColor = "#a8a8a8ff";
	st1ngs.style.backgroundColor = "#ceccccff";
}
function purple_mode() {
	var l3mn = document.getElementById("left_in"); // lewy pasek cienszy
	var l3mno = document.getElementById("left_out"); // lewy pasek szerszy
	var l3bt = document.getElementById("m3nu_out"); // lewy przycisk wysun
	var l3bto = document.getElementById("m3nu_in"); // lewy przycisk wsun
	var m1d = document.getElementById("mid"); // srodek
	var r1ght = document.getElementById("right"); // prawy pasek
	var st1ngs = document.getElementById("settings_btn"); // prawy przycisk
	var img = document.getElementById("test_image_mid");

	img.src = "resources/images/sweep.png";

	l3mn.style.backgroundImage = "none";
	l3mno.style.backgroundImage = "none";
	r1ght.style.backgroundImage = "none";

	document.body.style.backgroundColor = "#2b004eff";
	document.body.style.color = "#c9c9c9";

	l3mn.style.backgroundColor = "#392a5cff";
	l3mno.style.backgroundColor = "#392a5cff";
	l3bt.style.backgroundColor = "#2f234dff";
	l3bt.style.color = "#6f57a5ff";
	l3bto.style.backgroundColor = "#2f234dff";
	l3bto.style.color = "#6f57a5ff";
	m1d.style.backgroundImage = "radial-gradient(circle at center, #4a3e69ff, #443569ff, #2f234dff)";
	m1d.style.backgroundColor = "#2f234dff";
	r1ght.style.backgroundColor = "#392a5cff";
	st1ngs.style.backgroundColor = "#2f234dff";
}
function matik_mode() {
	var l3mn = document.getElementById("left_in"); // lewy pasek cienszy
	var l3mno = document.getElementById("left_out"); // lewy pasek szerszy
	var l3bt = document.getElementById("m3nu_out"); // lewy przycisk wysun
	var l3bto = document.getElementById("m3nu_in"); // lewy przycisk wsun
	var m1d = document.getElementById("mid"); // srodek
	var r1ght = document.getElementById("right"); // prawy pasek
	var st1ngs = document.getElementById("settings_btn"); // prawy przycisk
	var img = document.getElementById("test_image_mid");

	img.src = "resources/images/matik.png";

	document.body.style.backgroundColor = "#55428F";
	document.body.style.color = "#c9c9c9";	

	l3mn.style.backgroundColor = "#55428F";
	l3mn.style.backgroundImage = "url(resources/images/matig.png)";
	l3mn.style.backgroundPosition = "center";
	l3mno.style.backgroundColor = "#55428F";
	l3mno.style.backgroundImage = "url(resources/images/matig.png)";
	l3mno.style.backgroundPosition = "center";
	l3bt.style.backgroundColor = "#7a6ad6b6";
	l3bt.style.color = "#3b256eff";
	l3bto.style.backgroundColor = "#7a6ad6b6";
	l3bto.style.color = "#3b256eff";
	m1d.style.backgroundImage = "radial-gradient(circle at center, #a5a1e0ff, #9387d6ff, #5e51acff)";
	r1ght.style.backgroundColor = "#55428F";
	r1ght.style.backgroundImage = "url(resources/images/matigr.png)";
	r1ght.style.backgroundPosition = "center";
	st1ngs.style.backgroundColor = "#7a6ad6b6";
}
function still_mode() {
	var l3mn = document.getElementById("left_in"); // lewy pasek cienszy
	var l3mno = document.getElementById("left_out"); // lewy pasek szerszy
	var l3bt = document.getElementById("m3nu_out"); // lewy przycisk wysun
	var l3bto = document.getElementById("m3nu_in"); // lewy przycisk wsun
	var m1d = document.getElementById("mid"); // srodek
	var r1ght = document.getElementById("right"); // prawy pasek
	var st1ngs = document.getElementById("settings_btn"); // prawy przycisk
	var img = document.getElementById("test_image_mid");

	img.src = "resources/images/still.png";

	document.body.style.backgroundColor = "#690000ff";
	document.body.style.color = "#c9c9c9";

	l3mn.style.backgroundColor = "#770800ff";
	l3mn.style.backgroundImage = "url(resources/images/stille.png)";
	l3mn.style.backgroundPosition = "center";
	l3mno.style.backgroundColor = "#770800ff";
	l3mno.style.backgroundImage = "url(resources/images/stille.png)";
	l3mno.style.backgroundPosition = "center";
	l3bt.style.backgroundColor = "#740800b0";
	l3bt.style.color = "#b8827dff";
	l3bto.style.backgroundColor = "#740800b0";
	l3bto.style.color = "#b8827dff";
	m1d.style.backgroundImage = "radial-gradient(circle at center, #9b2c2cff, #910e0eff, #8f2100ff, #740800ff)"
	r1ght.style.backgroundColor = "#770800ff";
	r1ght.style.backgroundImage = "url(resources/images/stillg.png)";
	r1ght.style.backgroundPosition = "center";
	st1ngs.style.backgroundColor = "#740800ff";
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

    if (!isTyping && (event.key === "1")) {
        dark_mode();
    }
});
document.addEventListener("keydown", function(event) {
    const active = document.activeElement;
    const isTyping =
        active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        active.isContentEditable;

    if (!isTyping && (event.key === "2")) {
        light_mode();
    }
});
document.addEventListener("keydown", function(event) {
    const active = document.activeElement;
    const isTyping =
        active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        active.isContentEditable;

    if (!isTyping && (event.key === "3")) {
        purple_mode();
    }
});
document.addEventListener("keydown", function(event) {
    const active = document.activeElement;
    const isTyping =
        active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        active.isContentEditable;

    if (!isTyping && (event.key === "4")) {
        matik_mode();
    }
});
document.addEventListener("keydown", function(event) {
    const active = document.activeElement;
    const isTyping =
        active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        active.isContentEditable;

    if (!isTyping && (event.key === "5")) {
        still_mode();
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