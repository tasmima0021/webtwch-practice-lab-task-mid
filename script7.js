var size = 20;

function changeColor(){

    document.getElementById("text").style.backgroundColor = "lightblue";

}

function increaseFont(){

    size = size + 2;

    document.getElementById("text").style.fontSize = size + "px";

}

function centerText(){

    document.getElementById("text").style.textAlign = "center";

}

function resetStyle(){

    size = 20;

    var p = document.getElementById("text");

    p.style.backgroundColor = "white";
    p.style.fontSize = "20px";
    p.style.textAlign = "left";

}