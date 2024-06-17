const key = "f27ce85670a99a4166190adb76e403ba"
const goFS = document.getElementById("goFS");
const fullScreenElem = document.querySelector("#fullScreen")


// fetching the data
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
   fullScreenElement.style.height = window.innerHeight + "px";
}

window.addEventListener('resize', setFullScreen);
window.addEventListener('load', setFullScreen);