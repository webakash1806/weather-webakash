

function sub() {

    const apiKey = "a6a3bb8e5867442294a111107232805";
    const apiUrl = "http://api.weatherapi.com/v1/forecast.json";
    let countryName = document.getElementById("country-name").value


    const urlWithParams = `${apiUrl}?key=${apiKey}&q=${encodeURIComponent(countryName)}&days=14&aqi=no&alerts=no`

    let p = fetch(urlWithParams)

    p.then((value) => {
        return value.json()
    }).then((value1) => {
        console.log(value1)
        document.getElementById("location").innerHTML = `${value1.location.name}, ${value1.location.region}, ${value1.location.country}`
        document.getElementById("cond").innerHTML = value1.current.condition.text
        document.getElementById("temp").innerHTML = `${value1.current.temp_c} C`
        document.getElementById("date-time").innerHTML = value1.location.localtime
        document.getElementById("wind").innerHTML = `${value1.current.wind_kph} km/h`
        document.getElementById("cloud").innerHTML = `${value1.current.cloud}%`
        document.getElementById("humidity").innerHTML = `${value1.current.humidity}%`
        document.getElementById("rain").innerHTML = `${value1.forecast.forecastday[0].day.daily_chance_of_rain}%`
        document.getElementById("date-1").innerHTML = `${value1.forecast.forecastday[0].date}`
        document.getElementById("date-2").innerHTML = `${value1.forecast.forecastday[1].date}`
        document.getElementById("date-3").innerHTML = `${value1.forecast.forecastday[2].date}`
        document.getElementById("date-4").innerHTML = `${value1.forecast.forecastday[3].date}`
        document.getElementById("high-temp-1").innerHTML = `${value1.forecast.forecastday[0].day.maxtemp_c}C`
        document.getElementById("high-temp-2").innerHTML = `${value1.forecast.forecastday[1].day.maxtemp_c}C`
        document.getElementById("high-temp-3").innerHTML = `${value1.forecast.forecastday[2].day.maxtemp_c}C`
        document.getElementById("high-temp-4").innerHTML = `${value1.forecast.forecastday[3].day.maxtemp_c}C`
        document.getElementById("low-tem-1").innerHTML = `${value1.forecast.forecastday[0].day.mintemp_c}C`
        document.getElementById("low-tem-2").innerHTML = `${value1.forecast.forecastday[1].day.mintemp_c}C`
        document.getElementById("low-tem-3").innerHTML = `${value1.forecast.forecastday[2].day.mintemp_c}C`
        document.getElementById("low-tem-4").innerHTML = `${value1.forecast.forecastday[3].day.mintemp_c}C`

        // for (let i = 0; i <= 3; i++) {
        //     document.getElementById("fix").innerHTML = value1.forecast.forecastday[i].date
        // }


    })
        .catch(error => {
            alert("No location Found")
            console.log("Error:", error);
        });;

    document.getElementById("country-name").value = ""
}

