var num1 = document.getElementById("firstnum")
var num2 = document.getElementById("secondnum")
var operator = document.getElementById("operator")
var answer = document.getElementById("answer")


document.getElementById("btn").addEventListener("click", function(){
    if(num1.value === "" || num2.value === ""){
        alert('Enter a valid number')
        answer.innerHTML = 'You have to enter a number'
    }
    else{
        var ope = operator.value
        var exp = num1.value+ope+num2.value
        answer.innerHTML = eval(exp)
    }
})


