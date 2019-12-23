import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const apiKey = 'd9c07d4512624f3440e47cbed4c175b4';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
    };
  }

  getWeather = async e => {
    e.preventDefault();
    const cityInput = e.target.elements.city.value;
    const city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1);
    const country = e.target.elements.country.value.toLowerCase();
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    /* eslint-disable max-len */
    const api = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`;
    /* eslint-enable max-len */
    const fetchURL = await fetch(api);
    const data = await fetchURL.json();
    console.log(data);
    /* Change state with the data from API  */
    if (!data.message) {
      const kelvin = data.main.temp;
      const celc = (kelvin - 273.15).toFixed(2);
      const fahr = ((kelvin - 273.15) * (9 / 5) + 32).toFixed(2);
      this.setState({
        temperature: `${celc} °C / ${fahr} °F`,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    } else {
      /* set state to undefined, if the API doesn't have any data on the inputted location(form) */
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: data.message,
      });
    }
  };

  render() {
    const { temperature, city, country, humidity, description, error } = this.state;
    return (
      <div className="app-container">
        <Title />
        {/* pass getWeather function as */}
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={temperature}
          city={city}
          country={country}
          humidity={humidity}
          description={description}
          error={error}
        />
      </div>
    );
  }
}

export default App;
