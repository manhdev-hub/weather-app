import React from "react";
import { centralMockData, forecast9DaysMock } from "../../mock/central-data";
import { CentralItem } from "./central-item";
import { AppContext } from "../../context/app-provider";

export const Central = () => {
  const { isOpenCentralInfo, setIsOpenCentralInfo } =
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
          <span>Undefined</span>
        </p>
        <p id="date">
          <span>Day, Day Month Year</span>
        </p>
      </div>

      <div
        id="temp-div"
        className={isOpenCentralInfo ? "weather-menu-show" : ""}
      >
        <div id="icon-temp">
          <p>Sunny</p>
          <i className="wi wi-day-cloudy" aria-hidden="true"></i>
        </div>
        <p id="current-temp-big">
          <span id="ctb">17</span>
          <span id="ctbicon">ºC</span>
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
          {centralMockData.map((central) => (
            <CentralItem
              key={central.id}
              title={central.title}
              id={central.id}
              data={central.data}
            />
          ))}
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
};
