const smallCups = document.querySelectorAll('.cup-small')
const liters= document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((cups,index)=>{
    cups.addEventListener('click',()=>highlightCups(index))
})



function highlightCups(index){
 
    if(index ===7 && smallCups[index].classList.contains('full')){
        index--
    }else if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')){
        index--
    }

    smallCups.forEach((cups,indx)=>{
        if(indx <= index){
            cups.classList.add('full')
        }else{
            cups.classList.remove('full')
        }
    })
    bigCup()
}


function bigCup(){
    const fullcups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
   
    if(fullcups==0){
        percentage.style.visibility='hidden'
        percentage.style.height=0
    }
    else{
        percentage.style.visibility='visible'
        percentage.innerText = `${(fullcups/totalCups)*100}%`
        percentage.style.height= `${fullcups/totalCups*330}px`
    }

    if(fullcups == totalCups){
        remained.style.visibility= 'hidden'
        remained.style.height= 0
    }
    else{
        remained.style.visibility= 'visible'
        liters.innerText = `${2-(250*fullcups/1000)}L`
    }
}