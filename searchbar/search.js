const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('input')


btn.addEventListener('click',()=>{
    //toggle helps to add or remove the class
    search.classList.toggle('active')
    input.focus()
})