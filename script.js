const key = "f27ce85670a99a4166190adb76e403ba"
const fullScreenElem = document.querySelector("#full-screen")
const coords = JSON.parse(localStorage.getItem("coords"));
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const date = document.getElementById("temp-max-min");
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${key}`
const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${key}`
const bottomMid = document.querySelector(".bottom-mid")
// fetching the data
async function getWeather(){
    try {
    const response = await fetch(url2)
    const data = await response.json()
    console.log(data)
    renderHTML(data)
    renderForecastHTML(data)
    } catch(e){
        console.log(e)
    }
}

getWeather()
// render html main
function renderHTML(data){
   city.textContent = data.city.name
   temp.textContent = `${Math.floor(data.list[0].main.temp)}°`
   weather.textContent = data.list[0].weather[0].description
   date.textContent = `${data.list[0].dt_txt.slice(5,7)}/${data.list[0].dt_txt.slice(8,10)}`
   console.log(data.list[0].dt_txt.slice(11,16))
}

// render html bottom
function renderForecastHTML(data){
   console.log(data)
   let html = ''
   for (let i = 0; i < 5; i++){
      html += `
      <div class="bottom-mid-pill">
            <p>${data.list[i].dt_txt.slice(11,16)}</p>
            <p>${data.list[i].dt_txt.slice(5,7)}/${data.list[i].dt_txt.slice(8,10)}</p>
            <p class="bigger-p">${Math.floor(data.list[i].main.temp)}°</p>
      </div>`
   }
   console.log(html)
   bottomMid.innerHTML = html
}

// get the location
function getLocation(){
   navigator.geolocation.getCurrentPosition((position) => {
      localStorage.setItem("coords", JSON.stringify({
         lat: position.coords.latitude.toFixed(2),
         lon: position.coords.longitude.toFixed(2)
      }))
      window.location.reload()
   })
}

// getLocation()

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