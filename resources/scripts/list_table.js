var names = Object.fromEntries(
    Object.entries(ids).map(([name, id]) => [id, name])
);
var image_type;

function create_table(type) {
    var table = document.getElementById("list_display");
    var z = 0;
    var img;
    var im;
    image_type = type;

    table.innerHTML = "";

    for(var i = 1001; i<=1136; i++) {
        if(names[i] === undefined){
            continue;
        }
        if(z % 5 == 0) {
            var row = table.insertRow(-1);
        }
        img = i + "-" + type + "-256.png";
        cell = row.insertCell(-1);
        im = i+"im";
        cell.innerHTML = "<div class = 'tag' id = '"+ i +"' onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")' onclick = 'show_image("+ i +")'></div><img src = 'resources/images/all_the_honses/"+ i +"/"+ img +"'onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")' id = '"+ im +"' onclick = 'show_image("+ i +")'>";
        z++;
    }
    for(var i = 2001; i<=2008; i++) {
        if(names[i] === undefined){
            continue;
        }
        if(z % 5 == 0) {
            var row = table.insertRow(-1);
        }
        img = i + "-" + type + "-256.png";
        cell = row.insertCell(-1);
        im = i+"im";
        cell.innerHTML = "<div class = 'tag' id = '"+ i +"' onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")' onclick = 'show_image("+ i +")'></div><img src = 'resources/images/all_the_honses/"+ i +"/"+ img +"'onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")' id = '"+ im +"' onclick = 'show_image("+ i +")'>";
        z++;
    }
    for(var i = 9001; i<=9008; i++) {
        if(names[i] === undefined){
            continue;
        }
        if(z % 5 == 0) {
            var row = table.insertRow(-1);
        }
        img = i + "-" + type + "-256.png";
        cell = row.insertCell(-1);
        im = i+"im";
        cell.innerHTML = "<div class = 'tag' id = '"+ i +"' onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")' onclick = 'show_image("+ i +")'></div><img src = 'resources/images/all_the_honses/"+ i +"/"+ img +"'onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")' id = '"+ im +"' onclick = 'show_image("+ i +")'>";
        z++;
    }
    for(var i = 9040; i<=9051; i++) {
        if(names[i] === undefined){
            continue;
        }
        if(z % 5 == 0) {
            var row = table.insertRow(-1);
        }
        img = i + "-" + type + "-256.png";
        cell = row.insertCell(-1);
        im = i+"im";
        cell.innerHTML = "<div class = 'tag' id = '"+ i +"' onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")' onclick = 'show_image("+ i +")'></div><img src = 'resources/images/all_the_honses/"+ i +"/"+ img +"'onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")' id = '"+ im +"' onclick = 'show_image("+ i +")'>";
        z++;
    }

    load_theme();
}
function while_over(x) {
    var th1s = document.getElementById(x);
    var th1s_i = document.getElementById(x+"im");

    th1s.innerHTML = names[x];
    th1s.style.display = "block";
    th1s_i.style.filter = "blur(3px)";
}
function while_out(x) {
    var th1s = document.getElementById(x);
    var th1s_i = document.getElementById(x+"im");
    th1s.style.display = "none";
    th1s_i.style.filter = "none";
}


function show_image(id) {
    var source = "resources/images/all_the_honses/"+ id +"/"+ id +"-"+ image_type +".png";
    var image = document.getElementById("image");
    var image_cont = document.getElementById("imago");
    var obok = document.getElementById("obok");
    var name = document.getElementById("name_of_horse");
    var id_name = document.getElementById("id_of_horse");
    var outfit_type = document.getElementById("outfit_type");
    var show = document.getElementById("show");
    var ot_text;

    show.style.display = "block";
    image.src = source;

    if(image_type === "school" || image_type === "school-full") {
        ot_text = "School";
    } else if (image_type === "race" || image_type === "race-full") {
        ot_text = "Race";
    }

    if(image_type === "school-full" || image_type === "race-full") {
        image_cont.style.width = "25%";
        obok.style.width = "66.5%"
    } else {
        image_cont.style.width = "50%";
        obok.style.width = "41.5%"
    }

    name.innerText = "Name: " + names[id];
    id_name.innerText = "Id: " + id;
    outfit_type.innerText = "Outfit type in the picture: " + ot_text;

    display_data(id);
}


function hide_image() {
    document.getElementById("show").style.display = "none";
}

document.addEventListener("keydown", function(event) {
    const active = document.activeElement;
    const isTyping =
        active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        active.isContentEditable;

    if (!isTyping && (event.key === "Escape")) {
        hide_image();
    }
});

function getHorseById(id) {
  let name = Object.keys(ids).find(key => ids[key] === id);
  if (!name) return null;

  return data.horses.find(horse => horse.name === name);
}

function display_data(id) {
    var horse = getHorseById(id);

    var strengths = document.getElementById("strengths");
    var weaknesses = document.getElementById("weaknesses");
    var ears = document.getElementById("ears");
    var tail = document.getElementById("tail");
    var family = document.getElementById("family");
    var rule = document.getElementById("rule");
    var phone_background = document.getElementById("phone_background");
    var before_a_race = document.getElementById("before_a_race");
    var birthday = document.getElementById("birthday");
    var roommate = document.getElementById("roommate");
    var height = document.getElementById("height");
    var three_sizes = document.getElementById("three_sizes");
    var shoe_size = document.getElementById("shoe_size");
    var weight = document.getElementById("weight");
    var emoji = document.getElementById("emoji");

    strengths.innerText = horse.strengths;
    weaknesses.innerText = horse.weaknesses;
    ears.innerText = horse.ears;
    tail.innerText = horse.tail;
    family.innerText = horse.family;
    rule.innerText = horse.rule;
    phone_background.innerText = horse.phone_background;
    before_a_race.innerText = horse.before_a_race;
    birthday.innerText = horse.birthday;
    roommate.innerText = horse.roommate;
    height.innerText = horse.height;
    three_sizes.innerText = horse.three_sizes;
    shoe_size.innerText = horse.shoe_size;
    weight.innerText = horse.weight;
    emoji.innerText = horse.emoji;
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
*/