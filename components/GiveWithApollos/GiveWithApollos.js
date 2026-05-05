import { useEffect } from 'react';
import Styled from '../GiveWithPushpay/GiveWithPushpay.styles';
import { HtmlRenderer, Box, Icon, Button } from 'ui-kit';
import PropTypes from 'prop-types';
import { colorHover } from 'utils';

const APOLLOS_SCRIPT_ID = 'apollos';
const APOLLOS_EMBED_SRC =
  'https://cdn.jsdelivr.net/npm/@apollosproject/web-embeds@latest/widget/embed.js';

/**
 * Christ Fellowship’s Apollos `/give` route redirects to Pushpay; Pushpay uses
 * X-Frame-Options: SAMEORIGIN, so giving cannot run inside an iframe on this site.
 * This component loads the Apollos embed (link interception) and uses a top-level
 * Pushpay checkout link for the primary CTA.
 */
function ensureApollosLoader() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(APOLLOS_SCRIPT_ID)) return;

  const w = window;
  w.ApollosEmbed = APOLLOS_SCRIPT_ID;
  w.apollos =
    w.apollos ||
    function apollosQueue() {
      (w.apollos.q = w.apollos.q || []).push(arguments);
    };

  const d = document.createElement('script');
  d.id = APOLLOS_SCRIPT_ID;
  d.src = APOLLOS_EMBED_SRC;
  d.async = true;
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(d, firstScript);
  } else {
    document.head.appendChild(d);
  }
}

function GiveWithApollos(props = {}) {
  const slug = props.apollosSlug ?? 'christ_fellowship';
  const appOrigin = props.apollosAppOrigin ?? 'https://apollos.com';
  const checkoutHref =
    props.givingCheckoutUrl ?? 'https://pushpay.com/g/christfellowship';

  useEffect(() => {
    ensureApollosLoader();
    window.apollos('init', {
      slug,
      baseUrl: appOrigin,
      interceptLinks: true,
      autoOpen: false,
    });

    return () => {
      const api = window.ApollosEmbed;
      if (api && typeof api === 'object' && typeof api.destroy === 'function') {
        api.destroy();
      }
    };
  }, [slug, appOrigin]);

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
          <Button
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
