import React from 'react';
import PropTypes from 'prop-types';

export default function Weather(props) {
  const { temperature, city, country, humidity, description, error } = props;
  return (
    <div className="app-data">
      {city && country && <p>{`Location: ${city}, ${country}`}</p>}
      {temperature && <p>{`Temperature: ${temperature}`}</p>}
      {humidity && <p>{`Humidity: ${humidity}`}</p>}
      {description && <p>{`Weather: ${description}`}</p>}
      {error && <p className="error">{`ERROR: ${error.toUpperCase()}`}</p>}
    </div>
  );
}

Weather.defaultProps = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: '',
};

Weather.propTypes = {
  temperature: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  humidity: PropTypes.number,
  description: PropTypes.string,
  error: PropTypes.string,
};
