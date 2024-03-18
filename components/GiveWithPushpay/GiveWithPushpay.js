import React from 'react';
import Styled from './GiveWithPushpay.styles';
import { HtmlRenderer, Select, Button, Box, Icon } from 'ui-kit';
import { useForm } from 'hooks';
import PropTypes from 'prop-types';
import { useCurrentBreakpoint } from 'hooks';

const giftType = ['One Time', 'Recurring'];

const givingType = [
  'Tithes & Offerings',
  'Heart for the House',
  'Kingdom Builders',
  'Christ Birthday Offering',
  'Missions',
];

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
      <Box
        bg="none"
        py={{ _: 'xxs' }}
        px={{ _: 's', md: 'l' }}
        borderRadius="base"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {props?.title && (
          <Box as="h1" color={props?.titleColor}>
            {props?.title}
          </Box>
        )}
        {props?.subtitle && !currentBreakpoint.isSmall && (
          <Box as="h4" color={props?.subtitleColor} fontWeight="normal">
            {props?.subtitle}
          </Box>
        )}
        <Box
          as="form"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" flexDirection="column">
            <Styled.Input
              value={'$' + (values.amount ?? '0.00')}
              onChange={handleAmount}
              onClick={handleRemoveZeros}
              name="amount"
              autocomplete="off"
              color={props?.amountColor}
            />

            <Box as="h3" mb="base" mt="-5px" color={props?.giftTextColor}>
              Enter your gift amount
            </Box>
          </Box>

          <Box borderRadius="base" backgroundColor="white" p="base" mt="base">
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box as="h4" color="#39383A">
                Gift Type
              </Box>
              <Select
                mt="xs"
                width={currentBreakpoint.isSmall ? '300px' : '600px'}
                borderColor="primary"
                onChange={handleChange}
                name="campus"
              >
                <Select.Option value={null}>Select a Gift Type</Select.Option>
                {giftType.map(name => {
                  return <Select.Option>{name}</Select.Option>;
                })}
              </Select>
            </Box>

            <Box
              mt="l"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Box as="h4" color="#39383A">
                Campus
              </Box>
              <Select
                mt="xs"
                width={currentBreakpoint.isSmall ? '300px' : '600px'}
                borderColor="primary"
                onChange={handleChange}
                name="campus"
              >
                <Select.Option value={null}>Select a Campus</Select.Option>
                {campuses.map(name => {
                  return <Select.Option>{name}</Select.Option>;
                })}
              </Select>
            </Box>

            <Box
              mt="l"
              mb="base"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Box as="h4" color="#39383A">
                Giving Type
              </Box>
              <Select
                mt="xs"
                width={currentBreakpoint.isSmall ? '300px' : '600px'}
                borderColor="primary"
                onChange={handleChange}
                name="campus"
              >
                <Select.Option value={null}>Select a Giving Type</Select.Option>
                {givingType.map(name => {
                  return <Select.Option>{name}</Select.Option>;
                })}
              </Select>
            </Box>
          </Box>

          <Button
            as="a"
            target="blank"
            mt="xl"
            mb="l"
            href={props?.buttonLink + values.campus + '&a=' + values.amount}
            bg={props?.buttonColor}
            px="xl"
          >
            {' '}
            GIVE SAFELY & SECURELY <Icon name="pushPay" />
          </Button>
        </Box>
      </Box>

      {props?.otherOnlineOptions && (
        <Box>
          <Box as="h2">Other Online Options</Box>
          <Box fontStyle="italic" fontSize="13px">
            Note: Online gifts given through ApplePay, Cash App, or Venmo cannot
            be designated to a <br />
            specific fund or campus and will not be on your End-of-Year Giving
            Statement.
          </Box>

          <Box
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gridColumnGap="s"
            maxWidth="12.5rem"
            mt="l"
            mx="auto"
          >
            <Box as="a" color="white" href={''}>
              <Icon name="venmo" size="50" />
            </Box>
            <Box as="a" color="white" href={''}>
              <Icon name="apple" size="50" />
            </Box>
            <Box as="a" color="white" href={''}>
              <Icon name="cashApp" size="50" />
            </Box>
          </Box>
        </Box>
      )}

      {props?.giveByMail &&
        (!currentBreakpoint.isSmall ? (
          //web view only
          <Styled.Rhombus>
            <Styled.GiveByMail>
              <Box fontWeight="bold">GIVE BY MAIL</Box>
              <HtmlRenderer
                py="xl"
                htmlContent='Christ Fellowship Church Contributions<br/>5343 Northlake Blvd. Palm Beach Gardens, FL 33418<br/> <i style="font-size:13px; " >*Note: Please designate "Christ Birthday Offering" on the memo line.</i>'
              />
            </Styled.GiveByMail>
          </Styled.Rhombus>
        ) : (
          //mobile view only
          <Box>
            <Box>
              <Box as="h3" fontWeight="bold" color="primary" fontSize="l">
                Give In Person
              </Box>
              <HtmlRenderer py="xl" htmlContent={props?.giveInPersonDesc} />
            </Box>
            <Box>
              <Box
                as="h3"
                fontWeight="bold"
                color="primary"
                mt="base"
                fontSize="l"
              >
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
  giveByMail: PropTypes.bool,
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
    '<span style="font-size:1rem; color:black">Christ Fellowship Church Contributions<br/>5343 Northlake Blvd.<br/> Palm Beach Gardens, FL 33418<br/> <i style="font-size:1rem;" >*Note: "Christ Birthday Offering" on memo line.</i></span>',
  giveInPersonDesc:
    '<span style="font-size:1rem; color:black">At your campus location.</span>',
  buttonLink: 'https://pushpay.com/g/cfchristbirthdayoffering?',
};

export default GiveWithPushpay;
