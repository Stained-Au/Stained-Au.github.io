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
    document.body.style.cssText = `
        background-image: radial-gradient(circle at center, #242424ff, #202020ff, #1d1d1dff);
        color: #888888;
    `;
    getIds("back_button").style.cssText = `
        background-color: #1f1f1f;
	    color: #888888;
    `;
    document.hr.style.borderColor = "#3b3b3b";
    document.td.style.cssText = `
        background-image: radial-gradient(circle at center, #242424ff, #202020ff, #1d1d1dff);
        border: 0.2vw solid #3b3b3b;
    `;
    getIds("select").style.cssText = `
        background-color: #1f1f1f;
	    color: #888888;
    `;
    getIds("tag").style.cssText = `
        background-image: radial-gradient(circle at center, #333333ff, #303030ff, #222222ff);
    `;
}


function light_mode() {
    document.body.style.cssText = `
        background-image: radial-gradient(circle at center, #ffffffff, #ceccccff, #bebebeff);
        background-color: #ceccccff;
        color: #000000ff;
    `;
    getIds("back_button").style.cssText = `
        background-color: #ceccccff;
	    color: #535353ff;
    `;
    document.hr.style.borderColor = "#ceccccff";
    document.td.style.cssText = `
        background-image: radial-gradient(circle at center, #ffffffff, #ceccccff, #bebebeff);
        border: 0.2vw solid #3b3b3b;
    `;
    getIds("select").style.cssText = `
        background-color: #ceccccff;
	    color: #535353ff;
    `;
    getIds("tag").style.cssText = `
        background-image: radial-gradient(circle at center, #ffffffff, #ceccccff, #bebebeff);
    `;
}