import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from '..';
import { Box, Avatar, SquareAvatar, Button, Icon } from '..';
import Styled from './GroupCard.styles';
import { textTrimmer } from '../../utils';

const GroupCard = (props = {}) => {
  const summaryLength = props.summary ? props.summary.length : 0;
  const maxChar = 130;

  // Option if we want to add a Avatar Count label for leaders
  // const heroAvatarsDiff = props.totalHeroAvatars - props.heroAvatars.length;
  const avatarsDiff = props.totalAvatars - props.avatars.length;

  return (
    <Styled display="flex" flexDirection="column" {...props}>
      <Box flexGrow={1}>
        {props.coverImage ? (
          <Styled.GradientBackground src={props.coverImage}>
            {props.heroAvatars ? (
              props.heroAvatars
                .slice(0, 3)
                .map((n, i) => (
                  <Avatar
                    height="80px"
                    key={i}
                    mr={props.heroAvatars.length > 1 ? 'xs' : null}
                    name="Group Leader"
                    src={n.node?.photo?.uri}
                    width="80px"
                  />
                ))
            ) : (
              <Avatar
                height="80px"
                name="Group Leader"
                src={false}
                width="80px"
              />
            )}
          </Styled.GradientBackground>
        ) : null}
        <Styled.GroupCardTitle>
          <h4>{props.title}</h4>
        </Styled.GroupCardTitle>
        <Styled.GroupCardTitle>
          <Box as="p" fontSize="s">
            {props.groupType}
          </Box>
        </Styled.GroupCardTitle>
      </Box>
      <Styled.GroupCardContent>
        <Styled.DateTimeLabel>{props.dateTime}</Styled.DateTimeLabel>
        {props.summary && (
          <Box as="p" fontSize="xs">
            {summaryLength > maxChar ? (
              <>
                {textTrimmer(props.summary, maxChar)}
                <Box as="a" pl="xs" textDecoration="none">
                  See More...
                </Box>
              </>
            ) : (
              props.summary
            )}
          </Box>
        )}
        <Box as="h5" mt="base">
          Group Members
        </Box>
        <Box as="div" display="flex">
          {props.avatars &&
            props.avatars
              .slice(0, 4)
              .map((n, i = 2) => (
                <SquareAvatar
                  height="90px"
                  key={i}
                  mr="xs"
                  name="Group Member"
                  src={n.node?.photo?.uri}
                  width="70px"
                />
              ))}
          {avatarsDiff > 0 &&
            <Styled.AvatarCount>{`+${avatarsDiff}`}</Styled.AvatarCount>
          }
        </Box>
        {props.callToAction && (
          <Button
            href={props?.callToAction?.action}
            mt="l"
            size="l"
            width="100%"
          >
            {props?.callToAction?.call}
          </Button>
        )}
      </Styled.GroupCardContent>
    </Styled>
  );
};

GroupCard.propTypes = {
  ...systemPropTypes,
  coverImage: PropTypes.string,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  groupType: PropTypes.string,
  summary: PropTypes.string,
  dateTime: PropTypes.string,
  avatars: PropTypes.array,
  heroAvatars: PropTypes.array,
  callToAction: PropTypes.shape({
    call: PropTypes.string,
    action: PropTypes.string,
  }),
  totalAvatars: PropTypes.number,
  totalHeroAvatars: PropTypes.number,
};

GroupCard.defaultProps = {
  coverImage: '/cf-logo.png',
  avatars: [],
  totalAvatars: 0,
  heroAvatars: [],
  totalHeroAvatars: 0,
};

export default GroupCard;
