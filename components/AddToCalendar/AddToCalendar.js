import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import { Box, Menu, List, Button, Icon } from 'ui-kit';
import { CustomLink } from 'components';
import { googleCalLink, icsLink } from './utils';

const AddToCalendar = (
  { event, alternateDescription, title, children, label },
  props
) => (
  <Menu
    space="0"
    side="right"
    renderTrigger={({ toggle }) => (
      <Box
        as="a"
        href="#0"
        id={uniqueId('add-to-calendar-')}
        onClick={toggle}
        textDecoration="none"
        display="flex"
      >
        <Icon name="calendarPlus" mr={label && 'xs'} />
        {label && (
          <Box as="p" fontWeight="bold">
            Add To Calendar
          </Box>
        )}
        <Box as="span" className="srt">
          Add To Calendar
        </Box>
      </Box>
    )}
    {...props}
  >
    <List textAlign="left" py="xs" space="0">
      <Box as="li">
        <CustomLink
          href={icsLink({ ...event, description: alternateDescription })}
          Component={Menu.Link}
          px="base"
          py="xs"
        >
          <Icon name="apple" size="30" mr="s" />
          Apple
        </CustomLink>
      </Box>
      <Box as="li">
        <CustomLink
          href={googleCalLink(event)}
          Component={Menu.Link}
          px="base"
          py="xs"
        >
          <Icon name="google" mr="s" />
          Google
        </CustomLink>
      </Box>
      <Box as="li">
        <CustomLink
          href={icsLink({ ...event, description: alternateDescription })}
          Component={Menu.Link}
          px="base"
          py="xs"
        >
          <Icon name="microsoft" mr="s" />
          Outlook
        </CustomLink>
      </Box>
    </List>
  </Menu>
);

AddToCalendar.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    address: PropTypes.string,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string,
  }).isRequired,
  alternateDescription: PropTypes.string,
  label: PropTypes.bool,
};

AddToCalendar.defaultProps = {
  alternateDescription: 'Join us for an event at Christ Fellowship!',
};

export default AddToCalendar;
