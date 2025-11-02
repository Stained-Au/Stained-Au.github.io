function getIds(wanted) {
    var back_button = document.getElementById("back");
    var select = document.getElementsByClassName("selection");
    var tag = document.getElementsByClassName("tag");
    var settings_button = document.getElementById("settings_btn");
    var line = document.getElementById("line");

    if(wanted == "back_button") {
        return back_button;
    } else if (wanted == "select") {
        return select;
    } else if (wanted == "tag") {
        return tag;
    } else if (wanted == "settings_button") {
        return settings_button;
    } else if (wanted == "line") {
        return line;
    }
}


function dark_mode() {
    set_perm_cookie("theme", "dark");

    document.body.style.cssText = `
        background-image: radial-gradient(circle at center, #242424ff, #202020ff, #1d1d1dff);
        background-color: #ceccccff;
        color: #888888;
    `;
    document.getElementById("back").style.cssText = `
        background-color: #1f1f1f;
	    color: #888888;
    `;
    getIds("line").style.borderColor = "#3b3b3b";
    document.querySelectorAll("td").forEach(td => {
        td.style.cssText = `
        background-image: radial-gradient(circle at center, #242424ff, #202020ff, #1d1d1dff);
        border: 0.2vw solid #3b3b3b;
        `;
    });
    document.querySelectorAll(".selection").forEach(el => {
        el.style.cssText = `
        background-color: #1f1f1f;
        color: #888888;
        `;
    });
    document.querySelectorAll(".tag").forEach(el => {
        el.style.cssText = `
        background-image: radial-gradient(circle at center, #333333ff, #303030ff, #222222ff));
         `;
    });
    getIds("settings_button").style.cssText = `
        background-color: #1f1f1f;
	    color: #888888;
    `;
}


function light_mode() {
    set_perm_cookie("theme", "light");

    document.body.style.cssText = `
        background-image: radial-gradient(circle at center, #ffffffff, #ceccccff, #bebebeff);
        background-color: #ceccccff;
        color: #535353ff;
    `;
    document.getElementById("back").style.cssText = `
        background-color: #ceccccff;
	    color: #535353ff;
    `;
    getIds("line").style.borderColor = "#8b8b8bff";
    document.querySelectorAll("td").forEach(td => {
        td.style.cssText = `
        background-image: radial-gradient(circle at center, #ffffffff, #ceccccff, #bebebeff);
        border: 0.2vw solid #8b8b8bff;
        `;
    });
    document.querySelectorAll(".selection").forEach(el => {
        el.style.cssText = `
        background-color: #ceccccff;
        color: #535353ff;
        `;
    });
    document.querySelectorAll(".tag").forEach(el => {
         el.style.cssText = `
        background-image: radial-gradient(circle at center, #ffffffff, #ceccccff, #bebebeff);
         `;
    });
    getIds("settings_button").style.cssText = `
        background-color: #ceccccff;
	    color: #535353ff;
    `;
}


function purple_mode() {
    set_perm_cookie("theme", "purple");

    document.body.style.cssText = `
        background-image: radial-gradient(circle at center, #4a3e69ff, #443569ff, #2f234dff);
        background-color: #2f234dff;
        color: #7c62b9ff;
    `;
    document.getElementById("back").style.cssText = `
        background-color: #2f234dff;
	    color: #6f57a5ff;
    `;
    getIds("line").style.borderColor = "#6f57a5ff";
    document.querySelectorAll("td").forEach(td => {
        td.style.cssText = `
        background-image: radial-gradient(circle at center, #4a3e69ff, #443569ff, #2f234dff);
        border: 0.2vw solid #6f57a5ff;
        `;
    });
    document.querySelectorAll(".selection").forEach(el => {
        el.style.cssText = `
        background-color: #2f234dff;
        color: #6f57a5ff;
        `;
    });
    document.querySelectorAll(".tag").forEach(el => {
         el.style.cssText = `
        background-image: radial-gradient(circle at center, #4a3e69ff, #443569ff, #2f234dff);
         `;
    });
    getIds("settings_button").style.cssText = `
        background-color: #2f234dff;
	    color: #6f57a5ff;
    `;
}


function matik_mode() {
    set_perm_cookie("theme", "matik");

    document.body.style.cssText = `
        background-image: radial-gradient(circle at center, #a5a1e0ff, #9387d6ff, #5e51acff);
        background-color: #9387d6ff;
        color: #3b256eff;
    `;
    document.getElementById("back").style.cssText = `
        background-color: #7a6ad6b6;
	    color: #3b256eff;
    `;
    getIds("line").style.borderColor = "#5e51acff";
    document.querySelectorAll("td").forEach(td => {
        td.style.cssText = `
        background-image: radial-gradient(circle at center, #a5a1e0ff, #9387d6ff, #5e51acff);
        border: 0.2vw solid #5e51acff;
        `;
    });
    document.querySelectorAll(".selection").forEach(el => {
        el.style.cssText = `
        background-color: #7a6ad6b6;
        color: #3b256eff;
        `;
    });
    document.querySelectorAll(".tag").forEach(el => {
         el.style.cssText = `
        background-image: radial-gradient(circle at center, #a5a1e0ff, #9387d6ff, #5e51acff);
         `;
    });
    getIds("settings_button").style.cssText = `
        background-color: #7a6ad6b6;
	    color: #3b256eff;
    `;
}


function still_mode() {
    set_perm_cookie("theme", "still");

    document.body.style.cssText = `
        background-image: radial-gradient(circle at center, #681b1bff, #660b0bff, #581500ff, #360400ff);
        background-color: #b8827dff;
        color: #b8827dff;
    `;
    document.getElementById("back").style.cssText = `
        background-color: #440500ff;
	    color: #b8827dff;
    `;
    getIds("line").style.borderColor = "#290300ff";
    document.querySelectorAll("td").forEach(td => {
        td.style.cssText = `
        background-image: radial-gradient(circle at center, #681b1bff, #660b0bff, #581500ff, #360400ff);
        border: 0.2vw solid #290300ff;
        `;
    });
    document.querySelectorAll(".selection").forEach(el => {
        el.style.cssText = `
        background-color: #440500ff;
        color: #b8827dff;
        `;
    });
    document.querySelectorAll(".tag").forEach(el => {
         el.style.cssText = `
        background-image: radial-gradient(circle at center, #681b1bff, #660b0bff, #581500ff, #360400ff);
         `;
    });
    getIds("settings_button").style.cssText = `
        background-color: #440500ff;
	    color: #b8827dff;
    `;
}

function load_theme() {
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
}