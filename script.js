let counddownDate = new Date().getTime()+600000;//1minute=60,000 ms

let countdownFunction = setInterval(function(){
    let now = new Date().getTime();
    let timeLeft = counddownDate - now;
    

    let hour = Math.floor((timeLeft%(1000*60*60*24))/(1000*60*24));
    let minutes = Math.floor((timeLeft%(1000*60*60))/(1000*60));
    let seconds = Math.floor((timeLeft%(1000*60))/1000);

    document.getElementById("timer").innerHTML=(hour<10? "0": "")+hour+":"+(minutes<10? "0":"")+minutes+":"+
    (seconds<10? "0":"")+seconds;
    if (timeLeft <0){
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML="Expired";
    }
});
