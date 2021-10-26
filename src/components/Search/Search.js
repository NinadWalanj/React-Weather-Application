import React, { useState, useEffect } from "react";
import Axios from "axios";
import DateBuilder from "../dateBuilder";
import { Container } from "react-bootstrap";
import "./Search.css";

const Search = () => {
  //hooks
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState({});

  //search logic
  function search(event) {
    if (event.key === "Enter") {
      var response = Axios.get(
        `${process.env.REACT_APP_API_URL}?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => {
          setWeather(response.data);
          setCityName("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <Container>
      <div className="search-main">
        {/*search box*/}
        <div className="search-box">
          <input
            type="text"
            placeholder="City Name"
            className="search-bar"
            onChange={(event) => {
              setCityName(event.target.value);
            }}
            value={cityName}
            onKeyPress={search}
          />
        </div>

        {/*location-box and weather-box*/}
        {typeof weather.main === "undefined" ? (
          ""
        ) : (
          <div className="weather-main">
            <div className="location">
              <h2 className="location-heading">
                {weather.name},{weather.sys.country}
              </h2>
              <p className="location-para">{DateBuilder(new Date())}</p>
            </div>

            <div className="temp">
              <div className="temp-degree-div">
                <p className="temp-degree">{Math.round(weather.main.temp)}°c</p>
              </div>
              <p className="tamp-type-main">{weather.weather[0].main}</p>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Search;
