import React, { useEffect } from 'react';
import { Box, Button, Icon, Loader, Select, TextInput } from 'ui-kit';

const DEFAULT_FORM_LABELS = {
  title: 'Set A Reminder!',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  phoneNumber: 'Phone Number',
  serviceTime: 'Service Time',
  selectServiceTime: 'Select a Service Time',
  submit: 'SUBMIT',
};

const SPANISH_FORM_LABELS = {
  title: 'Recuérdame',
  firstName: 'Primer Nombre',
  lastName: 'Apellido',
  email: 'Correo Electrónico',
  phoneNumber: 'Número de Teléfono',
  serviceTime: 'Horarios de Servicios',
  selectServiceTime: 'Selecciona una hora de servicio',
  submit: 'ENVIAR',
};

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
  const isSpanish = defaultUserCampus.includes('Español');
  const formLabels = isSpanish ? SPANISH_FORM_LABELS : DEFAULT_FORM_LABELS;

  useEffect(() => {
    if (!window.location.pathname.includes('set-reminder-opened')) {
      window.location = '#set-reminder-opened';
    }
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx={{ _: '', md: 'base' }}
      p={{ _: 'base', md: '' }}
    >
      <Box as="h1" mb="xl" color="secondary">
        {formLabels.title}
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
          name={formLabels.firstName}
          onChange={handleChange}
          value={values?.firstName}
          errors={errors?.firstName}
        />
        <StyledTextInput
          id="lastName"
          label="Last Name"
          name={formLabels.lastName}
          onChange={handleChange}
          value={values?.lastName}
          errors={errors.lastName}
        />
        <StyledTextInput
          id="email"
          name={formLabels.email}
          onChange={handleChange}
          value={values?.email}
          errors={errors?.email}
        />
        <StyledTextInput
          id="phoneNumber"
          name={formLabels.phoneNumber}
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
              {formLabels.serviceTime}
            </Box>
            {!!isLoading && <Loader noLabel />}
          </Box>
          <Box display="flex" alignItems="center">
            <Select id="serviceTime" name="serviceTime" onChange={handleChange}>
              <Select.Option value={null}>
                {formLabels.selectServiceTime}
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
        {isLoading ? 'Loading...' : formLabels.submit}
      </Button>
    </Box>
  );
};

StyledForm.propTypes = {};

export default StyledForm;
