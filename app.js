
function hideElement() {
    document.getElementById("container-main").style.display = "none";
    document.getElementById("lose").style.display = "block";
}
const photo = {
    rain: "./ascent/raining.png",
    snow: "./ascent/snow.png", //  Kar Yağışlı
    snowing: "./ascent/snowing.png", //Karla karasik yagmur
    cloudy: "./ascent/cloudy.png", // Parçalı bulutlu
    sun: "./ascent/cloudy.png"
};
async function getWeather() {
    const apiKey = 'e7704bc895b4a8d2dfd4a29d404285b6\n';
    const city = document.getElementById('city-input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.cod === 200) {
            const weatherData = `
                <div class="container-main" id="container-main">
         
                 <div class="containerHava">
                 <div class="geri-icons">
                <img   id="geriİcons" src="./ascent/icons8-back-64.png" alt="geri" width="30px" height="30px" style="margin-top: 47px; margin-right: 30px; cursor: pointer" onclick="hideElement()">
                   </div>
                 <div class="container-name">
                 <div class="backgroundName">
                 <img src="./ascent/earth.png" alt="resim" width="20px" height="16px"> 
                  <h1>${data.name}, ${data.sys.country}</h1>  
                  </div>
                  
                  <div class="vr"></div>  
                
                </div>
                <div class="weather-Background">
                <div class="container-weather">  
                    <p >Hava Durumu: <br>  ${data.weather[0].description}</p>
                  </div>
                
                  <div class="rr"></div>  
                  
                  </div>
                  
                  <div class="temp-background">
                  <div class="container-temp">
                  <img src="./ascent/thermometer.png " alt="" width="25px" height="25px">   
                    <p>Sıcaklık: <br> ${data.main.temp} °C</p>
                </div>
                <div class="cc"></div>  
                </div>
                
                <div class="speed-background">
                <div class="container-Speed">
                    <img src="./ascent/wind.png" alt="resim" width="30px" height="30px">
                     <p>Rüzgar Hızı: <br>  ${data.wind.speed} m/s</p>
                </div>
                </div>
                 </div>
                 </div>
             
            `;
            document.getElementById('weather-data').innerHTML = weatherData;
            document.getElementById("lose").style.display = "none"
         
        } else {
            document.getElementById('hata-1').innerHTML =  'HATA! Bilgi Bulunamadı' ;
        }
    } catch (error) {
        console.error('Hata:', error);
    }

}
