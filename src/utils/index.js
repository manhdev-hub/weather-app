export const formatDate = (time) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(time * 1000);
  if (!time) return "Day, Day Month Year";
  return date.toLocaleDateString("en-US", options);
};

export const convertTemperature = (celsius) => {
  if(!celsius) return;
  celsius = parseFloat(celsius);
  return (celsius-32)/1.8
}
