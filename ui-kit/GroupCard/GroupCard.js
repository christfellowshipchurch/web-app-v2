import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import isEmpty from 'lodash/isEmpty';

import { useModalDispatch, showModal } from 'providers/ModalProvider';

import {
  Avatar,
  Box,
  Button,
  Icon,
  SquareAvatar,
  systemPropTypes,
} from 'ui-kit';
import { textTrimmer } from 'utils';

import Styled from './GroupCard.styles';

const GroupCard = (props = {}) => {
  const modalDispatch = useModalDispatch();

  const summaryLength = props?.summary?.length || 0;
  const maxChar = 240;
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
      })
    );
  };

  return (
    <Styled {...props}>
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
                    name={`${n.node?.firstName} ${n.node?.lastName}`}
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
            <Icon name="map" size="16" mr="xs" />
            {props.campus}
          </Styled.DateTimeLabel>
        )}
        {props.dateTime && (
          <Styled.DateTimeLabel>
            <Icon name="calendar" size="16" mr="xs" />
            {format(new Date(props.dateTime), "EEEE 'at' h:mm a")}
          </Styled.DateTimeLabel>
        )}
        {props.summary && (
          <Box as="p" fontSize="s" mt="s">
            {summaryLength > maxChar ? (
              <>
                {textTrimmer(props.summary, maxChar)}
                <Box
                  as="a"
                  pl="xs"
                  textDecoration="none"
                  href="#"
                  onClick={handleSeeMore}
                >
                  See More...
                </Box>
              </>
            ) : (
              props.summary
            )}
          </Box>
        )}
        <Box as="h5" mt="base">
          <Box as="span">{props.totalAvatars}</Box>{' '}
          {props.totalAvatars === 1 ? `Group Member` : 'Group Members'}
        </Box>
        {props.avatars?.length > 0 && (
          <Box display="flex" mb="l">
            {props.avatars.slice(0, maxAvatars).map((n, i = 2) => (
              <SquareAvatar
                height="90px"
                key={i}
                mr="xs"
                name="Group Member"
                src={n.node?.photo?.uri}
                width="70px"
              />
            ))}
            {avatarsDiff > 0 && (
              <Styled.AvatarCount>{`+${avatarsDiff}`}</Styled.AvatarCount>
            )}
          </Box>
        )}
        {props.callToAction && (
          <Button
            onClick={props?.callToAction?.action}
            mt="base"
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
  groupType: PropTypes.string,
  heroAvatars: PropTypes.array,
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
