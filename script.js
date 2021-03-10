const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const newYears = "1 jan 2022"; //daclara uma váriavél com a data final do contador

function countdown(){
    const newYearsDate = new Date(newYears); //newYearDate recebe a data final
    const currentDate = new Date(); // currentDate recebe a data atual 

    const totalSeconds = (newYearsDate - currentDate) / 1000; // a variável totalSeconds subtrai a dataFinal com a data atual e dividi por 1000 para transformar de milisegundos para segundos

    const days = Math.floor(totalSeconds/ 3600 / 24);  // a variavél days recebe a divisão de totalSeconds/3600 para transformar de segundos para yours e depois divide por 24 para transformar em dia

    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const mins = Math.floor(totalSeconds/ 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}


countdown();

setInterval(countdown, 1000);