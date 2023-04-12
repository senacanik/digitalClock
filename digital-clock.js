    let textbox = prompt("adınız nedir");
    let spanName = document.querySelector(".name");
    textboxName = document.createTextNode(textbox);
    spanName.appendChild(textboxName);
    
    function time()
    {
        const date = new Date();
        h= date.getHours();
        m= date.getMinutes();
        s= date.getSeconds();
        type = "am";

        let mth = new Date();
        let monthList = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
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
