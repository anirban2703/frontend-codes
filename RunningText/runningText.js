const textEl =document.getElementById('text')
const speedEl =document.getElementById('speed')


const text= 'Hey! I am Anirban Ghosh. How are you?     '

let index=1
let num = 200
let time = num/speedEl.value


runText()


function runText(){
    textEl.innerText  = text.slice(0,index)
    index++

    if(index>text.length){
        index=1
    }

    setTimeout(runText,time)

}


speedEl.addEventListener('input',(e) => time = num/e.target.value)
