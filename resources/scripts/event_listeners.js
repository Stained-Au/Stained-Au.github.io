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

window.addEventListener("load", function() {

    let theme = get_cookies().theme;

    switch(theme) {
        case "dark":
            dark_mode();
            break;
        case "light":
            light_mode();
            break;
        case "matik":
            matik_mode();
            break;
        case "purple":
            purple_mode();
            break;
        case "still":
            still_mode();
            break;
              
        default:
            dark_mode();
            break;
    }
});