import React from "react";
import { AppContext } from "../../context/app-provider";
import { SettingItem } from "./setting-item";

export const Settings = () => {
  const {
    isOpenSetting,
    themeColor,
    currentTheme,
    setCurrentTheme,
    settings,
    setSettings,
  } = React.useContext(AppContext);
  const handlerChangeThemeColor = (index) => {
    setCurrentTheme(themeColor[index]);
  };

  const handlerChangeSettings = (keySetting) => {
    setSettings({
      ...settings,
      [keySetting]: !settings[keySetting]
    })
  }

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
        <label>
          <input
            autoComplete="off"
            type="text"
            id="search"
            placeholder="Search City..."
            required={false}
          />
          <i className="fa fa-search" aria-hidden="true"></i>
          <button type="button" id="update-button" placeholder="Update">
            Update
          </button>
        </label>
      </div>
      <ul>
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
};
