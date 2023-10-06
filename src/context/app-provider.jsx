import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../constants";
import { getCoordinates, getCurrentWeather } from "../api";


export const AppContext = React.createContext(null);

const AppProvider = React.memo(({ children }) => {
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const [isOpenCentralInfo, setIsOpenCentralInfo] = useState(false);
  const themeColor = ["green", "turqoise", "blue", "purple"];
  const [currentTheme, setCurrentTheme] = useState(themeColor[0]);
  const [listCites, setListCites] = useState([]);
  const [cityName, setCityName] = useState('');
  const [transcript, setTranscript] = useState('');
  const [settings, setSettings] = useState({
    temperatureUnit: true,
    atmospheric: true,
    interval: true,
    wind: true,
  });

  const [currentWeather, setCurrentWeather] = useState();
  const [coordinates, SetCoordinates] = useState();

  useEffect(() => {
    if (coordinates && coordinates.length > 0) {
      getCurrentWeather(setCurrentWeather, coordinates[0].lat, coordinates[0].lon);
    }
  }, [coordinates]);

  useEffect(() => {
    getCoordinates(SetCoordinates);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isOpenSetting,
        setIsOpenSetting,
        isOpenCentralInfo,
        setIsOpenCentralInfo,
        themeColor,
        currentTheme,
        setCurrentTheme,
        settings,
        setSettings,
        currentWeather,
        cityName,
        setCityName,
        SetCoordinates,
        setCurrentWeather,
        transcript,
        setTranscript,
        listCites,
        setListCites
      }}
    >
      {children}
    </AppContext.Provider>
  );
});

export default AppProvider;
