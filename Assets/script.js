//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const apiKey = "a12ab13e9d9b3fabbc403be52164096a";
//Search bar
let search = $("#searchButton");
let searchBar = $("#inlineFormInputName2");
search.on("click", fetchWeather);

//Current Weather
let cityName = $("#cityName");
let date = $("#date");
let conditions = $("#conditions");
let temp = $("#temp");
let wind = $("#wind");
let humidity = $("#humidity");
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

function fetchWeather() {
    let getWeather = "api.openweathermap.org/data/2.5/forecast?q=" + searchBar.val() + "&appid=a12ab13e9d9b3fabbc403be52164096a&units=Imperial";
    console.log(getWeather);

    fetch(getWeather)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                })
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to API');
        });
};



// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city