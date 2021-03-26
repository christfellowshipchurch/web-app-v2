import React, { useEffect } from 'react';

import { Box, Button, Card, Select } from 'ui-kit';
import { useForm } from 'hooks';

import DateTime from './DateTime';

const EventGroupings = (props = {}) => {
  const { values, handleSubmit, setValues, handleChange } = useForm();
  const selectedGroup = props.data.eventGroupings?.find(
    i => i.name === values.campusSelect
  );

  useEffect(() => {
    if (props.data?.eventGroupings && props.data?.eventGroupings[0]?.name) {
      setValues({ campusSelect: props.data.eventGroupings[0]?.name });
    }
  }, [setValues, props.data.eventGroupings]);

  return (
    <Box as="form" onSubmit={handleSubmit}>
      {props.data.eventGroupings?.length > 0 && (
        <Card
          boxShadow="base"
          display="flex"
          flexDirection="column"
          key="EventOccurrences"
          mb="base"
          p={{ _: 's', md: 'base' }}
        >
          <Select
            defaultValue={props.data.eventGroupings[0]?.name}
            id="campusSelect"
            mb={selectedGroup?.instances?.length > 0 ? 'base' : '0'}
            name="campusSelect"
            onChange={handleChange}
          >
            <Select.Option value="" disabled={true}>
              Select a campus...
            </Select.Option>
            {props.data.eventGroupings.map(({ name }) => {
              return (
                <Select.Option key={name} value={name}>
                  {name}
                </Select.Option>
              );
            })}
          </Select>

          {selectedGroup?.instances?.length > 0 &&
            selectedGroup.instances.map((n, i) => (
              <DateTime
                end={n.end}
                key={n.id}
                start={n.start}
                title={props.data.title}
                mb={i === selectedGroup?.instances?.length - 1 ? '0' : 'base'}
              />
            ))}
        </Card>
      )}
      {props.data.callsToAction.length > 0 && (
        <Card
          boxShadow="base"
          display="flex"
          flexDirection="column"
          p={{ _: 's', md: 'base' }}
        >
          {props.data.callsToAction?.map((n, i) => (
            <Button
              as="a"
              href={n.action}
              key={i}
              mb={i === props.data.callsToAction.length - 1 ? '0' : 's'}
              target={n.action.includes('http') ? '_blank' : ''}
            >
              {n.call}
            </Button>
          ))}
        </Card>
      )}
    </Box>
  );
};

export default EventGroupings;
