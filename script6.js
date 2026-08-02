function showTime(){

    var date = new Date();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var ampm = "AM";

    
    if(hour >= 12){
        ampm = "PM";
    }

    if(hour > 12){
        hour = hour - 12;
    }

    if(hour == 0){
        hour = 12;
    }

    
    if(hour < 10){
        hour = "0" + hour;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    if(second < 10){
        second = "0" + second;
    }

    document.getElementById("clock").innerHTML =
    hour + ":" + minute + ":" + second + " " + ampm;
}


showTime();

setInterval(showTime, 1000);