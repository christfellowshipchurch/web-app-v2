import React from 'react';
import { Box, Button, Icon, Loader, Select, TextInput } from 'ui-kit';

const StyledTextInput = props => (
  <Box>
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

const StyledForm = ({
  handleChange,
  handleSubmit,
  isLoading,
  values,
  errors,
  defaultUserCampus,
  campuses,
  serviceTimes,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx={{ _: '', md: 'base' }}
      p={{ _: 'base', md: '' }}
    >
      <Box as="h1" mb="xl" color="secondary">
        {defaultUserCampus.includes('Español')
          ? 'Recuérdame'
          : 'Set A Reminder!'}
      </Box>
      {errors?.generalError ? (
        <Box as="p" color="alert" fontSize="s" mt="-1.8rem" mb="s">
          {errors.generalError}
        </Box>
      ) : null}
      {/* General Information */}
      <Box
        display="grid"
        gridTemplateColumns={{ _: '', md: '1fr 1fr' }}
        gridColumnGap="base"
        gridRowGap={{ _: 'base', md: 'l' }}
      >
        <StyledTextInput
          id="firstName"
          name={
            defaultUserCampus.includes('Español')
              ? 'Primer Nombre'
              : 'First Name'
          }
          onChange={handleChange}
          value={values?.firstName}
          errors={errors?.firstName}
        />
        <StyledTextInput
          id="lastName"
          label="Last Name"
          name={
            defaultUserCampus.includes('Español') ? 'Apellido' : 'Last Name'
          }
          onChange={handleChange}
          value={values?.lastName}
          errors={errors.lastName}
        />
        <StyledTextInput
          id="email"
          name={
            defaultUserCampus.includes('Español')
              ? 'Correo Electrónico'
              : 'Email'
          }
          onChange={handleChange}
          value={values?.email}
          errors={errors?.email}
        />
        <StyledTextInput
          id="phoneNumber"
          name={
            defaultUserCampus.includes('Español')
              ? 'Numero de Teléfono'
              : 'Phone'
          }
          onChange={handleChange}
          value={values?.phoneNumber}
          errors={errors?.phoneNumber}
        />
        {/* Campus Select */}
        <Box>
          <Box display="flex" mb="s">
            <Box fontWeight="bold" fontSize="s" mr="s">
              Campus
            </Box>
            {!!isLoading && <Loader noLabel />}
          </Box>
          <Box display="flex" alignItems="center">
            <Select
              id="campus"
              name="campus"
              defaultValue={defaultUserCampus}
              onChange={handleChange}
              // We have currently disabled the select due to the feature only being available on two different campus. However this will most likely change in the future and we will eventually use the drop down to select other campuses.
              disabled
            >
              <Select.Option value={null}>
                {defaultUserCampus ? defaultUserCampus : 'Select a Campus'}
              </Select.Option>
              {campuses.map(({ id, name }) => {
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
        {/* Service Time Select */}
        <Box>
          <Box display="flex" mb="s">
            <Box fontWeight="bold" fontSize="s" mr="s">
              {defaultUserCampus.includes('Español')
                ? 'Horarios de Servicios'
                : 'Service Times'}
            </Box>
            {!!isLoading && <Loader noLabel />}
          </Box>
          <Box display="flex" alignItems="center">
            <Select id="serviceTime" name="serviceTime" onChange={handleChange}>
              <Select.Option value={null}>
                {defaultUserCampus.includes('Español')
                  ? 'Selecciona una hora de servicio '
                  : 'Select a Service Time'}
              </Select.Option>
              {serviceTimes.map(({ id, time }) => {
                return (
                  time && (
                    <Select.Option key={id} value={time}>
                      {time}
                    </Select.Option>
                  )
                );
              })}
            </Select>
          </Box>
          {errors?.serviceTime ? (
            <Box as="p" color="alert" fontSize="s" mt="s">
              {errors.serviceTime}
            </Box>
          ) : null}
        </Box>
      </Box>
      {errors?.networkError && (
        <Box display="flex" alignItems="center" color="alert" mb="s">
          <Icon name="settings" />
          Oops! Network error, please try again later.
        </Box>
      )}
      <Button
        id="set-reminder-submit"
        onClick={handleSubmit}
        borderRadius={50}
        size="s"
        px="l"
        mt="base"
      >
        {isLoading
          ? 'Loading...'
          : defaultUserCampus.includes('Español')
          ? 'ENVIAR'
          : 'SUBMIT'}
      </Button>
    </Box>
  );
};

StyledForm.propTypes = {};

export default StyledForm;
