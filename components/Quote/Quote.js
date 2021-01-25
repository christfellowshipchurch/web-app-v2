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
} = {}) {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth="556px"
      >
        <Box display="flex">
          <Heading fontSize="48px" lineHeight="72px" fontWeight="700">
            “
          </Heading>
          <Box ml="12px" pt="12px">
            {title}
          </Box>
        </Box>
        <Heading
          color="neutrals.900"
          fontSize="h3"
          lineHeight="34px"
          fontWeight="700"
          textAlign="center"
          px="m"
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
        <Box display="flex" justifyContent="center" mt="-36px">
          <StyledAvatar src={avatar} rounded="xl" mr="s" />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text
              fontWeight="700"
              fontSize="18px"
              lineHeight="28px"
              color="neutrals.600"
            >
              {attribution}
            </Text>
            <Link href={actionLink}>
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

Quote.propTypes = {
  title: PropTypes.node,
  text: PropTypes.string,
  attribution: PropTypes.string,
  actionLink: PropTypes.string,
  actionLabel: PropTypes.string,
  avatar: PropTypes.string,
  color: PropTypes.string,
};

export default Quote;
