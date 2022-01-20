// make enable and disable function
//make an eevnt listner for the previous and next
// 

const progress = document.getElementById('progress')
const prev =document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


let currentActive = 1
let numberOfCircles = circles.length
// console.log(circles)

next.addEventListener('click',()=>{
     currentActive++


     if(currentActive>numberOfCircles){
         currentActive = numberOfCircles
     }
     console.log(currentActive)

     updateCSS()
})

prev.addEventListener('click',()=>{
    currentActive--

    if(currentActive<1){
        currentActive = 1
    }

    console.log(currentActive)
    updateCSS()
})



function EnableDisable(){
    if(currentActive == 1){
        prev.disabled = true
    }else if(currentActive == numberOfCircles){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}

function updateCSS(){
    for(let i=0;i<numberOfCircles;i++){
        const circle= circles[i]

        if(i<currentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    }


    const activeclasses = document.querySelectorAll('.active')

    //calculting width
    //ste progress bar width = formula

    const progresswidth =(activeclasses.length-1)/(circles.length-1)*100
    
    progress.style.width= progresswidth +'%'

    EnableDisable()
}