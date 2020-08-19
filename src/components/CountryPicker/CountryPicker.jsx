import React, { useState } from "react";

import { fetchCountries } from "../../api/index.js";
import { useEffect } from "react";

function CountryPicker(props) {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setCountryData(await fetchCountries());
    };
    getData();
  }, []);

  const optionFunction = countryData.map((country) => {
    return (
      <option value={country} key={country}>
        {country}
      </option>
    );
  });

  const style = {
    color: "grey",
    fontWeight: "bold",
  };

  return (
    <form style={{ textAlign: "center" }}>
      <label style={style}>Covid-19 Daily Stats</label>
      <select
        onChange={(e) => props.handleChange(e.target.value)}
        className="custom-select mr-sm-2"
      >
        <option>Daily stats...</option>
        {optionFunction}
      </select>
    </form>
  );
}

export default CountryPicker;
