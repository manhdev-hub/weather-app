export const getAtmosphericConditionsData = (data) => {
  return (
    [
      {
        label: "Humidity",
        value: data?.main.humidity ? data.main.humidity + "%" : "No data",
        icon: <i className="wi wi-humidity" aria-hidden="true"></i>,
        id: "humidity",
      },
      {
        label: "Pressure",
        value: data?.main.pressure ? data.main.pressure + " hPa" : "No data",
        icon: <i className="wi wi-barometer" aria-hidden="true"></i>,
        id: "pressure",
      },
      {
        label: "Visibility",
        value: data?.visibility ? data.visibility + "m" : "No data",
        icon: <i className="wi wi-day-fog" aria-hidden="true"></i>,
        id: "visibility",
      },
    ]
  );
}

export const getSunriseAndSunsetData = (data) => {
  return (
    [
      {
        label: "Sunrise",
        value: data?.sys.sunrise ? new Date(data.sys.sunrise * 1000).toLocaleTimeString() : "No data",
        icon: <i className="wi wi-sunrise" aria-hidden="true"></i>,
        id: "sunrise",
      },
      {
        label: "Hours of light",
        value: data?.timezone ? data.timezone + "s" : "no data",
        icon: <i className="wi wi-time-4" aria-hidden="true"></i>,
        id: "totallight",
      },
      {
        label: "Sunset",
        value: data?.sys.sunset ? new Date(data.sys.sunset * 1000).toLocaleTimeString() : "No data",
        icon: <i className="wi wi-sunset" aria-hidden="true"></i>,
        id: "sunset",
      },
    ]
  );
}

export const getWindConditionsData = (data) => {
  return(
    [
      {
        label: "Feels Like",
        value: data?.main.feels_like ? data.main.feels_like + "ºC" : "No data",
        icon: <i className="wi wi-thermometer-exterior" aria-hidden="true"></i>,
        id: "chill",
      },
      {
        label: "Direction",
        value: data?.wind.deg ? data.wind.deg + "º" : "No data",
        icon: <i className="wi wi-refresh" aria-hidden="true"></i>,
        id: "direction",
      },
      {
        label: "Speed",
        value: data?.wind.speed ? data.wind.speed + " m/s" : "No data",
        icon: <i className="wi wi-strong-wind" aria-hidden="true"></i>,
        id: "speed",
      },
    ]
  );
}

export const forecast9DaysMock = [
  {
    icon: <i className="wi wi-day-sunny" aria-hidden="true"></i>,
    value: "NaN",
    unit: "NaN°",
    col: 1
  },
  {
    icon: <i className="wi wi-day-cloudy" aria-hidden="true"></i>,
    value: "NaN",
    unit: "NaN°",
    col: 2
  },
  {
    icon: <i className="wi wi-day-rain" aria-hidden="true"></i>,
    value: "NaN",
    unit: "NaN°",
    col: 3
  },
  {
    icon: <i className="wi wi-day-sunny" aria-hidden="true"></i>,
    value: "NaN",
    unit: "NaN°",
    col: 1
  },
  {
    icon: <i className="wi wi-day-cloudy" aria-hidden="true"></i>,
    value: "NaN",
    unit: "NaN°",
    col: 2
  },
  {
    icon: <i className="wi wi-day-rain" aria-hidden="true"></i>,
    value: "NaN",
    unit: "NaN°",
    col: 3
  },
  {
    icon: <i className="wi wi-day-sunny" aria-hidden="true"></i>,
    value: "NaN",
    unit: "NaN°",
    col: 1
  },
  {
    icon: <i className="wi wi-day-cloudy" aria-hidden="true"></i>,
    value: "NaN",
    unit: "NaN°",
    col: 2
  },
  {
    icon: <i className="wi wi-day-rain" aria-hidden="true"></i>,
    value: "NaN",
    unit: "NaN°",
    col: 3
  },
];
