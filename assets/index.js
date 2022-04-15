let APIKey = "7f4f35c9284c7d4a8c059a4f816e9300";
let city;

// let temp = document.getElementById("#temp");
let submit = document.getElementById("get-weather")



function getWeather() {

    city = document.querySelector("#uInput").value;
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    fetch(queryURL)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {

            console.log(data);
            console.log(data.coord.lat);
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=${APIKey}`) 
            .then(function (resp) {
                return resp.json()
            }) .then(function(oneCall) {
                console.log(oneCall);
                var temp = oneCall.current.temp;
                var humidity = oneCall.current.humidity;
                var windspeed = oneCall.current.wind_speed;
                var uvi = oneCall.current.uvi;
                document.querySelector("#temp").innerHTML = "Temperature: " + temp;
                document.querySelector("#humidity").innerHTML = "Humidity: " +humidity;
                document.querySelector("#windspeed").innerHTML = "Windspeed: " +windspeed;
                document.querySelector("#uvi").innerHTML = "UV Index: " +uvi

                
            })
        })
        .catch(function () {
        });
        
}

function getFiveDays() {
    fetch(`api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${APIkey}`)
        .then(function (resp) {
            return resp.json()
        }) .then(function (fivedays) {
            console.log(fivedays)
        })
}