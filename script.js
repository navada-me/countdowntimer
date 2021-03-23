// variables to be returned
const daysL = document.getElementById('days');
const hoursL = document.getElementById('hours');
const minsL = document.getElementById('mins');
const secondsL = document.getElementById('seconds');

// declare date to calculate countdown
const dLeft = "01 Jan 2022" ;

// function to calculate countdown
function countdown() {
    const newYearsDate = new Date(dLeft);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/ 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600 ) % 24;
    const minutes = Math.floor(totalSeconds/ 60 ) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysL.innerHTML = days;
    hoursL.innerHTML = hours;
    minsL.innerHTML = minutes;
    secondsL.innerHTML = seconds;

    
}

// initiate countdown function
countdown();

setInterval(countdown,1000);