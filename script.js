setInterval(function(){
    let d = new Date();
    document.getElementById("hrs").innerHTML = d.getHours();
    document.getElementById("mins").innerHTML = d.getMinutes();
    document.getElementById("secs").innerHTML = d.getSeconds();
    document.getElementById("date").innerHTML =
        d.getDay() + "    " + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear()
    
},100000)
