let darkMode = false;

function changeMode()
{
    let body = document.getElementById("body");
    let header = document.getElementById("header");
    let content = document.getElementById("content");
    let footer = document.getElementById("footer");
    let btn = document.getElementById("btn");

    if(darkMode == false)
    {
        body.style.backgroundColor = "black";
        body.style.color = "white";

        header.style.backgroundColor = "#333";
        header.style.color = "white";

        content.style.backgroundColor = "#444";
        content.style.color = "white";

        footer.style.backgroundColor = "#333";
        footer.style.color = "white";

        btn.innerHTML = "Switch to Light Mode";

        darkMode = true;
    }
    else
    {
        body.style.backgroundColor = "white";
        body.style.color = "black";

        header.style.backgroundColor = "lightgray";
        header.style.color = "black";

        content.style.backgroundColor = "white";
        content.style.color = "black";

        footer.style.backgroundColor = "lightgray";
        footer.style.color = "black";

        btn.innerHTML = "Switch to Dark Mode";

        darkMode = false;
    }
}