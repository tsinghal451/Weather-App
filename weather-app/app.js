const apiKey ="db032267c128e6b018a610530d190e1a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=jaipur";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);


  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp;
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".Wind").innerHTML = data.wind.speed;
  

  


}

checkWeather();
