'use strict';
function getweather(){
    return new Promise(function(resolve,reject){
        // async logic
        setTimeout(()=>{
            resolve("cloudy");
        },2000)
    })
}


function getWeatherIcon(weather){
    return new Promise(function(resolve,reject){
       switch(weather){
        case "sunny":
            resolve('🌞');
            break;
        case "cloudy":
            resolve('☁️');
            break;
        case "rainy":
            resolve("🌧️");
            break;
        default:
            reject("ERROR NOT FOUND⚠️");
       }
    })
}

const onSuccess = function(data){
    console.log(`First param ${data}`);
}

const onFailure =  function(data){
    console.log(`Second param ${data}`);
}

let promise = getweather();
promise
.then(getWeatherIcon)
.then(onSuccess,onFailure)