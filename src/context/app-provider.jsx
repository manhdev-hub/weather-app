import React, { useState } from "react";

export const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const [isOpenCentralInfo, setIsOpenCentralInfo] = useState(false);
  const themeColor = ["green", "turqoise", "blue", "purple"];
  const [currentTheme, setCurrentTheme] = useState(themeColor[0]);
  const [settings, setSettings] = useState({
    temperatureUnit: true,
    atmospheric: true,
    interval: true,
    wind: true,
  })
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
        setSettings
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
