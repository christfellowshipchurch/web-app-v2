import { useState } from 'react';

const useForm = callback => {
  const [values, setValues] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    callback && callback();
  }

  function handleChange(event) {
    event.persist();
    const { name, value, type } = event.target;

    // If we're dealing with a `<input type="checkbox">`, then we
    // need to pass along the `checked` value instead of `value`.
    if (type === 'checkbox') {
      setValues(values => ({ ...values, [name]: event.target.checked }));
    } else {
      setValues(values => ({ ...values, [name]: value }));
    }
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
