function analyzeText(){

    var text = document.getElementById("text").value;

    
    if(text.trim() == ""){
        alert("Please enter some text.");
        return;
    }

    
    var characters = text.length;

    var words = text.trim().split(/\s+/).length;

    
    var reverse = text.split("").reverse().join("");

    
    document.getElementById("result").innerHTML =
    "<h3>Result</h3>" +
    "<p><b>Total Characters:</b> " + characters + "</p>" +
    "<p><b>Total Words:</b> " + words + "</p>" +
    "<p><b>Reversed Text:</b><br>" + reverse + "</p>";

}