const ApiKey='7d152f25f5ac0bc820dd0d3b9280768a'


const temperatureDescription =document.querySelector('.temperature-description')
const tempDegree= document.querySelector('.temperature-degree')
const locationTimezone = document.querySelector('.location-timezone')
const icon= document.getElementById('icon')
const degreeSection =document.querySelector('.degree-section')
const degreeUnit = document.querySelector('.degreeUnit')
// const searchLocation=document.querySelector('.input-location')
// const searchbtn=document.querySelector('.search-icon')
// var temp;





window.addEventListener('load',()=>{
    let longitude
    let latitude

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            console.log(position)
            longitude= position.coords.longitude
            latitude= position.coords.latitude
            const Api =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${ApiKey}`
            fetch(Api)
            .then(response => response.json())
            .then(data=> calculateWeather(data))
        })
     }
})


// searchbtn.addEventListener('click',()=>{
//     let text = searchLocation.value
//     console.log(text)
//     const ApiLocation=`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${ApiKey}`

//     fetch(ApiLocation)
//     .then(response=>response.json())
//     .then(data=> calculateWeather(data))
// })


function setIcon(icon,iconId){
    icon.innerHTML =`<img height='100px' width='100px' src='animated/${iconId}.svg'>`
   }


function calculateWeather(data){
     console.log(data)
     temp= data.main.temp
     const descrip=data.weather[0]
     const location= data.name
     // console.log(descrip)
     tempDegree.innerHTML = Math.ceil(temp)
     temperatureDescription.innerHTML = descrip.description.toUpperCase()
     locationTimezone.innerHTML=location
     //for the icons
     setIcon(icon,descrip.icon)

     //for degree change from C to F

     degreeSection.addEventListener('click',() =>{
         swicthCtoF(temp)
     })
}   


function swicthCtoF(temp){
    if(degreeUnit.textContent ==='°C'){
        degreeUnit.textContent= '°F'
        tempDegree.innerHTML= Math.ceil((temp*1.8)+32)

    }else{
        degreeUnit.textContent ='°C'
        tempDegree.innerHTML= Math.ceil(temp)
    }
}