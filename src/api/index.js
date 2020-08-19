const url = "https://covid19.mathdro.id/api";

export const fetchCard = async (country) => {
  let countryUrl = url;
  if (country) {
    countryUrl = url + "/countries/" + country;
  }

  return await fetch(countryUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let { confirmed, recovered, deaths, lastUpdate } = data;

      return { confirmed, recovered, deaths, lastUpdate };
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const fetchDaily = async () => {
  let newUrl = url + "/daily";

  return await fetch(newUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.map(({ totalConfirmed, deaths, reportDate }) => ({
        totalConfirmed,
        deaths: deaths.total,
        reportDate,
      }));
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const fetchCountries = async () => {
  let newUrl = url + "/countries";

  return await fetch(newUrl)
    .then((data) => {
      return data.json();
    })
    .then(({ countries }) => {
      return countries.map(({ name }) => name);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
