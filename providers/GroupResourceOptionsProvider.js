import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useGroupResourceOptions } from 'hooks';
import { Attachment } from 'stream-chat-react';

function GroupResourceOptionsProvider({ Component, options, ...props }) {
  const { loading, error, groupResourceOptions, fetchMore } =
    useGroupResourceOptions(options);
  const endCursor = groupResourceOptions?.pageInfo?.endCursor;
  const totalCount = groupResourceOptions?.totalCount;
  const data = groupResourceOptions?.edges;

  useEffect(() => {
    if (!loading && !error && data?.length < totalCount) {
      try {
        fetchMore?.({
          variables: {
            input: {
              first: data.length || 0,
              after: endCursor,
            },
          },
          updateQuery: (prevResult, { fetchMoreResult }) => {
            return {
              ...fetchMoreResult,
              groupResourceOptions: {
                ...fetchMoreResult.groupResourceOptions,
                edges: [
                  ...prevResult.groupResourceOptions.edges,
                  ...fetchMoreResult.groupResourceOptions.edges,
                ],
              },
            };
          },
        });
      } catch (e) {
        console.log(
          e,
          'fetchMore throws an error on hot reload. See https://github.com/apollographql/apollo-client/issues/6816'
        );
      }
    }
  }, [loading, error, data, endCursor, fetchMore, totalCount]);

  return (
    <Component
      data={data}
      totalCount={totalCount}
      loading={loading}
      error={error}
      {...props}
    />
  );
}

GroupResourceOptionsProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.object,
};

export default GroupResourceOptionsProvider;
