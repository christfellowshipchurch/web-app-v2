import React from 'react';
import PropTypes from 'prop-types';

import { useDefinedValueList } from 'hooks';
import { NotFound } from 'components';
import { Loader } from 'ui-kit';

function DefinedValueListProvider({ Component, options, ...props }) {
  const { loading, error, values } = useDefinedValueList(options);

  if (loading) {
    return <Loader mt="xxl" mb="xxl" centered text="Loading" />;
  }

  if (!values) {
    return <NotFound layout={false} />;
  }

  return <Component data={values} loading={loading} error={error} {...props} />;
}

DefinedValueListProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default DefinedValueListProvider;
