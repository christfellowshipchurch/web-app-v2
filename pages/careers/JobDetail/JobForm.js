import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Checkbox, Icon, Loader, Select, TextInput } from 'ui-kit';

const StyledTextInput = props => (
  <Box mt="base" width="100%">
    <TextInput
      id={props?.id}
      label={props?.name}
      placeholder={props?.name}
      onChange={props?.onChange}
      value={props?.value}
    />
    {props?.errors ? (
      <Box as="p" color="alert" fontSize="s" mt="s">
        {props?.errors}
      </Box>
    ) : null}
  </Box>
);

const StyledCheckBox = props => (
  <Box display="flex">
    <Checkbox id={props?.id} size={18} onChange={props?.onChange} mr="s" />
    <Box as="p" mt="0.1rem">
      {props?.text}
    </Box>
  </Box>
);

const JobForm = ({
  handleChange,
  handleSubmit,
  isLoading,
  values,
  errors,
  defaultUserCampus,
  campuses,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx={{ _: '', md: 'base' }}
      p={{ _: 'base', md: '' }}
    >
      {errors?.generalError ? (
        <Box as="p" color="alert" fontSize="s" mt="-1.8rem" mb="s">
          {errors.generalError}
        </Box>
      ) : null}
      {/* General Information */}

      <StyledTextInput
        id="firstName"
        name="First Name"
        onChange={handleChange}
        value={values?.firstName}
        errors={errors?.firstName}
      />
      <StyledTextInput
        id="lastName"
        label="Last Name"
        name="Last Name"
        onChange={handleChange}
        value={values?.lastName}
        errors={errors?.lastName}
      />
      <StyledTextInput
        id="email"
        name="Email"
        onChange={handleChange}
        value={values?.email}
        errors={errors?.email}
      />
      <StyledTextInput
        id="phoneNumber"
        name="Phone"
        onChange={handleChange}
        value={values?.phoneNumber}
        errors={errors?.phoneNumber}
      />
      {/* Campus Select */}
      <Box width="100%" my="base">
        <Box display="flex" mb="s">
          <Box fontWeight="bold" fontSize="s" mr="s">
            Location
          </Box>
          {!!isLoading && <Loader noLabel />}
        </Box>
        <Box display="flex" alignItems="center">
          <Select
            id="campusId"
            name="campusId"
            defaultValue={defaultUserCampus?.name}
            onChange={handleChange}
          >
            <Select.Option value={null}>Select a Campus</Select.Option>
            {campuses?.map(({ id, name }) => {
              return (
                <Select.Option key={id} value={name}>
                  {name}
                </Select.Option>
              );
            })}
          </Select>
        </Box>
        {errors?.campus ? (
          <Box as="p" color="alert" fontSize="s" mt="s">
            {errors.campus}
          </Box>
        ) : null}
      </Box>

      {errors?.networkError && (
        <Box display="flex" alignItems="center" color="alert" mb="s">
          <Icon name="gear" />
          Oops! Network error, please try again later.
        </Box>
      )}
      <Button onClick={handleSubmit} borderRadius={50} size="s" px="l">
        {isLoading ? 'Loading...' : 'SUBMIT'}
      </Button>
    </Box>
  );
};

JobForm.propTypes = {};

export default JobForm;
