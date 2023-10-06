import React, { useCallback, useEffect } from "react";
import { AppContext } from "../../context/app-provider";
import { SettingItem } from "./setting-item";
import { debounce } from "lodash";
import { API_URL, API_KEY, COUNTRIES_CODE } from "../../constants";
import { getCurrentWeather } from "../../api";
import { SpeechRecognitionComponent } from "../SpeedRecognition";

export const Settings = React.memo(() => {
  const {
    isOpenSetting,
    themeColor,
    currentTheme,
    setCurrentTheme,
    settings,
    setSettings,
    setCurrentWeather,
    setIsOpenSetting,
    transcript,
    setTranscript,
    listCites,
    setListCites,
  } = React.useContext(AppContext);
  const handlerChangeThemeColor = (index) => {
    setCurrentTheme(themeColor[index]);
  };
  const [isSearchFetching, setSearchFetching] = React.useState(false);

  const handlerChangeSettings = (keySetting) => {
    setSettings({
      ...settings,
      [keySetting]: !settings[keySetting],
    });
    return;
  };

  const handlerSearch = (e) => {
    console.log("a", e.target.value);
    setTranscript(e.target.value);
    setSearchFetching(true);
    if (e.target.value === "") {
      setListCites([]);
      setSearchFetching(false);
      return;
    }
    debounceOnchange(e.target.value);
  };

  const fetchSearch = (keyword) => {
    fetch(`${API_URL}/geo/1.0/direct?q=${keyword}&limit=5&appid=${API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListCites(data);
        setSearchFetching(false);
      });
  };

  const debounceOnchange = useCallback(
    debounce((keyword, time) => fetchSearch(keyword), 400),
    []
  );

  useEffect(() => {
    if (transcript === "") return;
    debounceOnchange(transcript);
  }, [transcript]);

  useEffect(() => {
    if (!isOpenSetting) {
      setTranscript("");
    }
  }, [isOpenSetting]);

  const selectLocation = ({ lat, lot }) => {
    if (lat && lot) getCurrentWeather(setCurrentWeather, lat, lot);
    setListCites([]);
    setSearchFetching(false);
    setIsOpenSetting(false);
    setTranscript("");
  };

  return (
    <div id="settings" className={isOpenSetting ? "show" : ""}>
      <p id="settings-info">
        <i className="fa fa-cog" aria-hidden="true"></i> Settings
      </p>

      <div
        className={
          isOpenSetting ? "search-container slideAnimation" : "search-container"
        }
      >
        {(listCites.length > 0 || isSearchFetching) && (
          <ul className="list-city">
            {isSearchFetching && (
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                Loading....
              </li>
            )}
            {listCites.map((city) => (
              <li
                key={city.lat}
                className={currentTheme}
                onClick={() => selectLocation({ lat: city.lat, lot: city.lon })}
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                {city.name}, {COUNTRIES_CODE[city.country]}
              </li>
            ))}
          </ul>
        )}

        <label>
          <input
            autoComplete="off"
            type="text"
            id="search"
            placeholder="Search City..."
            required={false}
            onChange={handlerSearch}
            value={transcript}
          />

          <i className="fa fa-search ic-search" aria-hidden="true"></i>
          <SpeechRecognitionComponent />
        </label>
      </div>
      <ul className="list-settings">
        <SettingItem
          title="Temperature Unit"
          iconLeft={
            <i className="c" aria-hidden="true">
              °C
            </i>
          }
          iconRight={
            <i className="f" aria-hidden="true">
              °F
            </i>
          }
          subInfo="Choose between ºC or ºF."
          defaultSetting={settings.temperatureUnit}
          onChangeSettings={() => handlerChangeSettings("temperatureUnit")}
        />
        <SettingItem
          title="Atmospheric Conditions"
          iconLeft={<i className="fa fa-check" aria-hidden="true"></i>}
          iconRight={<i className="fa fa-times" aria-hidden="true"></i>}
          subInfo="Humidity, pressure and visibility of the atmosphere."
          defaultSetting={settings.atmospheric}
          onChangeSettings={() => handlerChangeSettings("atmospheric")}
        />
        <SettingItem
          title="Sunrise/Sunset"
          iconLeft={<i className="fa fa-check" aria-hidden="true"></i>}
          iconRight={<i className="fa fa-times" aria-hidden="true"></i>}
          subInfo="Sunset/Sunrise hours and total hours of light."
          defaultSetting={settings.interval}
          onChangeSettings={() => handlerChangeSettings("interval")}
        />
        <SettingItem
          title="Wind Conditions"
          iconLeft={<i className="fa fa-check" aria-hidden="true"></i>}
          iconRight={<i className="fa fa-times" aria-hidden="true"></i>}
          subInfo="Chill, direction and the speed of the wind."
          defaultSetting={settings.wind}
          onChangeSettings={() => handlerChangeSettings("wind")}
        />
        <li className={isOpenSetting ? "slideAnimation" : ""}>
          <div className="text">
            <p>Choose a theme</p>
            <div className="row">
              {themeColor.map((item, index) => (
                <span
                  key={item}
                  onClick={() => handlerChangeThemeColor(index)}
                  className={item === currentTheme ? `current ${item}` : item}
                ></span>
              ))}
            </div>
          </div>
          <div className="sub-info">
            Select the desired theme. Press the "Save" button to update the
            theme!
          </div>
        </li>
      </ul>

      <button type="button" id="save-button" placeholder="Update">
        Save
      </button>
    </div>
  );
});
