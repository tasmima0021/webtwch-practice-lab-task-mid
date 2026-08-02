function addStudent() {

    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var department = document.getElementById("department").value;


    if(name == "" || roll == "" || department == ""){
        alert("Please fill all fields.");
        return;
    }

    var table = document.getElementById("studentTable");

    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = roll;
    cell3.innerHTML = department;

    var btn = document.createElement("button");
    btn.innerHTML = "Delete";

    btn.onclick = function(){
        row.remove();
    };

    cell4.appendChild(btn);

        document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("department").value = "";
}