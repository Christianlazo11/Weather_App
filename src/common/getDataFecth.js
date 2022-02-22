const key = "9970337bdfe9428c972202338221402";

const getDataFecth = (city) => {
  const res = fetch(
    `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
  );

  return res.then((response) => response.json());
};

export default getDataFecth;
