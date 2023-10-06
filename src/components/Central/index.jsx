import React from "react";
import {
  forecast9DaysMock,
  getAtmosphericConditionsData,
  getWindConditionsData,
  getSunriseAndSunsetData,
} from "../../mock/central-data";
import { CentralItem } from "./central-item";
import { AppContext } from "../../context/app-provider";
import { convertTemperature, formatDate } from "../../utils";
import { WEATHER_ID } from "../../constants";

export const Central = React.memo(() => {
  const { isOpenCentralInfo, setIsOpenCentralInfo, currentWeather, settings } =
    React.useContext(AppContext);
  const handlerToggleCentralInfo = () => {
    setIsOpenCentralInfo(!isOpenCentralInfo);
  };
  const currentSlideX = [0, -358, -718];
  const [indexSlide, setIndexSlide] = React.useState(0);

  const handlerIncreaseSlide = (e) => {
    e.stopPropagation();
    if (indexSlide >= 2) {
      return;
    }
    setIndexSlide(indexSlide + 1);
  };

  const handlerReduceSlide = (e) => {
    e.stopPropagation();
    if (indexSlide === 0) {
      return;
    }
    setIndexSlide(indexSlide - 1);
  };

  return (
    <div id="central">
      <div id="top-menu-info">
        <p id="location">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <span>{currentWeather?.name}</span>
        </p>
        <p id="date">
          <span>{formatDate(currentWeather?.dt)}</span>
        </p>
      </div>

      <div
        id="temp-div"
        className={isOpenCentralInfo ? "weather-menu-show" : ""}
      >
        <div id="icon-temp">
          <p>{currentWeather?.weather[0].main}</p>
          <i
            className={`wi ${WEATHER_ID[currentWeather?.weather[0].icon]}`}
            aria-hidden="true"
          ></i>
        </div>
        <p id="current-temp-big">
          <span id="ctb">
            {settings.temperatureUnit
              ? Math.round(currentWeather?.main.temp)
              : Math.round(convertTemperature(currentWeather?.main.temp))}
          </span>
          <span id="ctbicon">{settings.temperatureUnit ? "ºC" : "ºF"}</span>
        </p>
      </div>

      <div
        id="weather-menu"
        className={isOpenCentralInfo ? "show" : ""}
        onClick={handlerToggleCentralInfo}
      >
        <span href="#" id="weather-menu-btn">
          <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </span>

        <ul>
          {settings.atmospheric && (
            <CentralItem
              title="Atmospheric Conditions"
              id="atmli"
              data={getAtmosphericConditionsData(currentWeather)}
            />
          )}
          {settings.interval && (
            <CentralItem
              title="Sunrise/Sunset"
              id="sunli"
              data={getSunriseAndSunsetData(currentWeather)}
            />
          )}

          {settings.wind && (
            <CentralItem
              title="Wind Conditions"
              id="windli"
              data={getWindConditionsData(currentWeather, settings)}
            />
          )}
          <li id="forecastli">
            <p className="li_title">9 Days Forecast</p>
            <span className="day_left" onClick={handlerReduceSlide}>
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </span>
            <span className="day_right" onClick={handlerIncreaseSlide}>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </span>
            <div
              className="li_row"
              style={{
                transform: `translateX(${currentSlideX[indexSlide]}px)`,
              }}
            >
              {forecast9DaysMock.map((data, index) => (
                <div className={`col-${data.col} day10item`} key={index}>
                  {data.icon}
                  <span>
                    {data.value} <br /> <i>{data.unit}</i>
                  </span>
                </div>
              ))}
            </div>

            <div id="dotmenu">
              {Array.from(Array(3).keys()).map((item) => (
                <span
                  key={item}
                  className={item === indexSlide ? "currentday" : ""}
                ></span>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
});
