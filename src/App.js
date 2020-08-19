import ReactGA from "react-ga";
import React, { Component } from "react";
import Cards from "./components/Cards/Cards.jsx";
import { fetchCard } from "./api/index.js";
import CountryPicker from "./components/CountryPicker/CountryPicker.jsx";
import Chart from "./components/Chart/Chart.jsx";
ReactGA.initialize("UA-175814960-2");

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardData: {},
      selectCountries: [],
      country: "",
    };
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  async componentDidMount() {
    let data = await fetchCard();

    this.setState({
      cardData: data,
    });
  }

  handleChange = async (country) => {
    let {
      confirmed: confirmed,
      deaths,
      lastUpdate,
      recovered,
    } = await fetchCard(country);

    this.setState({
      country: country,
      selectCountries: { confirmed: confirmed, deaths, lastUpdate, recovered },
    });
  };

  style = {
    color: "white",
    textShadow: "2px 2px 4px #000000",
    fontWeight: "bold",
  };

  render() {
    return (
      <div className="container">
        <h1 className="title mt-5" style={this.style}>
          Covid-19 Tracker
        </h1>
        <Cards data={this.state.cardData} />
        <CountryPicker handleChange={this.handleChange} />
        <Chart
          country={this.state.country}
          selectCountries={this.state.selectCountries}
        />
      </div>
    );
  }
}
export default App;
