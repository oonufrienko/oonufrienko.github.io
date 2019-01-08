var button = document.querySelectorAll('button'), count = 0;
var timerDigits = document.querySelectorAll('span');
    
function runTimer() {
        // debugger;
        count++;
    
        var miliSec_num = parseInt(count, 10);
        
        var hours   = Math.floor(miliSec_num / (3600 * 1000));
        var minutes = Math.floor((miliSec_num - (hours * 3600 * 1000)) / 60000);
        var seconds = Math.floor((miliSec_num - (hours * 3600 * 1000) - (minutes * 60000)) / 1000);
        var miliseconds = miliSec_num - (hours * 3600 * 1000) - (minutes * 60000) - (seconds * 1000);
    
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        if (miliseconds < 10) {
            miliseconds = "00" + miliseconds;
        } else if (miliseconds < 100) {
            miliseconds = "0" + miliseconds;
        }
    
        resultHHMMSS = hours+':'+minutes+':'+seconds;
        timerDigits[0].innerHTML = resultHHMMSS;
        timerDigits[1].innerHTML = miliseconds;
        
}
    
var timerId = undefined;
    
button[0].addEventListener('click', function() {
        if(!!timerId) {
            clearInterval(timerId);
            timerId = undefined;
            button[0].innerHTML = "Continue";
        } else { 
            timerId = setInterval(runTimer, 1); 
            button[0].innerHTML = "Pause";
        }
});
    
button[1].addEventListener('click', function() {
        clearInterval(timerId);
        timerId = undefined;
        timerDigits[0].innerHTML = '00:00:00';
        timerDigits[1].innerHTML = '000';
        button[0].innerHTML = "Start";
        count = 0;
});