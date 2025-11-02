function getIds(wanted) {
    var back_button = document.getElementById("back");
    var select = document.getElementsByClassName("selection");
    var tag = document.getElementsByClassName("tag");

    if(wanted == "back_button") {
        return back_button;
    } else if (wanted == "select") {
        return select;
    } else if (wanted == "tag") {
        return tag;
    }
}


function dark_mode() {
    set_perm_cookie("all_horse_theme", "dark");

    document.body.style.cssText = `
        background-image: radial-gradient(circle at center, #242424ff, #202020ff, #1d1d1dff);
        background-color: #ceccccff;
        color: #888888;
    `;
    document.getElementById("back").style.cssText = `
        background-color: #1f1f1f;
	    color: #888888;
    `;
    document.querySelectorAll("hr").forEach(hr => {
        hr.style.borderColor = "#3b3b3b";
    });
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
}


function light_mode() {
    set_perm_cookie("all_horse_theme", "light");

    document.body.style.cssText = `
        background-image: radial-gradient(circle at center, #ffffffff, #ceccccff, #bebebeff);
        background-color: #ceccccff;
        color: #000000ff;
    `;
    document.getElementById("back").style.cssText = `
        background-color: #ceccccff;
	    color: #535353ff;
    `;
    document.querySelectorAll("hr").forEach(hr => {
        hr.style.borderColor = "#ceccccff";
    });
    document.querySelectorAll("td").forEach(td => {
        td.style.cssText = `
        background-image: radial-gradient(circle at center, #ffffffff, #ceccccff, #bebebeff);
        border: 0.2vw solid #b6b6b6ff;
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
}

function load_theme() {
    let theme = get_cookies().all_horse_theme;

    console.log(theme);
    console.log(get_cookies());

    switch(theme) {
        case "dark":
            dark_mode();
            break;
        case "light":
            light_mode();
            break;

        default:
            dark_mode();
            break;
    }
}