import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Icon } from 'ui-kit';

function InfoCardList(props) {
  return (
    <Box
      maxWidth={1000}
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      my="xl"
      mx="auto"
    >
      <Box as="h1" mb="base">
        {props?.title}
      </Box>
      <Box as="p" mx="auto" maxWidth={800} mb="l">
        {props?.subtitle}
      </Box>
      <Box display="flex" flexDirection={{ _: 'column', lg: 'row' }}>
        {props?.cards?.map(card => (
          <Box
            bg={props?.cardColor}
            my="s"
            mx="base"
            borderRadius="l"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            color="white"
            p="l"
            width={300}
          >
            <Icon size={28} name={card?.icon} />
            <Box as="h4" my="s">
              {card?.title}
            </Box>
            <Box as="p">{card?.description}</Box>
          </Box>
        ))}
      </Box>
      {props?.button && (
        <Button
          as="a"
          id={props?.button?.id}
          href={props?.button?.url}
          onClick={props?.button?.onClick}
          my="l"
          variant="secondary"
        >
          {props?.button?.title}
        </Button>
      )}
    </Box>
  );
}

InfoCardList.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cardColor: PropTypes.string,
  cards: PropTypes.array,
  button: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

InfoCardList.defaultProps = {
  title: '',
  subtitle: '',
  cardColor: 'primary',
  cards: [
    {
      title: 'Step 1',
      description: '',
      icon: 'pen',
    },
    {
      title: 'Step 2',
      description: '',
      icon: 'bell',
    },
    {
      title: 'Step 3',
      description: '',
      icon: 'bible',
    },
  ],
  button: {
    title: 'Button',
    onClick: () => {},
  },
};

export default InfoCardList;
