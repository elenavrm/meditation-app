const button = document.querySelector('#myButtonOne');
button.addEventListener('click', function(){
    document.querySelector('#player').play();
})

const buttonTwo = document.querySelector('#myButtonTwo');
buttonTwo.addEventListener('click', function(){
    document.querySelector('#myVideo').play();
})

const start = 5;
let time = start * 60;

function updateCountdown() {
    let countdownEl = document.querySelector('#countdown');

    let minutes = Math.floor(time/60);
    let seconds = time%60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    else {
        seconds = seconds;
    }

    countdownEl.innerHTML = `${minutes} : ${seconds}`;

    time --;
    if (time < 0) {
        myStopFunction();
        time = 0;
    }

    else {
        time = time;
    }
}

let myTimer = setInterval(updateCountdown, 1000);

function myStopFunction() {
    clearInterval(myTimer);
}