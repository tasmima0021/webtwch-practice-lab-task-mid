function showField(){

    var type = document.getElementById("userType").value;

    var roll = document.getElementById("rollDiv");
    var department = document.getElementById("departmentDiv");

    if(type == "Student"){

        roll.style.display = "block";
        department.style.display = "none";

    }
    else if(type == "Teacher"){

        department.style.display = "block";
        roll.style.display = "none";

    }
    else{

        roll.style.display = "none";
        department.style.display = "none";

    }

}