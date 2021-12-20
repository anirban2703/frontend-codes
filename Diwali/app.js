const daysEl= document.getElementById("days");
const hoursEl= document.getElementById("hours");
const minsEl= document.getElementById("mins");
const secondsEl= document.getElementById("seconds");


const diwaliDate="24 Oct 2022";

function countTime(){
    const finalDate = new Date(diwaliDate);
    const currentDate = new Date();

    const totalSeconds = (finalDate - currentDate) / 1000;


    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;
    

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
    

}
/*function zeroIp(time){
    return time < 10?'0${time}':time;
}*/


countTime();
setInterval(countTime,1000);