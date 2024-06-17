console.log("hello world1")
const key = "f27ce85670a99a4166190adb76e403ba"

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

var goFS = document.getElementById("goFS");
  goFS.addEventListener("click", function() {
      
   const elem = document.documentElement;
   if (elem.requestFullscreen) {elem.requestFullscreen()}
   
  }, false);
