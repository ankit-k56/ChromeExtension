let time = document.getElementById('time');


function currentTime(){
    let now = new Date();
    let hour = now.getHours();
    let showHour = 00;
    let min = now.getMinutes();
    let showMin = 00;
    if(hour <10){
        showHour = `0${hour}`
    }
    else{
        showHour = hour
    }
    if(min < 10){
        showMin = `0${min}`
    }
    else{
        showMin = min;
    }
    curTime = `${showHour}:${showMin}`;
    time.innerHTML= `<span class="time">${curTime}</span>`;
    return curTime;
}
function renderTime(){
    currentTime();
    time.innerHTML= `<span class="time">${curTime}</span>`;
}
renderTime();
setInterval( currentTime , 1000);
