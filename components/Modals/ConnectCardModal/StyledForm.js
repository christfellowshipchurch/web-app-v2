import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Checkbox, Icon, Loader, Select, TextInput } from 'ui-kit';

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

const StyledCheckBox = props => (
  <Box display="flex" mt="s">
    <Checkbox id={props?.id} size={18} onChange={props?.onChange} mr="s" />
    <Box as="p" mt="0.2rem">
      {props?.text}
    </Box>
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
}) => {
  const [showOther, setShowOther] = useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx={{ _: '', md: 'xs' }}
      p={{ _: 'base', md: '' }}
      pt={0}
    >
      <Box as="h1" mb="base" color="secondary">
        Get Connected
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
          errors={errors.lastName}
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
        <Box>
          <Box display="flex" mb="s">
            <Box fontWeight="bold" fontSize="s" mr="s">
              Campus
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
        {/* Made a Decision */}
        <Box display="flex" pt={25}>
          <Checkbox
            id="madeDecision"
            size={18}
            onChange={handleChange}
            mr="s"
          />
          <Box as="p" mt="0.1rem" fontWeight="bold" color="secondary">
            I made a decision to follow Christ today{' '}
          </Box>
        </Box>
      </Box>
      {/* All that Applies */}
      <Box display="grid" gridRowGap="s" textAlign="left" my="l" mr="auto">
        <Box as="p" fontStyle="italic">
          I am looking to:
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{ _: '', md: '1fr 1fr' }}
          gridColumnGap="base"
        >
          <Box mb="xs">
            <StyledCheckBox
              id="findCommunity"
              onChange={handleChange}
              text="Find meaningful community."
            />
            <StyledCheckBox
              id="growFaith"
              onChange={handleChange}
              text="Grow in my faith."
            />
            <StyledCheckBox
              id="placeForKids"
              onChange={handleChange}
              text="Find a fun place for my kid(s) to grow and make friends."
            />
            <StyledCheckBox
              id="strongerMarriage"
              onChange={handleChange}
              text="Make my marriage stronger than it’s ever been."
            />
          </Box>
          <Box>
            <StyledCheckBox
              id="improveFinances"
              onChange={handleChange}
              text="Improve my finances."
            />
            <StyledCheckBox
              id="useMyGifts"
              onChange={handleChange}
              text="Use my gifts by serving on the Dream Team."
            />
            <StyledCheckBox
              id="discoverAtTheJourney"
              onChange={handleChange}
              text="Discover what's next for me at The Journey."
            />
            <StyledCheckBox
              id="other"
              onChange={() => {
                setShowOther(!showOther);
                handleChange;
              }}
              text="Other."
            />
          </Box>
        </Box>

        <Box>
          {showOther && (
            <>
              <Box mt="base" as="p" px="s" fontStyle="italic">
                I am looking to: (Other)
              </Box>

              <Box maxWidth={300}>
                <StyledTextInput
                  id="otherText"
                  onChange={handleChange}
                  value={values?.otherText}
                  errors={errors?.otherText}
                />
              </Box>
            </>
          )}
        </Box>
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

StyledForm.propTypes = {};

export default StyledForm;
