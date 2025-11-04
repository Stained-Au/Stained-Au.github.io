function dark_mode() {
	set_perm_cookie("theme", "dark");
	var theme = document.getElementById("theme");
	theme.href = "resources/styles/honses_namink/themes/theme_dark.css"
}

function light_mode() {
	set_perm_cookie("theme", "light");
	var theme = document.getElementById("theme");
	theme.href = "resources/styles/honses_namink/themes/theme_light.css"
}

function purple_mode() {
	set_perm_cookie("theme", "purple");
	var theme = document.getElementById("theme");
	theme.href = "resources/styles/honses_namink/themes/theme_purple.css"
}

function matik_mode() {
	set_perm_cookie("theme", "matik");
	var theme = document.getElementById("theme");
	theme.href = "resources/styles/honses_namink/themes/theme_matik.css"
}

function still_mode() {
	set_perm_cookie("theme", "still");
	var theme = document.getElementById("theme");
	theme.href = "resources/styles/honses_namink/themes/theme_still.css"
}

window.addEventListener("load", function() {
    let theme = get_cookies().theme;

    console.log(theme);
    console.log(get_cookies());

    switch(theme) {
        case "dark":
            dark_mode();
            break;
        case "light":
            light_mode();
            break;
        case "purple":
            purple_mode();
            break;
        case "matik":
            matik_mode();
            break;
        case "still":
            still_mode();
            break;

        default:
            dark_mode();
            break;
    }
})