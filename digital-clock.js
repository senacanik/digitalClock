let textbox = prompt("What is your name?");
let spanName = document.querySelector(".name");
    if(spanName){
        if(textbox === null || textbox.trim() === ""){
            textbox="unkown person"
        }
        let textboxName = document.createTextNode(textbox);
        spanName.appendChild(textboxName);

    }
    else{
        textbox = prompt("What is your name?");
    }

    function time()
    {
        const date = new Date();
        h= date.getHours();
        m= date.getMinutes();
        s= date.getSeconds();
        type = "am";

        let mth = new Date();
        let monthList = ["january","Febuary","March","April","May","June","July","August","September","October","November","December"];
        let presentMonth = monthList[mth.getMonth()];
        document.querySelector(".month").innerHTML = presentMonth;

        if(h > 12){type="pm"}
        if(h > 12){h=h-12}
        if(m<10){m="0"+m}
        if(s<10){s="0"+s}

        fullTime = h +" : "+ m +" : "+s+" : "+type;
        document.getElementById("timeBox").innerText = fullTime;
        setTimeout(time, 1000);
        
    }
    time();
