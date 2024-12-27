let nameLocation = document.querySelector(".locationName");
let image = document.querySelector(".ImageLoca");
let temp_c = document.querySelector(".temp");
let temp_text = document.querySelector(".tempText");
let time_loca = document.querySelector(".timeLoca") ;
let fell = document.querySelector(".fell");
let wind = document.querySelector(".wind_k");


let inputValue = document.getElementById("searchLoca");

inputValue.addEventListener("input" , name)

async function name() {
var fetchApi = await  fetch(`http://api.weatherapi.com/v1/forecast.json?key=d2dea69771c84fc3939230223241312&q=${true ?inputValue.value : 'london'}`);
let res = await fetchApi.json();

nameLocation.innerHTML = res.location.region ;
image.setAttribute("src",`${res.current.condition.icon}`); 
temp_c.innerHTML = res.current.temp_c ;
temp_text.innerHTML = res.forecast.forecastday[0].day.condition.text;
time_loca.innerHTML = res.forecast.forecastday[0].date;
fell.innerHTML =res.current.feelslike_c;

wind.innerHTML = res.current.wind_kph ;
// console.log(res)
}

// name()

// let req = new XMLHttpRequest();
// req.open("get" , "http://api.weatherapi.com/v1/forecast.json?key=d2dea69771c84fc3939230223241312&q=london" );
// req.send();
// req.responseText = 'json' ;
// req.addEventListener("loadend",function(){

//     if(req.status >=200 && req.status < 300){
//         console.log(req.response)
//     }
// })

