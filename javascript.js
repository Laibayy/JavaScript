function calculate(){
   var a=parseInt(document.getElementById('bookOne').value);
   var b=parseInt(document.getElementById('bookTwo').value);
   var c=parseInt(document.getElementById('bookThree').value);
   var d=parseInt(document.getElementById('bookFour').value);
   var e=parseInt(document.getElementById('bookFive').value);
   var f=parseInt(document.getElementById('bookSix').value);

   if (a>100 || b>100 || c>100 || d>100 || e>100 || f>100){
    alert("Please enter correct value");
   }
   else{
    var obtain=a+b+c+d+e+f;
    document.getElementById("obtain").innerHTML=obtain;
    var per=obtain/600*100;
    document.getElementById("per").innerHTML=per;
    if (a>40 && b>40 && c>40 && d>40 && e>40 && f>40){
    document.getElementById("remarks").innerHTML="<span style='color:green'>Pass</span>";
    }
    else{
    document.getElementById("remarks").innerHTML="<span style='color:red'>Fail</span>";
    }
    if (per>=90){
    document.getElementById("grade").textContent="A+";
    }
    else if (per>=80){
        document.getElementById("grade").textContent="A";
    }
    else if (per>=70){
            document.getElementById("grade").textContent="B";
    }
    else if (per>=60){
        document.getElementById("grade").textContent="C";
    }
    else if (per>=40){
        document.getElementById("grade").textContent="D";
    }
    else if (per>=30){
        document.getElementById("grade").textContent="F";
    }
    return false;
}

} 

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();