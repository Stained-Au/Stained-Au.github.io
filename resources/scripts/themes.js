function dark_mode() {
	set_perm_cookie("theme", "dark");
	var theme = document.getElementById("theme");
	theme.href = "resources/styles/themes/theme_dark.css"
	document.getElementById("test_image_mid").src = "resources/images/satono.png";
}

function light_mode() {
	set_perm_cookie("theme", "light");
	var theme = document.getElementById("theme");
	theme.href = "resources/styles/themes/theme_light.css"
	document.getElementById("test_image_mid").src = "resources/images/rice.png";
}

function purple_mode() {
	set_perm_cookie("theme", "purple");
	var theme = document.getElementById("theme");
	theme.href = "resources/styles/themes/theme_purple.css"
	document.getElementById("test_image_mid").src = "resources/images/sweep.png";
}

function matik_mode() {
	set_perm_cookie("theme", "matik");
	var theme = document.getElementById("theme");
	theme.href = "resources/styles/themes/theme_matik.css"
	document.getElementById("test_image_mid").src = "resources/images/matik.png";
}

function still_mode() {
	set_perm_cookie("theme", "still");
	var theme = document.getElementById("theme");
	theme.href = "resources/styles/themes/theme_still.css"
	document.getElementById("test_image_mid").src = "resources/images/still.png";
}









