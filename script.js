const key = "f27ce85670a99a4166190adb76e403ba"
const goFS = document.getElementById("goFS");
const fullScreenElem = document.querySelector("#full-screen")
const coords = JSON.parse(localStorage.getItem("coords"));
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const tempMinMax = document.getElementById("temp-max-min");

// fetching the data
async function getWeather(){
    try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${key}`)
    const data = await response.json()
    console.log(data)
    console.log(data.name, data.sys.country)
    renderHTML(data)
    } catch(e){
        console.log(e)
    }
}

getWeather()

function renderHTML(data){
   city.textContent = data.name
   temp.textContent = `${Math.floor(data.main.temp)}°`
   weather.textContent = data.weather[0].description
   tempMinMax.textContent = `H: ${Math.floor(data.main.temp_max)}° L: ${Math.floor(data.main.temp_min)}°`
}


// get the location
function getLocation(){
   navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem("coords", JSON.stringify({
         lat: position.coords.latitude.toFixed(2),
         lon: position.coords.longitude.toFixed(2)
      }))
   })
}

// getLocation()

// handling the full screen btn
goFS.addEventListener("click", function() {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
       if (elem.requestFullscreen) {
          elem.requestFullscreen();
       }
    } else {
       if (document.exitFullscreen) {
          document.exitFullscreen();
       }
    }
 }, false);

//  setting the screen height dinamically
function setFullScreen(){
   if (window.innerHeight < 700){
      fullScreenElem.style.height = window.innerHeight + "px";
   } else {
      fullScreenElem.style.height = "844px"
   }
}

window.addEventListener('resize', setFullScreen);
window.addEventListener('load', setFullScreen);