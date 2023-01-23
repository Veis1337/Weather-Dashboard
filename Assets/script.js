const apiKey = "a12ab13e9d9b3fabbc403be52164096a";
//Search bar
let search = $("#searchButton");
let searchBar = $("#inlineFormInputName2");
search.on("click", fetchWeather);

//Current Weather
let cityName = $("#cityName");
let date = $("#date");
let icon = $("#weatherIcon");
let conditions = $("#conditions");
let temp = $("#temp");
let wind = $("#wind");
let humidity = $("#humidity");
let weatherIcon = $("#weatherIcon");
//Forecast Cards
let forecastCard = $(".cardF");

//Day 1
let date1 = $("#date-1");
let icon1 = $("#icon-1");
let max1 = $("#max-1");
let min1 = $("#min-1");
let wind1 = $("#wind-1");
let humidity1 = $("#humidity-1");

//Day 2
let date2 = $("#date-2");
let icon2 = $("#icon-2");
let max2 = $("#max-2");
let min2 = $("#min-2");
let wind2 = $("#wind-2");
let humidity2 = $("#humidity-2");

//Day 3
let date3 = $("#date-3");
let icon3 = $("#icon-3");
let max3 = $("#max-3");
let min3 = $("#min-3");
let wind3 = $("#wind-3");
let humidity3 = $("#humidity-3");

//Day 4
let date4 = $("#date-4");
let icon4 = $("#icon-4");
let max4 = $("#max-4");
let min4 = $("#min-4");
let wind4 = $("#wind-4");
let humidity4 = $("#humidity-4");

//Day 5
let date5 = $("#date-5");
let icon5 = $("#icon-5");
let max5 = $("#max-5");
let min5 = $("#min-5");
let wind5 = $("#wind-5");
let humidity5 = $("#humidity-5");

//History
let history = $("#history");
let historyCount = 0;

$(document).on("click", ".historyLi", function () {
    searchBar.val($(this).text());
    fetchWeather(event);
});

//Setting history
startUp();
function startUp() {
    Object.keys(localStorage).forEach(function (key) {
        history.append(`<li class="historyLi list-group-item">${localStorage.getItem(key)}</li>`);

    });
}

function fetchWeather(event) {
    event.preventDefault();
    let citySearch = searchBar.val();
    //Updating history
    if (historyCount < 6) {
        historyCount = historyCount + 1;
        console.log(historyCount);
        localStorage.setItem("history" + historyCount, citySearch);
        history.append(`<li class="historyLi list-group-item">${localStorage.getItem("history" + historyCount)}</li>`)

    } else {
        historyCount = 0;
        console.log(historyCount);
        localStorage.setItem("history" + historyCount, citySearch);
        history.append(`<li class="historyLi list-group-item">${localStorage.getItem("history" + historyCount)}</li>`)
    }
    if ($("#history li").length > 4) {
        $("#history li").last().remove();
    }

        //Clearing Past Search Results
        history.empty();
        startUp();
        cityName.empty();
        date.empty();
        conditions.empty();
        temp.empty();
        weatherIcon.empty();
        wind.empty();
        humidity.empty();
        date1.empty();
        max1.empty();
        icon1.empty();
        wind1.empty();
        humidity1.empty();
        date2.empty();
        max2.empty();
        icon2.empty();
        wind2.empty();
        humidity2.empty();
        date3.empty();
        max3.empty();
        icon3.empty();
        wind3.empty();
        humidity3.empty();
        date4.empty();
        max4.empty();
        icon4.empty();
        wind4.empty();
        humidity4.empty();
        date5.empty();
        max5.empty();
        icon5.empty();
        wind5.empty();
        humidity5.empty();



        let currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=a12ab13e9d9b3fabbc403be52164096a&units=Imperial";
        //Getting current date & formatting to match weather API
        let objectDate = new Date();
        let day = objectDate.getDate();
        let month = objectDate.getMonth();
        let year = objectDate.getFullYear();
        let hour = objectDate.getHours();
        let minute = objectDate.getMinutes();



        let getWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=a12ab13e9d9b3fabbc403be52164096a&units=Imperial";
        fetch(currentWeather)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            })
            .then(data => {
                cityName.append(citySearch);
                date.append(year + "-" + month + "-" + day + " " + hour + ":" + minute);
                temp.append("Temperature: " + data.main.temp + " Degrees F");
                weatherIcon.append(`<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`)
                conditions.append("Conditions: " + data.weather[0].description);
                wind.append("Wind Speed: " + data.wind.speed + " mph");
                humidity.append("Humidity: " + data.main.humidity + "%");
            })
        fetch(getWeather)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            })
            .then(data => {
                date1.append(data.list[7].dt_txt);
                icon1.append(`<img src="https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png"/>`)
                max1.append("Temperature: " + data.list[7].main.temp + " Degrees F");
                wind1.append("Wind Speed: " + data.list[7].wind.speed + " mph");
                humidity1.append("Humidity: " + data.list[7].main.humidity + "%");

                date2.append(data.list[15].dt_txt);
                icon2.append(`<img src="https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}@2x.png"/>`);
                max2.append("Temperature: " + data.list[15].main.temp + " Degrees F");
                wind2.append("Wind Speed: " + data.list[15].wind.speed + " mph");
                humidity2.append("Humidity: " + data.list[15].main.humidity + "%");

                date3.append(data.list[23].dt_txt);
                icon3.append(`<img src="https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}@2x.png"/>`);
                max3.append("Temperature: " + data.list[23].main.temp + " Degrees F");
                wind3.append("Wind Speed: " + data.list[23].wind.speed + " mph");
                humidity3.append("Humidity: " + data.list[23].main.humidity + "%");

                date4.append(data.list[31].dt_txt);
                icon4.append(`<img src="https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}@2x.png"/>`);
                max4.append("Temperature: " + data.list[31].main.temp + " Degrees F");
                wind4.append("Wind Speed: " + data.list[31].wind.speed + " mph");
                humidity4.append("Humidity: " + data.list[31].main.humidity + "%");

                date5.append(data.list[39].dt_txt);
                icon5.append(`<img src="https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}@2x.png"/>`);
                max5.append("Temperature: " + data.list[39].main.temp + " Degrees F");
                wind5.append("Wind Speed: " + data.list[39].wind.speed + " mph");
                humidity5.append("Humidity: " + data.list[39].main.humidity + "%");
            })
            .catch(error => console.log(error));
    }
