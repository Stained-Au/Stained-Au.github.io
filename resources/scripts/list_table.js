var names = Object.fromEntries(
    Object.entries(ids).map(([name, id]) => [id, name])
);

function create_table(type) {
    var table = document.getElementById("list_display");
    var z = 0;
    var img;
    var im;

    table.innerHTML = "";

    for(var i = 1001; i<=1136; i++) {
        if(names[i] === undefined){
            continue;
        }
        if(z % 5 == 0) {
            var row = table.insertRow(-1);
        }
        img = i + "-" + type + ".png";
        cell = row.insertCell(-1);
        im = i+"im";
        cell.innerHTML = "<div class = 'tag' id = '"+ i +"' onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")'></div><img src = 'resources/images/all_the_honses/"+ i +"/"+ img +"'onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")' id = '"+ im +"'>";
        z++;
    }
    for(var i = 2001; i<=2008; i++) {
        if(names[i] === undefined){
            continue;
        }
        if(z % 5 == 0) {
            var row = table.insertRow(-1);
        }
        img = i + "-" + type + ".png";
        cell = row.insertCell(-1);
        im = i+"im";
        cell.innerHTML = "<div class = 'tag' id = '"+ i +"' onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")'></div><img src = 'resources/images/all_the_honses/"+ i +"/"+ img +"'onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")' id = '"+ im +"'>";
        z++;
    }
    for(var i = 9001; i<=9008; i++) {
        if(names[i] === undefined){
            continue;
        }
        if(z % 5 == 0) {
            var row = table.insertRow(-1);
        }
        img = i + "-" + type + ".png";
        cell = row.insertCell(-1);
        im = i+"im";
        cell.innerHTML = "<div class = 'tag' id = '"+ i +"' onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")'></div><img src = 'resources/images/all_the_honses/"+ i +"/"+ img +"'onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")' id = '"+ im +"'>";
        z++;
    }
    for(var i = 9040; i<=9051; i++) {
        if(names[i] === undefined){
            continue;
        }
        if(z % 5 == 0) {
            var row = table.insertRow(-1);
        }
        img = i + "-" + type + ".png";
        cell = row.insertCell(-1);
        im = i+"im";
        cell.innerHTML = "<div class = 'tag' id = '"+ i +"' onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")'></div><img src = 'resources/images/all_the_honses/"+ i +"/"+ img +"'onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")' id = '"+ im +"'>";
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