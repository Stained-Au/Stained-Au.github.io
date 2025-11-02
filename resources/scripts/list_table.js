var names = Object.fromEntries(
    Object.entries(ids).map(([name, id]) => [id, name])
);

function create_table(type) {
    var table = document.getElementById("list_display");
    var x = 0
    var y = 0;
    var z = 0;
    var img;
    var im;

    table.innerHTML = "";

    for(var i = 1135; i>=1001; i--) {
        if(z % 5 == 0) {
            var row = table.insertRow(y);
        }
        img = i + "-" + type + ".png";
        cell = row.insertCell(x);
        im = i+"im";
        cell.innerHTML = "<div class = 'tag' id = '"+ i +"' onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")'></div><img src = 'resources/images/all_the_honses/"+ i +"/"+ img +"'onmouseover = 'while_over("+ i +")' onmouseout = 'while_out("+ i +")' id = '"+ im +"'>";
        z++;
    }
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