const sound=['chill','ever','indie','fashion','watr','penguinmusic']

const btn = Array.from(document.querySelectorAll('.btn'))


for(let i=0;i<btn.length;i++){
    var buttonx= btn[i]
   //play music fun
    playSound(buttonx)
}


function playSound(btn){
     
    btn.addEventListener('click',function(){
        //stop music
        stopSound()
        document.getElementById(btn.innerText).play()
    })
}


function stopSound(){
    for(let i=0;i<sound.length;i++){
        const music =document.getElementById(sound[i])

        music.pause()


        music.currentTime =0
    }
}

document.querySelector('.stop').addEventListener('click',function(){
    stopSound()
})