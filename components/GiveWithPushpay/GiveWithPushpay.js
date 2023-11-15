import React from 'react';
import Styled from './GiveWithPushpay.styles';
import { HtmlRenderer, Select, Button, Box, Icon } from 'ui-kit';
import { useForm } from 'hooks';
import PropTypes from 'prop-types';
import { useCurrentBreakpoint } from 'hooks';

const campuses = [
  'Belle Glade',
  'Boca Raton',
  'Boynton Beach',
  'CF Everywhere (Online)',
  'Downtown West Palm Beach',
  'En Español',
  'Jupiter',
  'Okeechobee',
  'Palm Beach Gardens',
  'Port St. Lucie',
  'Royal Palm Beach',
  'Stuart',
  'Trinity',
  'Vero Beach',
  'Westlake',
];

function GiveWithPushpay(props = {}) {
  const { values, setValues, handleChange } = useForm();
  const currentBreakpoint = useCurrentBreakpoint();

  const handleAmount = event => {
    const { name, value } = event.target;
    const { data } = event.nativeEvent;

    (!isNaN(data) || data === '.' || data === ',') &&
      setValues(values => ({
        ...values,
        [name]: value.slice(1),
      }));
  };

  const handleRemoveZeros = event => {
    values.amount === undefined &&
      setValues(values => ({
        ...values,
        [event.target.name]: '',
      }));
  };

  return (
    <Styled backgroundImage={props?.backgroundImage}>
      {props?.title && (
        <Box as="h1" color="secondary">
          {props?.title}
        </Box>
      )}
      {props?.subtitle && !currentBreakpoint.isSmall && (
        <Box as="h4" color="secondary" fontWeight="normal">
          {props?.subtitle}
        </Box>
      )}
      <Box
        my="l"
        bg="none"
        py={{ _: 'xxs', md: 's' }}
        px={{ _: 's', md: 'l' }}
        borderRadius="base"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          as="form"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box as="h2" color="secondary">
            Give Online
          </Box>
          <Select
            mt="s"
            width="330px"
            borderColor="primary"
            onChange={handleChange}
            name="campus"
          >
            <Select.Option value={null}>Select a Campus</Select.Option>
            {campuses.map(name => {
              return <Select.Option>{name}</Select.Option>;
            })}
          </Select>
          <Box display="flex" flexDirection="column">
            <Styled.Input
              value={'$' + (values.amount ?? '0.00')}
              onChange={handleAmount}
              onClick={handleRemoveZeros}
              name="amount"
              autocomplete="off"
            />

            <Box
              mb="base"
              mt="-5px"
              color="neutrals.500"
              fontSize="30px"
              fontWeight="bold"
            >
              Your gift amount
            </Box>
          </Box>
          <Button
            as="a"
            target="blank"
            href={props?.buttonLink + values.campus + '&a=' + values.amount}
            bg={props?.buttonColor}
            px="xl"
          >
            {' '}
            GIVE WITH <Icon name="pushPay" /> PUSHPAY
          </Button>
          c
        </Box>
      </Box>
      {props?.showOtherGiveOptions &&
        (!currentBreakpoint.isSmall ? (
          //web view only
          <Styled.Rhombus>
            <Styled.GiveByMail>
              <Box fontWeight="bold">GIVE BY MAIL</Box>
              <HtmlRenderer
                py="xl"
                htmlContent='Christ Fellowship Church Contributions<br/>5343 Northlake Blvd. Palm Beach Gardens, FL 33418<br/> <i style="font-size:13px; " >*Note: Please designate "Chirst Birthday Offering" on the memo line.</i>'
              />
            </Styled.GiveByMail>
          </Styled.Rhombus>
        ) : (
          //mobile view only
          <Box>
            <Box>
              <Box fontWeight="bold" color="primary" fontSize="l">
                Give In Person
              </Box>
              <HtmlRenderer py="xl" htmlContent={props?.giveInPersonDesc} />
            </Box>
            <Box>
              <Box fontWeight="bold" color="primary" mt="base" fontSize="l">
                Give By Mail
              </Box>
              <HtmlRenderer py="xl" htmlContent={props?.giveByMailDesc} />
            </Box>
          </Box>
        ))}
    </Styled>
  );
}

GiveWithPushpay.propTypes = {
  /**
   * optional title section
   */
  title: PropTypes.string,
  /**
   * optional subtitle section
   */
  subtitle: PropTypes.string,
  /**
   * optional to display the rhombus
   */
  showOtherGiveOptions: PropTypes.bool,
  /**
   * optional to change color of the button
   */
  buttonColor: PropTypes.string,
  /**
   * optional to set a background image
   */
  backgroundImage: PropTypes.string,
  /**
   * optional to add a Give By Mail description
   */
  giveByMailDesc: PropTypes.string,
  /**
   * optional to add a Give In Person description
   */
  giveInPersonDesc: PropTypes.string,
  /**
   * make sure to add a link to the pushPay button
   */
  buttonLink: PropTypes.string.isRequired,
};

GiveWithPushpay.defaultProps = {
  giveByMailDesc:
    '<span style="font-size:20px; color:black">Christ Fellowship Church Contributions<br/>5343 Northlake Blvd.<br/> Palm Beach Gardens, FL 33418<br/> <i style="font-size:18px;" >*Note: "Chirst Birthday Offering" on memo line.</i></span>',
  giveInPersonDesc:
    '<span style="font-size:20px; color:black">At your campus location.</span>',
  buttonLink: 'https://pushpay.com/g/cfchristbirthdayoffering?',
};

export default GiveWithPushpay;
