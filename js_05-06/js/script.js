var timerDigits = document.querySelectorAll('span');
var counter = 0;

function runTimer() {
    // debugger;
    counter++;

    var miliSec_num = parseInt(counter, 10);
    
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
    
    // return result;

}

function handler(e) {
    setInterval(runTimer, 1);
}

function buttonHandler(event) {
    if (event.target.innerHTML === "Pause") {
        event.target.innerHTML = "Go on";
        timerId = setInterval(runTimer, 1);
        //start timer
    } else if (event.target.innerHTML !== "Stop" ) {
        event.target.innerHTML = "Pause";
        // start timer
        timerId = setInterval(runTimer, 1);
    } else {
        btnStart[0].innerHTML = "Start"
        // reset all the counters
        clearInterval(timerId);
        counter = 0;
        timerDigits[0].innerHTML = '00:00:00';
        timerDigits[1].innerHTML = '000';
    }
}

var btnStart = document.getElementsByClassName('btn btn-outline-primary');
var btnStop = document.getElementsByClassName('btn btn-outline-danger');

btnStart[0].addEventListener('click', buttonHandler);
btnStop[0].addEventListener('click', buttonHandler);