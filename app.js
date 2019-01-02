var the_time = document.getElementById('time')
var hexa = document.getElementById('hexa');

function hexaClock(){
    var time = new Date();
//Getting the h, m, and s
    var hours = (time.getHours() % 12).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
//conditional: to check if we have at least two digit per condition
    if(hours.length < 2){
        hours = '0'+ hours;
    }
    if(minutes.length < 2){
        minutes = '0' + minutes;
    }
    if(seconds.length < 2){
        seconds = '0' + seconds;
    }
//
the_time.textContent = hours+ ":"+ minutes+"."+seconds;
hexa.textContent = '#'+hours+minutes+seconds;
document.body.style.backgroundColor = hexa.textContent;
    
}
//call the function the first time not lose the first second
hexaClock();
//every second updates the clock and the hexadecimal value
setInterval(hexaClock, 1000);