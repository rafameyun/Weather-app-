const apikey = "21d690cecb5c5cb0dfd36fe75846e1d5";

const url = (location) => 
`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

async function getWeatherByLocation(location) {
    const resp = await fetch(url(location), {origin: "cors" });
    const respData = await resp.json();

    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = kToC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
        <small> There are </small>
        <h2>${temp}°C</h2>
        <p>in ${location}</p>
    `;

}

function kToC(k) {
    return (k - 273,15).toFixed(2);
}