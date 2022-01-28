const textEl =document.getElementById('text')
const speedEl =document.getElementById('speed')
const btn =document.getElementById('startbtn')
const body = document.querySelector('body')


const text= `Happy Anniversary ! for our 2 year relationship completion. Moyetri... I am very glad to have you. In past 
2 years we have faced many up's and down's in our relationship..Not only just 2 years 
I want to spend my whole life with you..This was a small contribution from my side, I LOVE YOU  <i style="color:red" class="fas fa-heart"></i>`

let index=1
let num = 200
// let time = num/speedEl.value

// btn.addEventListener("click",runText())
// runText()


function runText(){
    body.classList.add('img')
    textEl.innerHTML  = text.slice(0,index)
    index++

    // if(index>text.length){
    //     index=1
    // }
    textEl.classList.remove('display')

    setTimeout(runText,150)

}



