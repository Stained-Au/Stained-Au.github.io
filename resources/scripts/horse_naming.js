let current_horse = {};
let last_correct = null;

let selected_data_keys = [];

let filtered_data = [];

let already_appeared = [];

let correct_questions = 0;
let question_number = 1;
let total_questions = 0;

window.addEventListener("load", function() {
	selected_data_keys = parseDataKeyString(getParams().mode);
	updateCheckBoxes();
	document.getElementById("data_key_string").value = getParams().mode;

	generateFilteredData();

	generateQuestion(getRandomHorseData());
});

document.addEventListener("keydown", function(event) {
	if(event.key == "Enter") {
		submitGuess();
	}
});

function generateFilteredData() {
	for(let horse_i = 0; horse_i < data.horses.length; horse_i++) {

		let failed = false;
		for(let data_i = 0; data_i < selected_data_keys.length; data_i++) {
			data_key = selected_data_keys[data_i];

			failed = (data.horses[horse_i][data_key] == "null");
			console.log(data.horses[horse_i].name, data_key, data.horses[horse_i][data_key], failed);
			if(failed) {
				break;
			}
		}
		if(!failed) {
			filtered_data.push(data.horses[horse_i]);
		}
	}
	console.log(filtered_data.length);
	total_questions = filtered_data.length;
}

function getRandomHorseData() {
	let failed = false;
	while(true) {
		let random_id = Math.floor(Math.random() * filtered_data.length);
		let random_data = filtered_data[random_id];

		//selected_data_keys.forEach(data_key =>
		for(let i = 0; i < selected_data_keys.length; i++)	{
			data_key = selected_data_keys[i];

			//console.log(random_data, data_key);
			failed = (random_data[data_key] == "null") || already_appeared.includes(random_data.name);
			if(failed) {
				break;
			}
		}
		if(!failed) {
			filtered_data.splice(random_id, 1);
			console.log(filtered_data.length);
			return random_data;
		}
	}
}

function generateQuestion(horse_data) {
	let area = document.getElementById("horse_data");
	let elements = "";

	let question_counter = document.getElementById("question_counter");
	question_counter.innerHTML = "<div>Question #" + question_number + "</div><div>" + correct_questions + "/" + total_questions + "</div>";

	current_horse = horse_data;
	already_appeared.push(current_horse.name);

	for(let i = 0; i < selected_data_keys.length; i++) {
		let hr = i != selected_data_keys.length - 1;
		elements += generateHorseDataEntry(selected_data_keys[i], hr);
	}

	area.innerHTML = elements;

	let correct_text = document.getElementById("correct_text");
	switch(last_correct) {
		case true:
			correct_text.innerHTML = "Correct";
			correct_text.classList = ["correct"];
			break;
		case false:
			correct_text.innerHTML = "Incorrect";
			correct_text.classList = ["incorrect"];
			break;

		default:
			correct_text.innerHTML = "";
			correct_text.classList = [];
			break;
	}
}

function generateHorseDataEntry(key, add_hr = true) {
	let entry = "";

	entry += '<div class = "data_entry">'

	if(key == "school" || key == "race") {
		let id = ids[current_horse.name];
		entry = '<img src = "resources/images/all_the_honses/' + id + "/" + id + "-" + key + '.png" class = "guessing_image">';
	} else {

		let formatted_key = key.replaceAll("_", " ");
		let initial_letter = formatted_key.charAt(0).toUpperCase();

		formatted_key = initial_letter + formatted_key.substring(1, formatted_key.length);

		entry += '<span class = "data_key">' + formatted_key + ': </span><span class = "data_value">' + current_horse[key] + '</span>';
	}
	entry += '</div>';
	if(add_hr) {
		entry += '<hr class = "light_hr">';
	}

	return entry;
}

function submitGuess() {
	let input = document.getElementById("guess_input");
	let correcting_text = document.getElementById("correcting_text");

	if(input.value != "") {
		let correct = current_horse.name.toLowerCase().replaceAll(" ", "");
		let guess_raw = input.value;
		let guess = input.value.toLowerCase().replaceAll(" ", "");

		last_correct = guess === correct;
		if(last_correct) {
			correcting_text.innerHTML = "";
			correct_questions += 1;
		} else {
			correcting_text.innerHTML = '<span class = "correcting_text">It was </span><span class = "correcting_text_correct">' + current_horse.name + '</span><br><br><span class = "correcting_text">You entered </span><span class = "correcting_text_guess">' + guess_raw + '</span>';
		}

		question_number += 1;

		if(question_number > total_questions) {
			generateSummary();
		}

		generateQuestion(getRandomHorseData());
		input.value = "";

		console.log(already_appeared);
	}
}

function generateSummary() {

	let area = document.getElementById("guessing");

	area.innerHTML = '<div id = "summary">' + correct_questions + "/" + total_questions + "</div>";

}

let data_key_chars = {
	//"n": "name",
	"S": "strengths",
	"W": "weaknesses",
	"E": "ears",
	"T": "tail",
	"f": "family",
	"R": "rule",
	"p": "phone_background",
	"B": "birthday",
	"b": "before_a_race",
	"r": "roommate",
	"h": "height",
	"t": "three_sizes",
	"s": "shoe_size",
	"w": "weight",
	"e": "emoji",
	
	"i": "school",
	"I": "race"//,
	//"x": "random"
}

function parseDataKeyString(data_key_string) {
	let keys = [];

	/*
	entries.forEach(data_key_char => {
		if(str_has(data_key_string, data_key_char)) {
			keys.append(data_key_chars[data_key_char]);
		}
	});
	*/

	for(const [key, value] of Object.entries(data_key_chars)) {
  		if(strHas(data_key_string, key)) {
			keys.push(value);
		}
	}

	return keys;
}

function generateDataKeyString(data_key_char) {

	let string = "";

	for(const [key, value] of Object.entries(data_key_chars)) {

		let checkbox = document.getElementById("data_key_checkbox_" + key);
		if(checkbox.checked == true) {
			string += key;
		}
	}

	let data_key_string = document.getElementById("data_key_string");
	data_key_string.value = string;
	set_perm_cookie("mode", string);
}

function updateCheckBoxes() {
	for(const [key, value] of Object.entries(data_key_chars)) {
		if(selected_data_keys.includes(value)) {
			document.getElementById("data_key_checkbox_" + key).checked = true;
		}
	}
}

function reload() {
	let data_key_string = document.getElementById("data_key_string");
	if(data_key_string.value != "") {
		location.href = "honse_naminh.html?mode=" + data_key_string.value;
	} else {
		alert("Choose at least one category");
	}
}

/*
name
strengths
weaknesses
ears
tail
family
rule
phone_background
before_a_race
birthday
roommate
height
three_sizes
shoe_size
weight
emoji

n S W E T f R p B b r h t s w e

*/