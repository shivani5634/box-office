import React from 'react';

const CustomRadio = () => {
  return (
    <label htmlFor="shows-search">
      Shows
      <input
        id="search-shows"
        type="radio"
        value="shows"
        checked={isShowSearch}
        onChange={onRadioChange}
      />
    </label>
  );
};

export default CustomRadio;
