const addAlarmBtn = document.getElementById('submit')
const alarmDay = document.getElementById('day')
const alarmTime = document.getElementById('time')
const alarms = document.getElementById('alarms')
const mainclock = document.getElementById('mainclock')
const dayclock = document.getElementById('dayclock')

const sound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg')
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

class Clock{

    constructor() {
        this.alarm = []
    }

    getAlarm(){
    
        return this.alarm;
    }
    setAlarm( time ){
        const alarmInstence = {
            id : uniqueId(),
            time: formatTime(time),
            on: true,
            snoozeRemaining: 3
        }
        this.alarm.push(alarmInstence)
        refreshAlarmInUi();
    }

    deleteAlarm(id){
        this.alarm = this.alarm.filter((alarm) => alarm.id !== id)
        // console.log(this.alarm)
        refreshAlarmInUi()
    }
    playAlarm(id){
        // console.log(`Alarm ${id} is Playing`)
        sound.play()
       
        // window.alert("Alarm Ringing")
    }


    snoozeAlarm (id , cancel = false){
        this.alarm.map((alarms) => {
            // console.log(alarms)
            if(id === alarms.id ){

                if(alarms.snoozeRemaining === 0 || cancel){
                    console.log( "Cancelling Alarm Today")
                    const newTime = Date.now(alarms.time) + 7*24*60*60*1000 - 5*(3-alarms.snoozeRemaining)*60*1000;
                    alarms.time = formatTime(new Date(newTime))
                    alarms.snoozeRemaining = 3;
                }
                else{
                   console.log( "Snoozing for 5 mins")
                   const newTime = Date.now(alarms.time)+ 5*60*1000;
                   alarms.time = formatTime(new Date(newTime))
                   alarms.snoozeRemaining = alarms.snoozeRemaining - 1;
                }
                setTimeout(()=> refreshAlarmInUi(), 2000)
            }
            return alarms
        })
    }

}

const uniqueId = () =>{
    return Math.floor(Math.random()*Date.now())
}

const formatTime = (time) =>{
    const newTime = new Date(time).setMilliseconds(0);
    return new Date(newTime).setSeconds(0)
}

const refreshAlarmInUi = () => {
    alarms.innerHTML = "";
    const sortedAlarms = clock.getAlarm().sort((a,b)=> { 
        return a-b
    })
    sortedAlarms.forEach((alarm) =>{
        addAlarmToUi(alarm.time, alarm.id)
    })
}

const addAlarmToUi= (timeForAlarm, id) =>{
    const day = new Date(timeForAlarm).getDay()
    const Hour = new Date(timeForAlarm).getHours()
    const mins = new Date(timeForAlarm).getMinutes()
    const alarmEl = document.createElement('div')
    const dayName = days[day]
    let tempmonth = new Date(timeForAlarm).getMonth()
    let tempdate = new Date(timeForAlarm).getDate()
    let temphr = new Date(timeForAlarm).getHours()
    let tempmin = new Date(timeForAlarm).getMinutes()
    let tempyr = new Date(timeForAlarm).getFullYear()
    alarmEl.innerHTML =  
    `<div class="lists">
    <h3 accesskey=${id}>
    ${alarms.childElementCount +1}. ${dayName} ${Hour.toString().padStart(2,"0")}:${mins.toString().padStart(2,"0")}
    <span>
    <i class="fa-solid fa-trash"></i>
    </span>
   </h3>
    <small>Next Alarm on  ${tempdate}/${tempmonth+1}/${tempyr} at ${temphr}:${tempmin} </small> 
    </div>
    `
    // <p>Next Alarm on ${new Date(timeForAlarm)}</p>
    alarms.appendChild(alarmEl)
}

const handleSnoozeCancel = (e, alarmId) =>{
    const snoozeOrCancel = e.key;
    if(snoozeOrCancel === 's'){
       clock.snoozeAlarm(alarmId)
       sound.pause()
    }
    else if(snoozeOrCancel === 'c'){
       clock.snoozeAlarm(alarmId, true)
       sound.pause()
    }    
    else{
       window.alert("Invalid Response, Snoozing the alarm for 5 mins")
       clock.snoozeAlarm(alarmId)
    }
}

const isTimeSame = (time1,time2) => {
    if(formatTime(new Date(time1))=== formatTime(new Date(time2))){
    return true;
    }else{
    return false;
    }
    }



const clock = new Clock()

addAlarmBtn.addEventListener("click", ()=>{
    // console.log(alarmTime.value,alarmDay.value)
    const hour = parseInt(alarmTime.value.split(':')[0])
    const minute = parseInt(alarmTime.value.split(':')[1])
    // console.log(hour, minute)
    const currYear = new Date().getFullYear()
    const currMonth = new Date().getMonth()
    const currDay = new Date().getDay()
    const currDate = new Date().getDate()
    const currHours = new Date().getHours()
    const currMins = new Date().getMinutes()
    let date = currDate - currDay + parseInt(alarmDay.value)

    if(date < currDate || (date === currDate && (hour < currHours || (hour === currHours && minute <= currMins))))
        date += 7    

    let timeForAlarm = new Date(currYear, currMonth, date, hour, minute, 0,0);
    console.log(date)
    clock.setAlarm(timeForAlarm);
    })




setInterval(()=>{
    const alarms = clock.getAlarm();
    alarms.forEach((alarm) => {
        if(isTimeSame(alarm.time, new Date())){
           clock.playAlarm(alarm.id)
           
           console.log("ALarm Ring")
            if(window.confirm("Alarm Is Ringng Snooze For 5mins?")){
                sound.pause()
                clock.snoozeAlarm(alarm.id)
              }
           window.addEventListener("keydown", (e) => handleSnoozeCancel(e, alarm.id ),{once:true})
        }
    })

},60*1000)

let alarmlists

setInterval(()=>{
   let month = new Date().getMonth();
   let date = new Date().getDate();
   let day = new Date().getDay();
   let hr = new Date().getHours();
   let min = new Date().getMinutes();
   let sec = new Date().getSeconds();
   dayclock.innerText = `${days[day]}, ${date}th ${months[month]}`
   mainclock.innerText = `${hr.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`
// console.log(`${hr.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`)
// console.log(`${days[day]}, ${date}th ${month}`)

   document.querySelectorAll('.lists i').forEach((e)=>{
            e.addEventListener("click",()=>{
                // console.log(e.parentElement.parentElement)
                let key = e.parentElement.parentElement.accessKey
                e.parentElement.parentElement.parentElement.remove()
                // clock.deleteAlarm(key)
            })
   })

},1000)

