import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PropTypes from "prop-types";
import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiDayShowers,
  WiDayRain,
  WiDayThunderstorm,
  WiDaySnow,
  WiDayHaze,
  WiNightCloudy,
  WiNightClear,
  WiNightRain,
  WiNightThunderstorm,
  WiNightShowers,
  WiNightSnow,
  WiWindy,
  WiThermometer,
  WiHumidity,
  WiStrongWind,
  WiThermometerExterior,
} from "react-icons/wi";

const WeatherCard = ({ weatherData }) => {
  // Destructure the weatherData object
  const { name, weather } = weatherData;
  const { main } = weatherData.weather[0];
  const iconCode = weather[0].icon;
  const isDay = iconCode.endsWith("d");

  // Function to get the appropriate weather icon based on the icon code
  const getWeatherIcon = (iconCode) => {
    const weatherStyles = {
      fontSize: "80px",
    };
    const code = iconCode.slice(0, 2);
    switch (code) {
      // Return the appropriate weather icon based on the code and whether it is day or night
      case "01":
        return isDay ? (
          <WiDaySunny style={weatherStyles} />
        ) : (
          <WiNightClear style={weatherStyles} />
        );
      case "02":
        return isDay ? (
          <WiDayCloudy style={weatherStyles} />
        ) : (
          <WiNightCloudy style={weatherStyles} />
        );
      case "03":
        return isDay ? (
          <WiCloud style={weatherStyles} />
        ) : (
          <WiCloud style={weatherStyles} />
        );
      case "04":
        return isDay ? (
          <WiCloudy style={weatherStyles} />
        ) : (
          <WiCloudy style={weatherStyles} />
        );
      case "09":
        return isDay ? (
          <WiDayShowers style={weatherStyles} />
        ) : (
          <WiNightShowers style={weatherStyles} />
        );
      case "10":
        return isDay ? (
          <WiDayRain style={weatherStyles} />
        ) : (
          <WiNightRain style={weatherStyles} />
        );
      case "11":
        return isDay ? (
          <WiDayThunderstorm style={weatherStyles} />
        ) : (
          <WiNightThunderstorm style={weatherStyles} />
        );
      case "13":
        return isDay ? (
          <WiDaySnow style={weatherStyles} />
        ) : (
          <WiNightSnow style={weatherStyles} />
        );
      case "50":
        return isDay ? (
          <WiDayHaze style={weatherStyles} />
        ) : (
          <WiWindy style={weatherStyles} />
        );
      default:
        return null;
    }
  };

  return (
    <Card
      sx={{ minWidth: 275, borderRadius: "12px" }}
      style={{ backgroundColor: "rgba(254, 255, 250, 0.1)" }}
    >
      <CardContent>
        <Typography variant="h5" style={{ color: "#f9f9f9", fontSize: "52px" }}>
          {getWeatherIcon(iconCode)}
          {(weatherData.main.temp - 273.15).toFixed(0)}°c
          {/* Converting Fahrenheit to celsius and removing the float values */}
        </Typography>
        <Typography
          variant="body1"
          style={{ color: "#f9f9f9", fontSize: "20px" }}
        >
          {main}
        </Typography>
        <Typography
          variant="h5"
          style={{ color: "#f9f9f9", fontSize: "14px", marginTop: "10px" }}
        >
          <LocationOnIcon fontSize="medium" sx={{ verticalAlign: "middle" }} />{" "}
          {name}, {weatherData.sys.country}
        </Typography>
        {/* Additional weather information */}
          <div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={6}>
                <Grid container direction="column" spacing={2}>
                  <Grid item marginTop="20px">
                    <Typography
                      variant="h5"
                      style={{ color: "#f9f9f9", fontSize: "14px" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <WiThermometer
                          fontSize="28px"
                          style={{ marginTop: "10px" }}
                        />
                        Feels like{" "}
                        {(weatherData.main.feels_like - 273.15).toFixed(0)}°c
                        {/* Converting Fahrenheit to celsius and removing the float values */}
                      </div>
                    </Typography>
                  </Grid>
                  <Grid item marginTop="-10px">
                    <Typography
                      variant="h5"
                      style={{ color: "#f9f9f9", fontSize: "14px" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <WiThermometer
                          fontSize="28px"
                          style={{ marginTop: "10px" }}
                        />
                        Min Temp{" "}
                        {(weatherData.main.temp_min - 273.15).toFixed(0)}°c
                        {/* Converting Fahrenheit to celsius and removing the float values */}
                      </div>
                    </Typography>
                  </Grid>
                  <Grid item marginTop="-10px">
                    <Typography
                      variant="h5"
                      style={{ color: "#f9f9f9", fontSize: "14px" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <WiThermometer
                          fontSize="28px"
                          style={{ marginTop: "10px" }}
                        />
                        Max Temp{" "}
                        {(weatherData.main.temp_max - 273.15).toFixed(0)}°c
                        {/* Converting Fahrenheit to celsius and removing the float values */}
                      </div>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Typography
                      variant="h5"
                      style={{
                        color: "#f9f9f9",
                        fontSize: "14px",
                        marginTop: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <WiHumidity
                          fontSize="26px"
                          style={{ marginTop: "5px" }}
                        />
                        Humidity {weatherData.main.humidity}%
                        {/* Converting Fahrenheit to celsius and removing the float values */}
                      </div>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h5"
                      style={{ color: "#f9f9f9", fontSize: "14px" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <WiStrongWind
                          fontSize="26px"
                          style={{ marginTop: "5px" }}
                        />
                        Wind {weatherData.wind.speed}m/s
                        {/* Converting Fahrenheit to celsius and removing the float values */}
                      </div>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      fontSize="14px"
                      style={{
                        color: "white",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <WiThermometerExterior fontSize="24px" />
                        Pressure {weatherData.main.pressure} hPa
                      </div>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
      </CardContent>
    </Card>
  );
};

WeatherCard.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      feels_like: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default WeatherCard;

// This code defines a functional component called WeatherCard that takes in a weatherData object as a prop. It renders a card displaying weather information based on the weatherData object.

// The component first destructures the weatherData object to extract the necessary information such as the city name, weather conditions, and icon code. It also determines whether it is day or night based on the icon code.

// The getWeatherIcon function returns the appropriate weather icon based on the icon code and whether it is day or night.

// The component then renders a Card component from the Material-UI library. Inside the card, it displays the weather icon, temperature, and weather condition. It also shows the location using the LocationOnIcon component.

// Below the main weather information, there is a section displaying additional weather information such as feels like temperature, minimum temperature, maximum temperature, humidity, wind speed, and pressure.

// The component uses various icons from the react-icons/wi library to display the weather icons and additional weather information.

// Finally, the component defines the prop types for the weatherData prop and exports the WeatherCard component.
