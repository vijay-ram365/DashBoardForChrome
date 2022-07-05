// random image for background from Picsum

let container = document.getElementById("container");
container.style.backgroundImage = "url(https://picsum.photos/2000)";

// weather section API from Scrimba

navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw Error("Weather data not available");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("weather-app").innerHTML = `
                 <p>${data.name}</p> 
                 <img class="img-weather" src=http://openweathermap.org/img/wn/${
                   data.weather[0].icon
                 }@2x.png />
                 <p><small>${data.weather[0].description}</small></p>
                 <p>${Math.round(data.main.temp)}℃</p>
              `;
    })
    .catch((error) => console.error(error));
});
//--------------------------------------------

// Date and Time

function dateAndTime() {
  const date = new Date();
  document.getElementById("date-app").innerHTML = `
        <p>${date.toLocaleDateString()} </p><p>${date.toLocaleTimeString(
    "en-us",
    { timeStyle: "short" }
  )}</p>
    `;
}

setInterval(dateAndTime, 1000);
//--------------------------------------------

// Fun Fact API from GITHUB free API repo

// const funFactUrl = "https://api.aakhilv.me/fun/facts";

// async function getFunFact() {
//   const response = await fetch(funFactUrl);
//   const data = await response.json();

//   document.getElementById("funfact-app").innerHTML = `
//         <small>Fun Fact:</small>
//         <p>${data[0]}</p>
//    `;
// }

// getFunFact().catch((error) => {
//   console.log(`No Data Available: Error ${error}`);
// });
//--------------------------------------------