/*
function getIds(wanted) {
	var left_strip_hidden = document.getElementById("left_in");
	var left_strip_extended = document.getElementById("left_out");
	var left_button_hidden = document.getElementById("m3nu_out");
	var left_button_extended = document.getElementById("m3nu_in");
	var middle_section = document.getElementById("mid");
	var right_strip = document.getElementById("right");
	var settings_button = document.getElementById("settings_btn");
	var test_image = document.getElementById("test_image_mid");
	var horses_list = document.getElementById("horses_list");

	if(wanted == "left_strip_hidden") {
		return left_strip_hidden;
	} else if (wanted == "left_strip_extended") {
		return left_strip_extended;
	} else if (wanted == "left_button_hidden") {
		return left_button_hidden;
	} else if (wanted == "left_button_extended") {
		return left_button_extended;
	} else if (wanted == "middle_section") {
		return middle_section;
	} else if (wanted == "right_strip") {
		return right_strip;
	} else if (wanted == "settings_button") {
		return settings_button;
	} else if (wanted == "test_image") {
		return test_image;
	} else if (wanted == "horses_list") {
		return horses_list;
	}
}


function dark_mode() {
	set_perm_cookie("theme", "dark");

	getIds("test_image").src = "resources/images/satono.png";
	document.body.style.cssText = `
		backgroundImage: none;
		background-color: #141414;
		color: #c9c9c9;
	`
	getIds("left_strip_hidden").style.cssText = `
		background-image: none;
		background-color: #262626;
	`;
	getIds("left_strip_extended").style.cssText = `
		background-image: none;
		background-color: #262626;
	`;
	getIds("right_strip").style.cssText = `
		background-image: none;
		background-color: #262626;
	`;
	getIds("left_button_hidden").style.cssText = `
		background-color: #1f1f1f;
		color: #888888;
	`;
	getIds("left_button_extended").style.cssText = `
	background-color: #1f1f1f;
	color: #888888;
	`;
	getIds("middle_section").style.cssText = `
		background-image: radial-gradient(circle at center, #242424ff, #202020ff, #1d1d1dff);
		background-color: #1f1f1f;
	`;
	getIds("settings_button").style.backgroundColor = "#1f1f1f";
	getIds("horses_list").style.cssText = `
		background-color: #1f1f1f;
		color: #888888;
	`;
}


function light_mode() {
	set_perm_cookie("theme", "light");

	getIds("test_image").src = "resources/images/rice.png";
	document.body.style.cssText = `
		backgroundImage: none;
		background-color: #ccccccff;
		color: #000000ff;
	`
	getIds("left_strip_hidden").style.cssText = `
		background-image: none;
		background-color: #a8a8a8ff;
	`;
	getIds("left_strip_extended").style.cssText = `
		background-image: none;
		background-color: #a8a8a8ff;
	`;
	getIds("right_strip").style.cssText = `
		background-image: none;
		background-color: #a8a8a8ff;
	`;
	getIds("left_button_hidden").style.cssText = `
		background-color: #ceccccff;
		color: #535353ff;
	`;
	getIds("left_button_extended").style.cssText = `
		background-color: #ceccccff;
		color: #535353ff;
	`;
	getIds("middle_section").style.cssText = `
		background-image: radial-gradient(circle at center, #ffffffff, #ceccccff, #bebebeff);
		background-color: #ceccccff;
	`;
	getIds("settings_button").style.backgroundColor = "#ceccccff";
	getIds("horses_list").style.cssText = `
		background-color: #ceccccff;
		color: #535353ff;
	`;
}


function purple_mode() {
	set_perm_cookie("theme", "purple");

	getIds("test_image").src = "resources/images/sweep.png";
	document.body.style.cssText = `
		backgroundImage: none;
		background-color: #2b004eff;
		color: #c9c9c9;
	`
	getIds("left_strip_hidden").style.cssText = `
		background-image: none;
		background-color: #392a5cff;
	`;
	getIds("left_strip_extended").style.cssText = `
		background-image: none;
		background-color: #392a5cff;
	`;
	getIds("right_strip").style.cssText = `
		background-image: none;
		background-color: #392a5cff;
	`;
	getIds("left_button_hidden").style.cssText = `
		background-color: #2f234dff;
		color: #6f57a5ff;
	`;
	getIds("left_button_extended").style.cssText = `
		background-color: #2f234dff;
		color: #6f57a5ff;
	`;
	getIds("middle_section").style.cssText = `
		background-image: radial-gradient(circle at center, #4a3e69ff, #443569ff, #2f234dff);
		background-color: #2f234dff;
	`;
	getIds("settings_button").style.backgroundColor = "#2f234dff";
	getIds("horses_list").style.cssText = `
		background-color: #2f234dff;
		color: #6f57a5ff;
	`;
}


function matik_mode() {
	set_perm_cookie("theme", "matik");

	getIds("test_image").src = "resources/images/matik.png";
	document.body.style.cssText = `
		backgroundImage: none;
		background-color: #55428F;
		color: #c9c9c9;
	`
	getIds("left_strip_hidden").style.cssText = `
		background-image: none;
		background-color: #55428F;
		background-image: url(resources/images/matig.png);
		background-position: center;
	`;
	getIds("left_strip_extended").style.cssText = `
		background-image: none;
		background-color: #55428F;
		background-image: url(resources/images/matig.png);
		background-position: center;
	`;
	getIds("right_strip").style.cssText = `
		background-image: none;
		background-color: #55428F;
	`;
	getIds("left_button_hidden").style.cssText = `
		background-color: #7a6ad6b6;
		color: #3b256eff;
	`;
	getIds("left_button_extended").style.cssText = `
		background-color: #7a6ad6b6;
		color: #3b256eff;
	`;
	getIds("middle_section").style.cssText = `
		background-image: radial-gradient(circle at center, #a5a1e0ff, #9387d6ff, #5e51acff);
		background-color: #ceccccff;
	`;
	getIds("settings_button").style.backgroundColor = "#7a6ad6b6";
	getIds("horses_list").style.cssText = `
		background-color: #7a6ad6b6;
		color: #3b256eff;
	`;
}


function still_mode() {
	set_perm_cookie("theme", "still");

	getIds("test_image").src = "resources/images/still.png";
	document.body.style.cssText = `
		backgroundImage: none;
		background-color: #1f0000ff;
		color: #c9c9c9;
	`
	getIds("left_strip_hidden").style.cssText = `
		background-image: none;
		background-color: #300300ff;
		background-image: url(resources/images/stille.png);
		background-position: center;
	`;
	getIds("left_strip_extended").style.cssText = `
		background-image: none;
		background-color: #300300ff;
		background-image: url(resources/images/stille.png);
		background-position: center;
	`;
	getIds("right_strip").style.cssText = `
		background-image: none;
		background-color: #300300ff;
	`;
	getIds("left_button_hidden").style.cssText = `
		background-color: #440500ff;
		color: #b8827dff;
	`;
	getIds("left_button_extended").style.cssText = `
		background-color: #440500ff;
		color: #b8827dff;
	`;
	getIds("middle_section").style.cssText = `
		background-image: radial-gradient(circle at center, #681b1bff, #660b0bff, #581500ff, #360400ff);
		background-color: #ceccccff;
	`;
	getIds("settings_button").style.backgroundColor = "#440500ff";
	getIds("horses_list").style.cssText = `
		background-color: #440500ff;
		color: #b8827dff;
	`;
}
*/