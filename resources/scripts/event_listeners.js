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
        clear_cookie("theme")
        set_perm_cookie("theme", "dark");
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
        clear_cookie("theme")
        set_perm_cookie("theme", "light");
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
        clear_cookie("theme")
        set_perm_cookie("theme", "purple");
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
        clear_cookie("theme")
        set_perm_cookie("theme", "matik");
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
        clear_cookie("theme")
        set_perm_cookie("theme", "still");
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

window.addEventListener("load", function() {
    //clear_cookie("theme");
    console.log(get_cookie("theme"));

    let cookie = document.cookie;
    if(cookie.search("dark") != -1) {
        dark_mode();
    }
    if(cookie.search("light") != -1) {
        light_mode();
    }
    if(cookie.search("purple") != -1) {
        purple_mode();
    }
    if(cookie.search("matik") != -1) {
        matik_mode();
    }
    if(cookie.search("still") != -1) {
        still_mode();
    }
});