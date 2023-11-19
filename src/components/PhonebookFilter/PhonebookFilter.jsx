import { useState } from 'react';
import PropTypes from 'prop-types';

export const Filter = () => {
  const [value, setValue] = useState('');

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input onChange={handleInputChange} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
