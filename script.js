
// GET REFERENCES RO THE HTML ELEMENTS WE'll NEED
let result = document.getElementById('result');
let searchBtn = document.getElementById('search-btn');
let cityRef = document.getElementById('city-input');
let keyApi = '294b2596c5b0bc802da947fa1d12a5db';

// DEFINE THE SEARCH FUNCTION
function getWeather(){ 

let city = cityRef.value;  

let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric`;

if ( city.length == 0) {
    result.innerHTML = `<h3>Please enter city</h3>`
}else {

     // FETCH THE DATA  FROM OPENWEATHERMAP API
 fetch(url)
.then((response) => {
    if (!response.ok){
     throw new Error('Network response was not ok')
    }
    return response.json();
})
.then((data) => {
    
 //UPDATE THE RESULTS WITH THE DATA
result.innerHTML = 
        `
        <h2 >${data.name}</h2>
     <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">  
        <p id="degree">${data.main.temp}</p>
        <label for="max">Max</label>
        <p id="max">${data.main.temp_max}</p>
        <label for="min">min</label>
        <p id="min">${data.main.temp_min}</p>
         `
})
.catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
            result.innerHTML = '<h3> city not found</h3>';
})
}
}

searchBtn.addEventListener('click', getWeather)

