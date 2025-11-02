function create_table(type) {
    var table = document.getElementById("list_display");
    var x = 0
    var y = 0;
    var z = 0;
    var img;

    table.innerHTML = "";

    for(var i = 1135; i>=1001; i--) {
        if(z % 5 == 0) {
            var row = table.insertRow(y);
        }
        img = i + "-" + type + ".png";
        cell = row.insertCell(x);
        cell.innerHTML = "<img src = 'resources/images/all_the_honses/"+ i +"/"+ img +"'>";
        z++;
    }
}