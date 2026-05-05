import { useMemo, useState } from 'react';
import Styled from '../GiveWithPushpay/GiveWithPushpay.styles';
import { HtmlRenderer, Select, Button, Box, Icon } from 'ui-kit';
import { useForm } from 'hooks';
import PropTypes from 'prop-types';
import { colorHover } from 'utils';

/**
 * Apollos inline give iframe (default on) plus optional inline Pushpay form (mirrors GiveWithPushpay).
 * https://apollosproject.github.io/apollos-docs/features/giving/donation-embed.html
 *
 * Inline Pushpay UI is gated off below (`SHOW_INLINE_PUSHPAY_FORM`) while the page is iframe-first;
 * set to `true` to restore amount / campus / fund / Pushpay deep-link CTA. Apollos external CTA block
 * is commented out alongside it (`SHOW_APOLLOS_EXTERNAL_CTA`).
 */
function apollosGivePageUrl(slug, appOrigin) {
  const base = (appOrigin || 'https://apollos.com').replace(/\/$/, '');
  return `${base}/${slug}/give`;
}

function resolvePushpayButtonLink(props) {
  const raw =
    props.buttonLink ??
    props.givingCheckoutUrl ??
    'https://pushpay.com/g/christfellowship';
  return String(raw).replace(/\?$/, '');
}

/** Restore inline Pushpay form (amount, toggles, selects, “GIVE SAFELY” link). */
const SHOW_INLINE_PUSHPAY_FORM = false;

/** Restore “Give on Apollos” + dev hint under the Pushpay button. */
const SHOW_APOLLOS_EXTERNAL_CTA = false;

function GiveWithApollos(props = {}) {
  const slug = props.apollosSlug ?? 'christ_fellowship';
  const appOrigin = props.apollosAppOrigin ?? 'https://apollos.com';
  const buttonLink = resolvePushpayButtonLink(props);
  const showIframe = props.showInlineGiveIframe !== false;
  const showApollosOverlay =
    SHOW_APOLLOS_EXTERNAL_CTA && props.showApollosOverlayLink !== false;
  const showLinkTest =
    SHOW_APOLLOS_EXTERNAL_CTA &&
    (props.showApollosEmbedLinkTest ??
      (typeof process !== 'undefined' &&
        process.env.NODE_ENV === 'development'));

  const [active, setActive] = useState('giveOneTime');
  const { values, setValues, handleChange } = useForm();

  const givingType = props?.isCBO
    ? ['Christ Birthday Offering']
    : [
        'Tithes & Offerings',
        'Impact Offering',
        'Kingdom Builders',
        'Missions',
        'Heart for the House',
        'Christ Birthday Offering',
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
    'Westlake - Loxahatchee',
  ];

  const handleAmount = event => {
    const { name, value } = event.target;
    const { data } = event.nativeEvent;

    (!isNaN(data) || data === '.' || data === ',') &&
      setValues(v => ({
        ...v,
        [name]: value.slice(1),
      }));
  };

  const handleRemoveZeros = event => {
    values.amount === undefined &&
      setValues(v => ({
        ...v,
        [event.target.name]: '',
      }));
  };

  const givingTypeURL =
    values.givingType === 'Heart for the House'
      ? 'https://pushpay.com/g/cfh4th?fnd=jt-LCSg3OxQQuMJmf0SzbQ&lang=en' +
        '?f[0]=' +
        values.campus +
        '&a=' +
        values.amount +
        '&' +
        (active === 'giveRecurring' && 'r=weekly')
      : buttonLink +
        '?f[0]=' +
        (values.campus === 'Westlake - Loxahatchee'
          ? 'Westlake%20%E2%80%93%20Loxahatchee'
          : values.campus) +
        '&a=' +
        values.amount +
        '&f[1]=' +
        values.givingType +
        '&' +
        (active === 'giveRecurring' && 'r=weekly');

  const givePageUrl = useMemo(
    () => apollosGivePageUrl(slug, appOrigin),
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
          as="form"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {showIframe && (
            <Box mt="base" mb="l">
              <iframe
                key={givePageUrl}
                title="Give"
                src={givePageUrl}
                style={{
                  width: '100%',
                  minHeight: '440px',
                  border: 'none',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'block',
                }}
                allow="payment *"
              />
            </Box>
          )}

          {SHOW_INLINE_PUSHPAY_FORM && (
            <>
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

              <Box
                borderRadius="base"
                backgroundColor="white"
                py="l"
                px="base"
                mt="base"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Box as="h4" color="#39383A">
                    Gift Type
                  </Box>
                  <Box display="flex" flexDirection="row">
                    <Styled.GiveOneTimeButton
                      selected={active}
                      onClick={() => setActive('giveOneTime')}
                    >
                      Give one time
                    </Styled.GiveOneTimeButton>

                    <Styled.SetRecurringButton
                      selected={active}
                      onClick={() => setActive('giveRecurring')}
                    >
                      Set up recurring
                    </Styled.SetRecurringButton>
                  </Box>
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
                    width={{ _: '300px', md: '600px' }}
                    borderColor="primary"
                    onChange={handleChange}
                    name="campus"
                  >
                    <Select.Option value={null}>Select a Campus</Select.Option>
                    {campuses.map(name => (
                      <Select.Option key={name}>{name}</Select.Option>
                    ))}
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
                    width={{ _: '300px', md: '600px' }}
                    borderColor="primary"
                    onChange={handleChange}
                    name="givingType"
                  >
                    <Select.Option value={null}>
                      Select a Giving Type
                    </Select.Option>
                    {givingType.map(name => (
                      <Select.Option key={name}>{name}</Select.Option>
                    ))}
                  </Select>
                </Box>
              </Box>

              <Button
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                mt="xl"
                mb={showApollosOverlay ? 'base' : 'l'}
                href={givingTypeURL}
                bg={props?.buttonColor ?? 'primary'}
                px="l"
              >
                GIVE SAFELY & SECURELY <Icon name="pushPay" />
              </Button>

              {showApollosOverlay && (
                <Box mb="l">
                  <Button
                    as="a"
                    href={givePageUrl}
                    variant="secondary"
                    px="l"
                    data-apollos-external
                  >
                    Give on Apollos
                  </Button>
                  {showLinkTest && (
                    <Box
                      mt="xs"
                      textAlign="center"
                      fontSize="xs"
                      color="white"
                      opacity={0.9}
                    >
                      Dev: `data-apollos-external` skips modal; site init uses
                      `interceptLinks: false` until checkout is embed-safe
                    </Box>
                  )}
                </Box>
              )}
            </>
          )}
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
  /** Base Pushpay URL for fund/campus deep links (no trailing `?`). Falls back to `givingCheckoutUrl`. */
  buttonLink: PropTypes.string,
  /** Legacy alias for `buttonLink` when only the main Pushpay URL was passed. */
  givingCheckoutUrl: PropTypes.string,
  isCBO: PropTypes.bool,
  amountColor: PropTypes.string,
  giftTextColor: PropTypes.string,
  /** Apollos inline iframe (default on). Set `false` to hide. */
  showInlineGiveIframe: PropTypes.bool,
  /** Only when inline Pushpay form is enabled (`SHOW_INLINE_PUSHPAY_FORM`). */
  showApollosOverlayLink: PropTypes.bool,
  showApollosEmbedLinkTest: PropTypes.bool,
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
