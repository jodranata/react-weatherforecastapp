import React from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  const { getWeather } = props;
  return (
    <div className="app-form-container">
      <form onSubmit={getWeather} className="app-form">
        <input
          type="text"
          name="city"
          placeholder="City.."
          required
          className="input-text"
          autoComplete="off"
        />
        {/* eslint-disable-next-line max-len */}
        <input
          type="text"
          name="country"
          placeholder="Country..."
          required
          className="input-text"
          autoComplete="off"
        />
        <button type="submit" className="submit-button">
          Get Weather
        </button>
      </form>
    </div>
  );
}
Form.propTypes = {
  getWeather: PropTypes.func.isRequired,
};
