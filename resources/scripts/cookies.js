function set_perm_cookie(name, value) {
	document.cookie = name + "=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 UTC;";
	//document.cookie = "theme=dark; expires=Mon, 3 Nov 2025 12:00:00 UTC; path=/";
}

function clear_cookie(name) {
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

/*
function get_cookie(name) {
	let cookie = document.cookie;
	return cookie.match("(?<= theme=)(.*?)(?=;)");
	return document.cookie;
}
*/

function get_cookies() {

	let kv_list = document.cookie.split(";");
	cookies = {};
	if(document.cookie != "") {
		for(let i = 0; i < kv_list.length; i++) {
			let kv = kv_list[i].split("=");
			cookies[kv[0].trim()] = kv[1].trim();
		}
	}

	return cookies;
}