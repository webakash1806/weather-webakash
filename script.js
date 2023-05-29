

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



    })
        .catch(error => {
            alert("No location Found")
            console.log("Error:", error);
        });;

    document.getElementById("country-name").value = ""
}

