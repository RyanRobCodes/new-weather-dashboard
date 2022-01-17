






function currentWeather(city) {

var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
fetch(apiURL).then(function(response){
    if(response.ok){
        response.json().then(function);
}

}