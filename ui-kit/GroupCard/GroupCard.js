import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from '..';
import { Box, Avatar, SquareAvatar, Button, Icon } from '..';
import Styled from './GroupCard.styles';
import { textTrimmer } from '../../utils';

const GroupCard = (props = {}) => {
  const summaryLength = props.summary.length
  const maxChar = 130

  return (
    <Styled {...props}>
      {props.coverImage ? (
       <Styled.GradientContainer
        src={props.coverImage}
       >
         <Box as="div" display="flex" justifyContent="center">
           {props.heroAvatars && props.heroAvatars.map((n) => (
             <Avatar
                src={n}
                height="80px"
                width="80px"
                mr="xs"
             />
           ))
           }
         </Box>
       </Styled.GradientContainer>
      ) : null}
        <Box as="div" display="flex" justifyContent="center">
           <h2>{props.title}</h2>
         </Box>
         <Box as="div" display="flex" justifyContent="center">
           <p>{props.groupType}</p>
         </Box>
        <Styled.GroupCardContent>
        <Styled.DateTimeLabel>
            {/* <Icon name="x" size="10" /> */}
            {props.dateTime}
          </Styled.DateTimeLabel>
      {props.summary && (
          <Box as="p">
             {summaryLength > maxChar 
            ? (<>
              {textTrimmer(props.summary, maxChar)}
              <Box as="a" pl="xs" textDecoration="none">See More...</Box>
            </>)
            : props.summary
          }
          </Box>
      )}
      <Box as="h4" mt="base">Group Members</Box>
          <Box as="div" display="flex">
          {props.avatars && props.avatars.map((n) => (
             <SquareAvatar
                src={n}
                height="90px"
                width="70px"
                mr="xs"
             />
          ))}
          </Box>
          <Button size="l" width="100%" mt="xl">How Do I Join?</Button>
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
  // totalAvatars: PropTypes.number,
  // totalHeroAvatars: PropTypes.number,
  // theme: PropTypes.shape({}),
  // isLive: PropTypes.bool,
};

GroupCard.defaultProps = {
  coverImage: null,
  // avatars: [],
  // totalAvatars: 0,
  // heroAvatars: [],
  // totalHeroAvatars: 0,
  // isLive: false,
  // inHorizontalList: false,
};

export default GroupCard;
