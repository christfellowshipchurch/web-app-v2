import React, { useState } from 'react';

import FilterField from './FilterField';

export default {
  title: 'components/FilterField',
  component: FilterField,
};

export const MultiSelect = () => {
  const [values, setValues] = useState(['Lettuce', 'Onions']);

  const handleChange = ({ name, value }) => {
    if (values.includes(value)) {
      setValues(values.filter(v => v !== value));
    } else {
      setValues(values.concat(value));
    }
  };

  return (
    <FilterField
      filterType="multi-select"
      label="Toppings"
      name="Toppings"
      options={['Lettuce', 'Mayo', 'Tomato', 'Onions', 'Jalapeños', 'Pickles']}
      values={values}
      onChange={handleChange}
    />
  );
};

export const SingleSelect = () => {
  const [value, setValue] = useState([]);

  const handleChange = ({ name, value }) => {
    setValue([value]);
  };

  return (
    <FilterField
      filterType="select"
      label="Protein"
      name="Protein"
      options={['Chicken', 'Beef', 'Pork', 'Vegan']}
      values={value}
      onChange={handleChange}
    />
  );
};
