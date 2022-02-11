const listItems=document.querySelectorAll('.list-items')
const lists = document.querySelectorAll('.list')

listItems.forEach(listItem=>{

    listItem.addEventListener('dragstart',()=>{
        listItem.classList.add('dragging')
    })

    listItem.addEventListener('dragend',()=>{
        listItem.classList.remove('dragging')
    })
})


lists.forEach(list=>{
    list.addEventListener('dragover',e=>{
        e.preventDefault()
        const afterElement =getDragAfterElement(list, e.clientY)
        const draggable= document.querySelector('.dragging')
        if(afterElement == null){
            list.appendChild(draggable)
        }else{
            list.insertBefore(draggable, afterElement)
        }
    })
})

function getDragAfterElement(list, y){
    const draggableElements =[...list.querySelectorAll('.draggable:not(.dragging)')]
    
    return draggableElements.reduce((closest,child)=>{
        const box = child.getBoundingClintRect()
        const offset= y - box.top - box.height /2 
        if(offset < 0 && offset > closest.offset){
            return { offset: offset, element: child }
        }else{
            return closest
        }
    },{offset: Number.NEGATIVE_INFINITY}).element


}