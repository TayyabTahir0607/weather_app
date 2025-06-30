let Api1 ="https://api.openweathermap.org/data/2.5/weather?q=";
let Api2 ="&appid=ab533be059643ed243915301feb06b9c&units=metric";
const inputCity= document.querySelector(".search-bar input");
const btn = document.querySelector(".search-bar i");
const updateCity=document.querySelector(".temp-country #city");
const updateTemp=document.querySelector(".temp-country #temp");
const updateHumid=document.querySelector(".display-box1 #humi");
const updateWind=document.querySelector(".display-box2 #W-speed");
const updateCloud=document.querySelector(".weather-img img");

btn.addEventListener("click",cty=()=>{
    let cityName=inputCity.value;
    
    
    (fetchWeather=async()=>{
        let data=await fetch(`${Api1}${cityName}${Api2}`);
        data= await data.json();
        updateCity.innerText=cityName;
        updateTemp.innerText= `${Math.round(data.main.temp)}°C`;
        updateWind.innerText=`${data.wind.speed} km/h`;
        updateHumid.innerText=`${data.main.humidity}`;
        let cld=data.weather[0].main;
        if(cld=="Clouds")
        {
            updateCloud.src="clouds.png";
        }else if(cld=="Mist")
        {
            updateCloud.src="mist.png"
        }else if(cld=="dizzle")
        {
            updateCloud.src="dizzle.png"
        }
        else{
            updateCloud.src="clear.png"
        }
    })();

});