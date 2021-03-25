import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Card, Select } from 'ui-kit';
import { useForm } from 'hooks';

import DateTime from './DateTime';

const EventGroupings = (props = {}) => {
  const { values, handleSubmit, setValues, handleChange } = useForm();
  const selectedGroup = props.data.eventGroupings?.find(
    i => i.name === values.campusSelect
  );
  console.log('values', values);
  console.log('selectedGroup', selectedGroup);

  useEffect(() => {
    if (props.data.eventGroupings[0]?.name) {
      setValues({ campusSelect: props.data.eventGroupings[0]?.name });
    }
  }, [setValues, props.data.eventGroupings]);

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Card
        key="EventOccurrences"
        p={{ _: 's', md: 'base' }}
        display="flex"
        flexDirection="column"
      >
        {props.data.eventGroupings?.length > 0 && (
          <Select
            id="campusSelect"
            name="campusSelect"
            onChange={handleChange}
            defaultValue={props.data.eventGroupings[0]?.name}
            mb="base"
          >
            <Select.Option value="">Select a campus</Select.Option>
            {props.data.eventGroupings.map(({ name }) => {
              return (
                <Select.Option key={name} value={name}>
                  {name}
                </Select.Option>
              );
            })}
          </Select>
        )}

        {selectedGroup?.instances?.length > 0 &&
          selectedGroup.instances.map(({ id, start, end }) => (
            <DateTime
              key={id}
              start={start}
              end={end}
              title={props.data.title}
              group={selectedGroup.name}
            />
          ))}

        {props.data.callsToAction?.map((n, i) => (
          <Button
            as="a"
            key={i}
            href={n.action}
            target={n.action.includes('http') ? '_blank' : ''}
            // onClick={() =>
            //   GoogleAnalytics.trackEvent({
            //     category: 'Event Item',
            //     action: `${title} Call to Action`,
            //     label: `${title} - ${n.call} Button`,
            //   })
            // }
            mb="s"
          >
            {n.call}
          </Button>
        ))}
      </Card>
    </Box>
  );
};

export default EventGroupings;
