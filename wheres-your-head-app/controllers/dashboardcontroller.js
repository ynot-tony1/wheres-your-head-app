const axios = require("axios");
const dateFormatter = require("../utils/dateformatter");
const API_BASE_URL = "http://localhost:3002"; 
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

exports.renderDashboard = (req, res, next) => {
  const serviceUpdates = [
    "New feature launched: Track your mood with daily snapshots!",
    "Upcoming maintenance on March 14th, 2024 at midnight, expect some serious downtime!!",
    "Thanks for your support"
  ];
  const userId = res.locals.user.id;

  axios.get(`${API_BASE_URL}/home/${userId}`, { validateStatus: (status) => { return status < 500; } })
    .then(userResponse => {
      const user = userResponse.data.data;
      const city = user.city_name; 
      if (user.previous_login) {
          formattedPreviousLogin = dateFormatter(user.previous_login);
      } else {
          formattedPreviousLogin = "Never logged in";
      }
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`, { validateStatus: (status) => { return status < 500; } })
        .then(weatherResponse => {
          const weather = weatherResponse.data;
          res.render("dashboard", {
            user: {
              username: user.user_name,
              email: user.email,
              lastLogin: formattedPreviousLogin,
            },
            weather: {
              city: weather.name,
              temperature: weather.main.temp,
              description: weather.weather[0].description,
              feelsLike: weather.main.feels_like,
            },
            serviceUpdates: serviceUpdates

          });
        })
        .catch(error => {
          console.error("Weather data fetch error:", error);
          next(error);
        });
        
    })
    .catch(error => {
      console.error("User data fetch error:", error);
      next(error);
    });
};
