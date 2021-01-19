import React from 'react';
import PropTypes from 'prop-types';

import { slugify } from 'utils';
import { Box, CardGrid, Card, Loader } from 'ui-kit';
import { CustomLink } from 'components';

const CardwithBackground = (props = {}) => (
  <Card
    as="a"
    onClick={props.handleOnClick}
    display="flex"
    alignItems={'center'}
    justifyContent={'center'}
    p={'l'}
    flexDirection={'column'}
    backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.33), rgba(71, 71, 71, 0.85)),url(${props.coverImage})`}
    backgroundSize={'cover'}
    color={'white'}
    maxWidth={'300px'}
  >
    <Box as={'h1'} display={'flex'}>
      {props.title}
    </Box>
    <Box as={'p'} display={'flex'}>
      {props.summary}
    </Box>
  </Card>
);

function CardList(props = {}) {
  if (props.loading) return <Loader text="Loading" />;

  const noData = props.data.length === 0;
  if (noData)
    return <Box as="p">You do not have any items to display right now.</Box>;

  return (
    <CardGrid>
      {props.data.map(item => (
        <CustomLink
          as="a"
          key={item.id}
          onClick={item.handleClick}
          href={`/community/${slugify(item.title)}`}
          Component={props.component}
          coverImage={item?.coverImage?.sources[0]?.uri}
          title={item.title}
          summary={item.summary}
        />
      ))}
    </CardGrid>
  );
}

CardList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

CardList.defaultProps = { component: CardwithBackground };

export default CardList;
