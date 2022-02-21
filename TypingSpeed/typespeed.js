const typingText = document.querySelector('.typing-text p')
const inputField = document.querySelector('.wrapper .input-field')
const mistake = document.querySelector('.mistake span')
const time = document.querySelector('.time span b')
const wpm = document.querySelector('.wpm span')
const cpm = document.querySelector('.cpm span')
const tryAgainBtn = document.querySelector('button')



let charIndex =0, wrong = 0 , isTyping = false
let timer, maxTime= 60, timeLeft= maxTime

function randomPara(){
    //for getting the random index in the paragraph array
    let randomIndex= Math.floor(Math.random()* paragraphs.length)
    typingText.innerHTML=''
    // console.log(paragraphs[randomIndex].split(''))
    paragraphs[randomIndex].split('').forEach((e)=>{
        let spanTag = `<span>${e}</span>`
        typingText.innerHTML += spanTag
    })
    typingText.querySelectorAll('span')[0].classList.add('active')
    document.addEventListener('keydown',()=> inputField.focus())
    typingText.addEventListener('click',()=> inputField.focus())
}

function initTyping(){
    const chars = typingText.querySelectorAll('span')
    let typedChar = inputField.value.split("")[charIndex]
    if(charIndex < chars.length -1 && timeLeft > 0){
        if(!isTyping){

            timer = setInterval(initTimer,1000)
            isTyping=true
        }
    
        if(typedChar == null){
              charIndex--
              if(chars[charIndex].classList.contains('incorrect')){
                  wrong--
              }
              chars[charIndex].classList.remove('correct','incorrect')
        }else{
    
            if(chars[charIndex].innerText === typedChar){
                chars[charIndex].classList.add('correct')
            }else{
                wrong++
                chars[charIndex].classList.add('incorrect')
            }
        
            charIndex++ 
        }
        
        chars.forEach(span => span.classList.remove('active'))
        chars[charIndex].classList.add('active')
        console.log(typedChar)
        let wordPerMin = Math.round((((charIndex-wrong)/5)/(maxTime - timeLeft))* 60)
        wordPerMin = wordPerMin<0 || !wordPerMin || wordPerMin === Infinity ? 0 : wordPerMin
        console.log(wordPerMin)
        mistake.innerText = wrong
        wpm.innerText = wordPerMin
        cpm.innerText = charIndex-wrong
    }else{
        inputField.value = ''
        clearInterval('timer')
        
    }

}


function initTimer(){
    if(timeLeft > 0){
        timeLeft--
        time.innerText = timeLeft
    }else{
        clearInterval(timer)
    }
}

function resetGame(){
    randomPara()
    inputField.value = ''
    clearInterval('timer')
    charIndex =0
    wrong = 0
    isTyping = false
    timeLeft= maxTime
    time.innerText = timeLeft
    mistake.innerText = wrong
    wpm.innerText = 0
    cpm.innerText = 0
    
}


randomPara()
inputField.addEventListener('input', initTyping)
tryAgainBtn.addEventListener('click',resetGame)
