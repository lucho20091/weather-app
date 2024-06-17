const key = "f27ce85670a99a4166190adb76e403ba"
const goFS = document.getElementById("goFS");

async function getWeather(){
    try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=${key}`)
    const data = await response.json()
    console.log(data)
    } catch(e){
        console.log(e)
    }
}

getWeather()


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