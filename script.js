const apikey = "21d690cecb5c5cb0dfd36fe75846e1d5";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) => 
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), {origin: "cors" });
    const respData = await resp.json();

    console.log(respData);
    
    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <small> There are </small>
        <h2>${temp}°C</h2>
        <p>in ${search.value}</p>
    `;

    //Clean up 
    main.innerHTML = "";

    main.appendChild(weather);

}

function KtoC(K) {
    return Math.floor(K - 273,15).toFixed(1);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;
    
    if(city) {
        getWeatherByLocation(city);
    }
});