

const panels = document.querySelectorAll('.panel')



//adding the next active class to the panel after click by using classlist.add

panels.forEach(panel =>{panel.addEventListener('click',function(){removeActive()

panel.classList.add('active')})})

//active class remove function by classlist remove
function removeActive(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}