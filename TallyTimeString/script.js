
//targeting the dataset and store the times
const node =Array.from(document.querySelectorAll('[data-time]'))
const allTime=node.map(e=>e.dataset.time)


//filtering the mins and secs 
const allSeconds= allTime.map(val=>{
    let arr= val.split(':')
    let minutes = parseInt(arr[0])
    let seconds = parseInt(arr[1])
    return (minutes*60)+seconds
})

const totalTime=allSeconds.reduce((prevSum,currVal)=>prevSum+currVal)

//extracting the total hours from total seconds
const totalHour=Math.floor(totalTime/3600)
let secondsLeft= totalTime%3600

// extracting the total mins from total seconds

const totalMinutes= Math.floor(secondsLeft/60)
secondsLeft %= 60


document.querySelector('.total').innerHTML=`${totalHour}:${totalMinutes}:${secondsLeft}`




console.log(`${totalHour}:${totalMinutes}:${secondsLeft}`)