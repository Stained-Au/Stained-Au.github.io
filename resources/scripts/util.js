function getParams() {
	let url = location.href.split("?")[1];

	let params = new URLSearchParams(url);
	let object = {};
	params.forEach(function(value, key) {
		object[key] = value;
	});

	return object;
}

function strHas(string, substring) {
	return string.search(substring) != -1;
}