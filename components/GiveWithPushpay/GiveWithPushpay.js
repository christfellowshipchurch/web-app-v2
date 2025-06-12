import Styled from './GiveWithPushpay.styles';
import { HtmlRenderer, Box, Icon } from 'ui-kit';
import PropTypes from 'prop-types';
import { colorHover } from 'utils';
import PushpayEmbed from './PushPayEmbed';

function GiveWithPushpay(props = {}) {
  return (
    <Styled id="give" backgroundImage={props?.backgroundImage}>
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
        {props?.subtitle && (
          <Box
            as="h4"
            display={{ _: 'none', md: 'block' }}
            color={props?.subtitleColor}
            fontWeight="normal"
          >
            {props?.subtitle}
          </Box>
        )}
        <Box py="l">
          <PushpayEmbed />
        </Box>
      </Box>

      {props?.otherOnlineOptions && (
        <Box>
          <Box as="h2">Other Online Options</Box>
          <Box fontStyle="italic" fontSize="16px">
            Note: Online gifts given through PayPal or Venmo cannot be
            designated to a <Box as="br" display={{ _: 'none', md: 'block' }} />
            specific fund or campus and will not be on your End-of-Year Giving
            Statement.
          </Box>

          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gridColumnGap="s"
            maxWidth="12.5rem"
            mt="l"
            mx="auto"
          >
            <Box
              as="a"
              color="white"
              hoverColor={colorHover('white')}
              target="_blank"
              href={'https://www.paypal.com/paypalme/ChristFellowshipFL'}
            >
              <Icon name="payPal" size="50" />
            </Box>
            <Box
              as="a"
              color="white"
              hoverColor={colorHover('white')}
              target="_blank"
              href={'https://account.venmo.com/u/Christ-Fellowship'}
            >
              <Icon name="venmo" size="50" />
            </Box>
          </Box>
        </Box>
      )}

      {props?.giveByMail && (
        <>
          <Styled.Rhombus>
            <Styled.GiveByMail>
              <Box fontWeight="bold">GIVE BY MAIL</Box>
              <HtmlRenderer
                py="xl"
                htmlContent='Christ Fellowship Church Contributions<br/>5343 Northlake Blvd. Palm Beach Gardens, FL 33418<br/> <i style="font-size:13px; " >*Note: Please designate "Christ Birthday Offering" on the memo line.</i>'
              />
            </Styled.GiveByMail>
          </Styled.Rhombus>
          <Box display={{ md: 'none' }}>
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
        </>
      )}
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
