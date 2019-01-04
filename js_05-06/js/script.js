var miliseconds = '000';
var seconds = '00';
var minutes = '00';
var hours = '00';

// debugger;

var MAX_MILISECONDS = 999;
var MAX_SECONDS = 59;
var MAX_MINUTES = 59;
var MAX_HOURS = 23;

// handler

function miliSecondsCounter() {
    console.log("counter run");
    miliseconds++;

    if (miliseconds >= MAX_MILISECONDS) {
        clearInterval(timerId);
    }
}

// miliseconds 
function transformCounter(counterValue) {

    if (counterValue <= 9) {
        return '00' + counterValue;
    } else if (counterValue <= 99) {
        return '0' + counterValue;
    } else {
        return '' + counterValue;
    }
}

function buttonHandler(event) {
    if (event.target.innerHTML === "Pause") {
        event.target.innerHTML = "Go on";
        //start timer
    } else if (event.target.innerHTML !== "Stop" ) {
        event.target.innerHTML = "Pause";
        // start timer
    } else {
        btnStart[0].innerHTML = "Start"
        // reset all the counters
    }
}

// var timerId = setInterval(miliSecondsCounter, 1);

var btnStart = document.getElementsByClassName('btn btn-outline-primary');
var btnStop = document.getElementsByClassName('btn btn-outline-danger');

btnStart[0].addEventListener('click', buttonHandler);
btnStop[0].addEventListener('click', buttonHandler);