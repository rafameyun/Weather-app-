const apikey = "21d690cecb5c5cb0dfd36fe75846e1d5"

const url = (location) => 
`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

async function getWeatherByLocation(location) {
    const resp = await fetch(url(location), {
        origin: "cors" });
        const respData = await resp.json();

    console.log(respData);
}

getWeatherByLocation('London');