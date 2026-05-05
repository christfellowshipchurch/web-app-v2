import { useMemo } from 'react';
import Styled from '../GiveWithPushpay/GiveWithPushpay.styles';
import { HtmlRenderer, Box, Icon, Button } from 'ui-kit';
import PropTypes from 'prop-types';
import { colorHover } from 'utils';

/** Inline give URL per Apollos Web Embeds README (“Inline Give Form”). */
function apollosGiveIframeSrc(slug, appOrigin) {
  const base = (appOrigin || 'https://apollos.com').replace(/\/$/, '');
  return `${base}/${slug}/give`;
}

function GiveWithApollos(props = {}) {
  const slug = props.apollosSlug ?? 'christ-fellowship';
  const appOrigin = props.apollosAppOrigin ?? 'https://apollos.com';
  const checkoutHref =
    props.givingCheckoutUrl ?? 'https://pushpay.com/g/christfellowship';
  const showIframe = props.showInlineGiveIframe !== false;

  const inlineGiveSrc = useMemo(
    () => apollosGiveIframeSrc(slug, appOrigin),
    [slug, appOrigin]
  );

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
        width="100%"
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

        <Box
          borderRadius="base"
          py="l"
          px="base"
          mt="base"
          width="100%"
          maxWidth={{ _: '100%', md: '600px' }}
        >
          {showIframe && (
            <iframe
              key={inlineGiveSrc}
              title="Give"
              src={inlineGiveSrc}
              style={{
                width: '100%',
                minHeight: '440px',
                border: 'none',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'block',
              }}
              allow="payment *; fullscreen"
            />
          )}

          <Button
            mt="l"
            as="a"
            display="flex"
            width="100%"
            justifyContent="center"
            alignItems="center"
            href={checkoutHref}
            bg={props?.buttonColor ?? 'primary'}
            px="l"
          >
            GIVE SAFELY & SECURELY <Icon name="pushPay" />
          </Button>
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
              rel="noopener noreferrer"
              href={'https://www.paypal.com/paypalme/ChristFellowshipFL'}
            >
              <Icon name="payPal" size="50" />
            </Box>
            <Box
              as="a"
              color="white"
              hoverColor={colorHover('white')}
              target="_blank"
              rel="noopener noreferrer"
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

GiveWithApollos.propTypes = {
  apollosSlug: PropTypes.string,
  apollosAppOrigin: PropTypes.string,
  givingCheckoutUrl: PropTypes.string,
  giveCtaDescription: PropTypes.string,
  giveCtaHtml: PropTypes.string,
  /** Docs “Inline Give Form” iframe; set false if you only want the Pushpay link. */
  showInlineGiveIframe: PropTypes.bool,
  buttonColor: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  giveByMail: PropTypes.bool,
  backgroundImage: PropTypes.string,
  giveByMailDesc: PropTypes.string,
  giveInPersonDesc: PropTypes.string,
  otherOnlineOptions: PropTypes.bool,
  titleColor: PropTypes.string,
  subtitleColor: PropTypes.string,
};

GiveWithApollos.defaultProps = {
  giveByMailDesc:
    '<span style="font-size:1rem; color:black">Christ Fellowship Church Contributions<br/>5343 Northlake Blvd.<br/> Palm Beach Gardens, FL 33418<br/> <i style="font-size:1rem;" >*Note: "Christ Birthday Offering" on memo line.</i></span>',
  giveInPersonDesc:
    '<span style="font-size:1rem; color:black">At your campus location.</span>',
};

export default GiveWithApollos;
