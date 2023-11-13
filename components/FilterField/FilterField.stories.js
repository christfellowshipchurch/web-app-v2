import React, { useState } from 'react';

import FilterField from './FilterField';

const exportedObject = {
  component: FilterField,
  tags: ['autodocs'],
};

export default exportedObject;

export const MultiSelect = () => {
  const [values, setValues] = useState(['Lettuce', 'Onions']);

  const handleChange = ({ name, value }) => {
    if (values.includes(value)) {
      setValues(values.filter(v => v !== value));
    } else {
      setValues(values.concat(value));
    }
  };

  const handleClear = event => {
    event.preventDefault();
    setValues([]);
  };

  return (
    <FilterField
      filterType="multi-select"
      label="Toppings"
      name="toppings"
      options={[
        'Lettuce',
        'Mayo',
        'Tomato',
        'Onions',
        'Jalapeños',
        'Pickles',
        'Mushrooms',
        'Hot Sauce',
        'Ketchup',
        'Mustard',
      ]}
      values={values}
      onChange={handleChange}
      onClear={handleClear}
    />
  );
};

export const SingleSelect = () => {
  const [value, setValue] = useState([]);

  const handleChange = ({ name, value }) => {
    setValue([value]);
  };

  const handleClear = event => {
    event.preventDefault();
    setValue([]);
  };

  return (
    <FilterField
      filterType="select"
      label="Protein"
      name="protein"
      options={['Chicken', 'Beef', 'Pork', 'Vegan']}
      values={value}
      onChange={handleChange}
      onClear={handleClear}
    />
  );
};
