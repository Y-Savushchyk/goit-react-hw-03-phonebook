import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({ value, onChange }) => (
  <label className={css.filter}>
    Find contacts by name
    <input
      className={css.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};