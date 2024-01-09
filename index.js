const apiKey = "1743de435c2c760e5a6258b5d1c10e0e";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const userInput = document.querySelector(".inputElement");
const searchButton = document.querySelector(".searchElement");


async function checkWeather(city) {

    try{
        const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °C";
        document.querySelector(".humidty").innerHTML=data.main.humidity;
        document.querySelector(".temp-max").innerHTML=data.main.temp_max;
        document.querySelector(".temp-min").innerHTML=data.main.temp_min;
        document.querySelector(".temps").innerHTML=Math.round(data.main.temp);
        document.querySelector(".wind").innerHTML=data.wind.speed;
        document.querySelector(".pressure").innerHTML=data.main.pressure;
    }
    catch(error){
        console.log(error);
    }


}
searchButton.addEventListener("click",() => {
    checkWeather(userInput.value);
})