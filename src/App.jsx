import { useCallback, useState } from "react";
import WeatherCard from "./Components/Weather";
import "./App.css";

function App() {
  // State variables
  const [data, setData] = useState({}); // Stores the weather data
  const [city, setCity] = useState(""); // Stores the city name entered by the user
  const [loading, setLoading] = useState(false); // Indicates whether data is being loaded

  // Event handler for city input change
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // Event handler for Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  // Event handler for button click
  const handleButtonClick = () => {
    fetchData();
  };

  // Fetches weather data from the API
  const fetchData = useCallback(async () => {
    if (city !== "") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c39aa995c4c9e09a5c2301893c993c2f`;

      // Fetch weather data from the API
      await fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setData(result); // Update the weather data state
          setLoading(false); // Set loading state to false
          console.log(result); // Log the result to the console
        });
    }
  }, [city]);

  return (
    <div className="App">
      <h1>Today&apos;s Weather Report</h1>
      <div className="input-with-btn">
        {/* City input */}
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter city name"
          style={{
            height: "40px",
            margin: "20px",
            width: "300px",
            flexGrow: "2",
          }}
        />
        {/* Button to fetch weather */}
        <button type="submit" onClick={handleButtonClick}>
          Get weather
        </button>
      </div>
      {/* Display loading message or weather card */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        typeof data.main != "undefined" && <WeatherCard weatherData={data} />
      )}
    </div>
  );
}

export default App;
