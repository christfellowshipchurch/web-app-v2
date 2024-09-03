import Link from 'next/link';
import PropTypes from 'prop-types';
import { ArrowRight } from 'phosphor-react';
import { Box, Heading, Text, theme } from 'ui-kit';
import { StyledAvatar } from './Quote.styles';

// TODO - Add avatar color overlay
// TODO - Add gray background
function Quote({
  title,
  text,
  color,
  attribution,
  actionLink,
  actionLabel,
  avatar,
  alignment = 'center',
} = {}) {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box display="flex">
          <Heading fontSize="48px" lineHeight="72px" fontWeight="700">
            “
          </Heading>
          {title && (typeof title === 'string' ? (
          <Heading
            textTransform="uppercase"
            color={color}
            fontSize="18px"
            lineHeight="27px"
            fontWeight="400"
            padding="12px"
          >
            {title}
          </Heading> ) :
            (
            <Box ml="12px" pt="12px">
              {title}
            </Box>
          ))}
        </Box>
        <Heading
          px="36px"
          color="neutrals.900"
          fontSize="18px"
          lineHeight="h3"
          textAlign={alignment}
        >
          {text}
        </Heading>
        <Heading
          fontSize="48px"
          lineHeight="72px"
          fontWeight="700"
          textAlign="right"
          mt="24px"
        >
          ”
        </Heading>
        {(attribution || actionLink || avatar) && (
          <Box display="flex" justifyContent={alignment} mt="-36px" px="36px">
            <StyledAvatar src={avatar} rounded="xl" mr="s" />
            {(attribution || actionLink) && (
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                {attribution && (
                  <Text
                    fontWeight="700"
                    fontSize="18px"
                    lineHeight="28px"
                    color="neutrals.600"
                  >
                    {attribution}
                  </Text>
                )}
                {actionLink && (
                  <Link legacyBehavior href={actionLink}>
                    <a
                      style={{
                        display: 'flex',
                        textDecoration: 'none',
                        alignItems: 'center',
                      }}
                    >
                      <Text fontWeight="600" variant="s" color={color} mr="4px">
                        {actionLabel}
                      </Text>
                      <ArrowRight
                        alt={actionLabel}
                        weight="bold"
                        size={18}
                        color={theme.colors[color]}
                      />
                    </a>
                  </Link>
                )}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

Quote.propTypes = {
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  attribution: PropTypes.string,
  actionLink: PropTypes.string,
  actionLabel: PropTypes.string,
  avatar: PropTypes.string,
  color: PropTypes.string,
};

export default Quote;
