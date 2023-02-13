let lat = "0";
let lon = "0";
let date = 2;

updatePositionYourPosition()

function updateAPI(){
    let apiWithCords = "https://api.met.no/weatherapi/locationforecast/2.0/complete?lat="+lat+"&lon="+lon;
    fetch(apiWithCords)
    .then((Response) => Response.json())
    .then((data) => {weatherJSON = data})
    .then(() => console.log(weatherJSON))
    .then(() => updateText())
    .then(() => updateStyle())
}

function updateText(){
    document.getElementById('weatherIMG').src = 'Images/' + weatherJSON.properties.timeseries[date].data.next_1_hours.summary.symbol_code + '.svg'
    document.getElementById('weatherIMG').alt = weatherJSON.properties.timeseries[date].data.next_1_hours.summary.symbol_code
    document.getElementById('temperatureP').innerHTML = '<img src="Images/thermometer.svg" height=48px alt="Grader celsius"> <span style="font-size: 3rem">' + weatherJSON.properties.timeseries[date].data.instant.details.air_temperature + '</span>&#176;C'
    document.getElementById('rainP').innerHTML = '<img src="Images/umbrella.svg" alt="Nedbør" height=32px> <span style="font-size: 2rem">' + weatherJSON.properties.timeseries[date].data.next_1_hours.details.precipitation_amount + '</span>mm'
    document.getElementById('windSpeedP').innerHTML = '<img src="Images/wind-icon.svg" alt="Vind" height=28px> <span style="font-size: 1.5rem">' + weatherJSON.properties.timeseries[date].data.instant.details.wind_speed + '</span>m/s'
    document.getElementById('windSpeedP').innerHTML += ' <img src="Images/directionArrow.svg" id="windDirectionArrow" alt="Det blåser i retningen' + weatherJSON.properties.timeseries[date].data.instant.details.wind_from_direction + 'grader">'
}

function updateStyle(){
    if (weatherJSON.properties.timeseries[date].data.instant.details.air_temperature > 0){
        document.getElementById("temperatureP").style.color = "darkorange";
    }
    else if (weatherJSON.properties.timeseries[date].data.instant.details.air_temperature < 0){
        document.getElementById("temperatureP").style.color = "deepskyblue";
    }
    else if (weatherJSON.properties.timeseries[date].data.instant.details.air_temperature = 0){
        document.getElementById("temperatureP").style.color = "gray";
    }
    let rotation = weatherJSON.properties.timeseries[date].data.instant.details.wind_from_direction
    rotation = ("rotate(" + rotation + "deg" + ")")

    document.getElementById("windDirectionArrow").style.transform = rotation
}

function updatePositionYourPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updatePositionYourPositionPart2);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
}
function updatePositionYourPositionPart2(position) {
    lat = position.coords.latitude
    lon = position.coords.longitude
    updateAPI()
}
function updatePositionOslo() {
    lat = 59.911491
    lon = 10.757933
    updateAPI()
}
function updatePositionTrondheim() {
    lat = 63.446827
    lon = 10.421906
    updateAPI()
}
function updatePositionTromsoe() {
    lat = 69.649208
    lon = 18.955324
    updateAPI()
}
function updatePositionBergen() {
    lat = 60.397076
    lon = 5.324383
    updateAPI()
}
function updatePositionCustomPosition() {
    let coordinatesString = prompt("Hva er breddegraden og lengdegraden til din ønskede posisjon? (feks: 59.72, 10.87)")
    let coordinatesString2 = coordinatesString.replace(' ', '')
    let coordinatesArray = coordinatesString2.split(",")
    lat = coordinatesArray[0]
    lon = coordinatesArray[1]
    console.log(lat + ' ' + lon)
    if (lat >= -180 && lat <= 180 && lon >= -180 && lon <= 180 && lat != "" && lon != "" && lat != null && lon != null){
        updateAPI()
    }
    else {
        alert("Feil format, skriv kun inn tall og bruk punktum for desimaltall")
    }

}
