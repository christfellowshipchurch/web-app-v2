import { useState } from 'react';

const useForm = callback => {
  const [values, setValues] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    callback && callback();
  }

  function handleChange(event) {
    event.persist();
    const { name, value } = event.target;
    setValues(values => ({ ...values, [name]: value }));
  }

  function reset() {
    setValues({});
  }

  return {
    handleChange,
    handleSubmit,
    values,
    reset,
    setValues,
  };
};

export default useForm;
