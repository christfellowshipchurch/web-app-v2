import React from 'react';
import PropTypes from 'prop-types';
import { Box, Icon, SquareAvatar, systemPropTypes } from 'ui-kit';
import Styled from './GroupCard.styles';
import { themeGet } from '@styled-system/theme-get';
import camelCase from 'lodash.camelcase';
import get from 'lodash/get';

const MAX_AVATARS = 4;

const labelTypes = {
  virtual: {
    icon: 'computer',
    color: themeGet('colors.success'),
  },
  inPerson: {
    icon: 'users',
    color: themeGet('colors.primary'),
  },
};

const GroupCard = ({
  coverImage,
  heroAvatars = [],
  title,
  meetingType,
  ...props
}) => {
  const labelType = get(labelTypes, camelCase(meetingType));
  const filteredHeroAvatars = (heroAvatars || [])
    .slice(0, MAX_AVATARS)
    .filter(avatar => avatar?.photo?.uri);

  return (
    <Styled {...props}>
      <Box>
        {coverImage && <Styled.ImageBackground src={coverImage} />}
        <Box
          display="flex"
          alignItems="center"
          mt="-36px"
          zIndex="1"
          position="relative"
          px="base"
        >
          {labelType && (
            <Styled.Label backgroundColor={labelType.color}>
              {meetingType}
              <Icon size="18" name={labelType.icon} ml="xs" />
            </Styled.Label>
          )}
          {filteredHeroAvatars.length > 0 ? (
            filteredHeroAvatars
              .slice(0, 2)
              .map((n, i) => (
                <SquareAvatar
                  height="72px"
                  width="72px"
                  boxShadow="l"
                  border="2px solid"
                  borderColor="neutrals.300"
                  key={i}
                  mr={filteredHeroAvatars.length > 1 ? 'xs' : null}
                  name={`${n?.firstName || ''} ${n?.lastName || ''}`.trim()}
                  src={n?.photo?.uri}
                />
              ))
          ) : (
            <SquareAvatar
              height="72px"
              width="72px"
              name="Group Leader"
              src={false}
            />
          )}
        </Box>
        <Styled.GroupCardTitle>
          <Box as="h3" mb="0" mt="xs">
            {title}
          </Box>
        </Styled.GroupCardTitle>
      </Box>
    </Styled>
  );
};

GroupCard.propTypes = {
  ...systemPropTypes,
  avatars: PropTypes.array,
  callToAction: PropTypes.shape({
    call: PropTypes.string,
    action: PropTypes.func,
  }),
  campus: PropTypes.string,
  preferences: PropTypes.array,
  subPreference: PropTypes.string,
  coverImage: PropTypes.string,
  dateTime: PropTypes.string,
  meetingDay: PropTypes.string,
  groupType: PropTypes.string,
  heroAvatars: PropTypes.array,
  isLoading: PropTypes.bool,
  summary: PropTypes.string,
  title: PropTypes.string,
  totalAvatars: PropTypes.number,
  totalHeroAvatars: PropTypes.number,
  meetingType: PropTypes.string,
};

GroupCard.defaultProps = {
  avatars: [],
  coverImage: '/cf-logo.png',
  heroAvatars: [],
  totalAvatars: 0,
  totalHeroAvatars: 0,
};

export default GroupCard;
