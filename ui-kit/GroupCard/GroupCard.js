import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

import { useModalDispatch, showModal } from 'providers/ModalProvider';

import { CustomLink } from 'components';
import { Box, Button, Icon, SquareAvatar, systemPropTypes } from 'ui-kit';

import Styled from './GroupCard.styles';
import { themeGet } from '@styled-system/theme-get';
import camelCase from 'lodash.camelcase';

const GroupCard = (props = {}) => {
  const modalDispatch = useModalDispatch();

  const maxAvatars = 4;

  // Option if we want to add a Avatar Count label for leaders
  // const heroAvatarsDiff = props.totalHeroAvatars - props.heroAvatars.length;
  const avatarsDiff =
    props.totalAvatars - Math.min(props.avatars.length, maxAvatars);

  const handleSeeMore = event => {
    event.preventDefault();
    modalDispatch(
      showModal('GroupDetails', {
        groupTitle: props.title,
        groupSummary: props.summary,
        groupCallToAction: props.callToAction,
      })
    );
  };

  const showSeeMore = props?.summary?.length > 120;

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

  const labelType = get(labelTypes, camelCase(props?.meetingType));
  const heroAvatars = props.heroAvatars
    .slice(0, maxAvatars)
    // only show group leaders with photos
    .filter(avatar => avatar?.photo?.uri);
  const renderDateTime = _props => {
    if (_props.dateTime) {
      return format(new Date(props.dateTime), "EEEE 'at' h:mm a");
    }

    if (_props.meetingDay) return _props.meetingDay;
  };

  return (
    <Styled {...props}>
      <Box>
        {props.coverImage ? (
          <Styled.GradientBackground src={props.coverImage}>
            {!isEmpty(labelType) && (
              <Styled.Label backgroundColor={labelType.color}>
                {props?.meetingType}
                <Icon size="18" name={labelType.icon} ml="xs" />
              </Styled.Label>
            )}
            {heroAvatars ? (
              heroAvatars.map((n, i) => (
                <SquareAvatar
                  height={heroAvatars.length > 3 ? '80px' : '100px'}
                  width={heroAvatars.length > 3 ? '60px' : '80px'}
                  key={i}
                  mr={props.heroAvatars.length > 1 ? 'xs' : null}
                  name={`${n?.firstName} ${n?.lastName}`}
                  src={n?.photo?.uri}
                />
              ))
            ) : (
              <SquareAvatar
                height="100px"
                name="Group Leader"
                src={false}
                width="80px"
              />
            )}
          </Styled.GradientBackground>
        ) : null}
        <Styled.GroupCardTitle>
          <Box as="h4">{props.title}</Box>
        </Styled.GroupCardTitle>
        {props.groupType && (
          <Styled.GroupCardSubTitle>{props.groupType}</Styled.GroupCardSubTitle>
        )}
        {!isEmpty(props.preferences) && (
          <Styled.GroupCardSubTitle>
            {props.preferences.join(', ')}
          </Styled.GroupCardSubTitle>
        )}
      </Box>
      <Styled.GroupCardContent>
        {props.campus && (
          <Styled.DateTimeLabel>
            <Icon name="location" size="16" mr="xs" />
            {props.campus}
          </Styled.DateTimeLabel>
        )}
        {(props.dateTime || props.meetingDay) && (
          <Styled.DateTimeLabel>
            <Icon name="calendar" size="16" mr="xs" />
            {renderDateTime(props)}
          </Styled.DateTimeLabel>
        )}
        {props.summary && (
          <Box mb="base">
            <Styled.GroupDescription>{props?.summary}</Styled.GroupDescription>
            {showSeeMore && (
              <Styled.SeeMore onClick={e => handleSeeMore(e)}>
                See More
              </Styled.SeeMore>
            )}
          </Box>
        )}
        {Boolean(props.totalAvatars) && (
          <Box as="h5" mt="base">
            <Box as="span">{props.totalAvatars}</Box>{' '}
            {props.totalAvatars === 1 ? `Group Member` : 'Group Members'}
          </Box>
        )}
        {props.avatars?.length > 0 && (
          <Box display="flex" gridColumnGap="s">
            {props.avatars.slice(0, maxAvatars).map((n, i) => (
              <Box
                key={i}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                position="relative"
                width="70px"
                height="90px"
              >
                <SquareAvatar
                  width="100%"
                  height="100%"
                  name="Group Member"
                  src={n?.photo?.uri}
                />
                {avatarsDiff > 0 && props.avatars.length === i + 1 && (
                  <Styled.AvatarCount>{`+${avatarsDiff}`}</Styled.AvatarCount>
                )}
              </Box>
            ))}
          </Box>
        )}
        {props.callToAction && (
          <CustomLink
            as="a"
            Component={Button}
            variant="primary"
            onClick={props?.callToAction?.action}
            mt="auto"
            size="l"
            width="100%"
            {...props?.callToAction?.buttonProps}
          >
            {props?.callToAction?.call}
          </CustomLink>
        )}
      </Styled.GroupCardContent>
    </Styled>
  );
};

GroupCard.propTypes = {
  ...systemPropTypes,
  avatars: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        photo: PropTypes.shape({
          uri: PropTypes.string,
        }),
      }),
    })
  ),
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
  heroAvatars: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        photo: PropTypes.shape({
          uri: PropTypes.string,
        }),
      }),
    })
  ),
  isLoading: PropTypes.bool,
  summary: PropTypes.string,
  title: PropTypes.string,
  totalAvatars: PropTypes.number,
  totalHeroAvatars: PropTypes.number,
};

GroupCard.defaultProps = {
  avatars: [],
  coverImage: '/cf-logo.png',
  heroAvatars: [],
  totalAvatars: 0,
  totalHeroAvatars: 0,
};

export default GroupCard;
