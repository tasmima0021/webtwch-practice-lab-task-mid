document.getElementById("signupForm").addEventListener("submit", function(event){

    event.preventDefault();

    
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("success").innerText = "";

    let valid = true;

    let name = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phone = document.getElementById("phone").value.trim();

    
    if(name === ""){
        document.getElementById("nameError").innerText = "Full Name is required";
        valid = false;
    }

    
    if(!email.includes("@") || !email.includes(".")){
        document.getElementById("emailError").innerText = "Enter a valid email";
        valid = false;
    }

    
    if(password.length < 6){
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if(password !== confirmPassword){
        document.getElementById("confirmError").innerText = "Passwords do not match";
        valid = false;
    }

    
    if(isNaN(phone) || phone === ""){
        document.getElementById("phoneError").innerText = "Phone number must contain only digits";
        valid = false;
    }


    if(valid){
        document.getElementById("success").innerText = "Registration Successful!";
    }

});