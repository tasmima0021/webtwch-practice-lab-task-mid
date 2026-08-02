
function changeTheme(){

    document.body.classList.toggle("dark");

}


function greeting(){

    var hour = new Date().getHours();

    var text = "";

    if(hour < 12){
        text = "Good Morning";
    }
    else if(hour < 18){
        text = "Good Afternoon";
    }
    else{
        text = "Good Evening";
    }

    document.getElementById("greeting").innerHTML = text;

}

greeting();


function showSection(id){

    document.getElementById("about").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";

    document.getElementById(id).style.display = "block";

}


function validateForm(){

    var name = document.getElementById("name").value.trim();

    var email = document.getElementById("email").value.trim();

    var message = document.getElementById("message").value.trim();

    var error = "";

    if(name == ""){
        error = "Name is required.";
    }
    else if(email == ""){
        error = "Email is required.";
    }
    else if(!email.includes("@") || !email.includes(".")){
        error = "Invalid email.";
    }
    else if(message.length < 10){
        error = "Message must be at least 10 characters.";
    }
    else{
        error = "Form Submitted Successfully!";
        document.getElementById("error").style.color = "green";
    }

    if(error != "Form Submitted Successfully!"){
        document.getElementById("error").style.color = "red";
    }

    document.getElementById("error").innerHTML = error;

}