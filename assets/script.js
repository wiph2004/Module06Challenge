var searchResult = $("#searchBtn");
var mainWeather = document.querySelector("#mainWeather");
var forecastWeather = document.querySelector("#secondaryWeather");
var search = document.querySelector("#searchBar").value;

previousSearches = [
    {
        search: "",
        coords: "",
    },
    {
        search: "",
        coords: "",
    },
    {
        search: "",
        coords: "",
    },
    {
        search: "",
        coords: "",
    },
    {
        search: "",
        coords: "",
    },
];
//API: ba89f21d1ed0bf183715eb8a1731fa71
//GEO API: http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=ba89f21d1ed0bf183715eb8a1731fa71
searchResult.on("click", getCoords);

function getCoords(event) {
    event.preventDefault();

    var search = document.querySelector("#searchBar").value;
    console.log(search);
    var queryString = "http://api.openweathermap.org/geo/1.0/direct?q=" + search + "&limit=5&appid=ba89f21d1ed0bf183715eb8a1731fa71";

    fetch(queryString)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            })
        .then(function (data) {
            console.log(data);
            var lon = data[0].lon;
            var lat = data[0].lat;
            console.log(lon, lat);
        //    return lat, lon;
        // })
        var getWeather = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=ba89f21d1ed0bf183715eb8a1731fa71";

        fetch(getWeather)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            })
        .then(function (data) {
            var entry = Object.keys(data).map(key => data[key]);
            var newData = Object.keys(entry).map(key => entry[key]);
            console.log("Data log:" + newData);
            var city = search;
            // var currentTemp = data.list[0].temp;

            console.log("City: " + city);

            var today = document.createElement("h2");
            today.textContent = search[0].toUpperCase() + search.substring(1) + " Weather";
            var todayTemp = document.createElement("p");
            todayTemp.textContent = 70
            today.appendChild(todayTemp);
            // console.log(today);
            mainWeather.appendChild(today);

            var tomorrow1 = document.createElement("h3");
            tomorrow1.textContent = "Tomorrow's Weather";
            var tomorrowTemp = document.createElement("ul");
            tomorrowTemp.textContent = "H:70  L:58";
            tomorrow1.appendChild(tomorrowTemp);

            var tomorrow2 = document.createElement("h3");
            tomorrow2.textContent = "Tomorrow's 2 Weather";
            var tomorrow2Temp = document.createElement("ul");
            tomorrow2Temp.textContent = "H:70  L:58";
            tomorrow2.appendChild(tomorrow2Temp);
            
            forecastWeather.appendChild(tomorrow1);
            // forecastWeather.appendChild(today);
            forecastWeather.appendChild(tomorrow2);
            // forecastWeather.appendChild(today);
            // forecastWeather.appendChild(tomorrow);
            

        })
        })
       
}

// function getWeather(search, lat, lon){

//     var localLon = lon;
//     var localLat = lat;

//     console.log("Lon and lat: " + localLon +"  "+ localLat);
//     getWeather = "api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=ba89f21d1ed0bf183715eb8a1731fa71";

//     fetch(getWeather)
//     .then(function (response) {
//         if (response.ok) {
//             return response.json();
//         }
//         })
//     .then(function (data) {
//         console.log("Data log:" + data);
//         var city = search;
        // var currentTemp = data.list[0].temp;
        // var highTemp = data.list[0].temp_max;
        // var lowTemp = data.list[0].temp_min;
        // var humidity = data.list[0].humitidy;
        // var weather = data.list.weather[1].description;
        // var weatherIcon = data.list[1].icon;
        // var cloudy = data.list[2].all;
        // var windSpeed = data.list[3].speed;

        // console.log(city, currentTemp, weather, cloudy, windSpeed);



//     })
// }
