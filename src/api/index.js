import {API_KEY, API_URL} from '../constants';

export const getCoordinates = (setData ,city = "London", limit = 1) => {
    fetch(`${API_URL}/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_KEY}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setData(data)
    });
}


export const getCurrentWeather = (setData ,lat, lon) => {
  fetch(`${API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    setData(data);
  });
}
