

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
        document.getElementById("temp").innerHTML = `${Math.round(value1.current.temp_c)}\u00B0C`
        document.getElementById("date-time").innerHTML = value1.location.localtime
        document.getElementById("wind").innerHTML = `${value1.current.wind_kph} km/h`
        document.getElementById("cloud").innerHTML = `${value1.current.cloud}%`
        document.getElementById("humidity").innerHTML = `${value1.current.humidity}%`
        document.getElementById("rain").innerHTML = `${value1.forecast.forecastday[0].day.daily_chance_of_rain}%`


        let dateDB = value1.forecast.forecastday

        dateDB.forEach(dat => {
            let dateArr = [...(dat.date)]

            // console.log(`${dateArr[8]}${dateArr[9]}/${dateArr[5]}${dateArr[6]}`)

            document.getElementById("date").innerHTML += `<div class="forecastData"><p>${dateArr[8]}${dateArr[9]}/${dateArr[5]}${dateArr[6]}</p> <img src="${dat.day.condition.icon}" alt="" class="forImg"> <p>${Math.round(dat.day.mintemp_c)}\u00B0C</p><p>${Math.round(dat.day.maxtemp_c)}\u00B0C</p></div>`




        })

        let time = [...(value1.current.last_updated)]
        // console.log(time)
        // console.log(`${ time[11]}, ${ time[12]}, ${ time[14]}, ${ time[15]}`)
        const startingTime = new Date();
        startingTime.setHours(`${time[11]}${time[12]}`);
        const hourlyData = value1.forecast.forecastday[0].hour;
        const hourlyData2 = value1.forecast.forecastday[1].hour;

        const filteredData = hourlyData.filter(hour => {
            const hourTime = new Date(hour.time);
            return hourTime >= startingTime;
        });

        filteredData.forEach(hour => {
            console.log(`${hour.time[11]}${hour.time[12]}:${hour.time[14]}${hour.time[15]} ${hour.condition.icon} ${hour.temp_c}`);
            document.getElementById("firstDay").innerHTML += ` <div class="firstHourData"> <p> ${hour.time[11]}${hour.time[12]}:${hour.time[14]}${hour.time[15]}</p> <img src="${hour.condition.icon}" class="firstImg"> <p> ${Math.round(hour.temp_c)}\u00B0C</p></div>`
        });

        const filteredData2 = hourlyData2.filter(hour => {
            const hourTime = new Date(hour.time);
            return hourTime > startingTime;
        });

        filteredData2.forEach(hour => {
            console.log(`${hour.time[11]}${hour.time[12]}:${hour.time[14]}${hour.time[15]} ${hour.condition.icon} ${hour.temp_c}`);
            document.getElementById("secondDay").innerHTML += ` <div class="secondHourData"> <p> ${hour.time[11]}${hour.time[12]}:${hour.time[14]}${hour.time[15]}</p> <img src="${hour.condition.icon}" class="firstImg"> <p> ${Math.round(hour.temp_c)}\u00B0C</p></div>`
        });

    })
        .catch(error => {
            alert("No location Found")
            console.log("Error:", error);
        });;

    document.getElementById("country-name").value = ""
}



