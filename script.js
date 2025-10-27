const apikey = "3d727e035221ae61f114ab67306bc125";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";



document.addEventListener("DOMContentLoaded", () => {


  const searchbox = document.querySelector(".search-box input");

  const searchbtn = document.querySelector(".search-btn");

  const weatherIcon = document.querySelector(".weth-icon"); 

  async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    const data = await response.json();

    data.weather[0].main;

    const description = data.weather[0].description;

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".Temp").innerHTML = Math.round(data.main.temp) + " °C";

    document.querySelector(".humidity-value").innerHTML = data.main.humidity + " %";

    document.querySelector(".wind-value").innerHTML = data.wind.speed + " km/h";
    
    document.querySelector("#condition").innerText = description;

    



  if(data.weather[0].main == "Clouds"){

    weatherIcon.src="images/cloudy.png"
  }

  else if ( data.weather[0].main == "Clear"){

    weatherIcon.src = "images/default.png";
  }

  else if ( data.weather[0].main == "Rain"){

    weatherIcon.src = "images/rainy.png";
  }

  else if ( data.weather[0].main == "Snow"){

    weatherIcon.src = "images/Snowy.png";
  }

  else if ( data.weather[0].main == "Thunderstorm"){

    weatherIcon.src = "images/Thunder.png";
  }

  else if ( data.weather[0].main == "Mist"){

      weatherIcon.src = "images/mist.png";

      checkweather(searchbox.value);

    }

    // else (data.weather[0].main == "Not found") {

    //   weatherIcon.src = "images/404.png";

      
    // }

    

  

  document.querySelector(".weth-icon").style.display = "block";
  // document.querySelector(".weather-info").style.display = "block";
  //  document.querySelector(".weather-details").style.display = "block";
  // document.querySelector(".Temp").style.display = "block";
  // document.querySelector(".city").style.display = "block";
  // document.querySelector("#condition").style.display = "block";




  

  }

  // Pressing by search box...




  searchbtn.addEventListener("click", () => {

    checkweather(searchbox.value);

  });

  // Pressing by Enter key...

  searchbox.addEventListener("keydown",(event) => {

    if(event.key === "Enter"){

    checkweather(searchbox.value);

    }

    

  });



}
);



