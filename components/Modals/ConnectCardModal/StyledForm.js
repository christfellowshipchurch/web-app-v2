import { useQuery } from '@apollo/client';
import { React, useState } from 'react';
import { Box, Button, Checkbox, Icon, Loader, Select, TextInput } from 'ui-kit';
import { GET_DEFINED_VALUE_LIST } from 'hooks/useDefinedValueList';

// DefineType Id for the checkbox values
const CHECKBOX_VALUES_ID = '389';

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
  <Box display="flex" mt="1rem">
    <Checkbox id={props?.id} size={18} onChange={props?.onChange} mr="s" />
    <Box as="p">{props?.text}</Box>
  </Box>
);

const StyledCheckBoxList = ({ data, handleChange, handleHook }) => {
  return (
    data?.length &&
    data?.map(value => (
      <StyledCheckBox
        id={value?.guid}
        // If checkbox is "other" then show the text input by calling the handleHook function
        onChange={
          value?.value === 'Other'
            ? e => {
                handleChange(e);
                handleHook();
              }
            : handleChange
        }
        text={value?.value}
      />
    ))
  );
};

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
  /**
   * todo : For some reason, the DefinedValueListProvider is not working here or any provider for that matter. I am not sure why, but I am going to use the useQuery hook instead. We'll want to come back to this and figure out why the provider is not working.
   */
  const checkBoxData = useQuery(GET_DEFINED_VALUE_LIST, {
    variables: { id: CHECKBOX_VALUES_ID },
  });

  const allCheckBoxValues =
    checkBoxData?.data?.getDefinedValueListByIdentifier?.values;

  const nextStepValues = allCheckBoxValues?.filter(
    value => value?.value === 'Baptism' || value?.value === 'The Journey class'
  );

  const defaultValues = allCheckBoxValues?.filter(
    value => value?.value !== 'Baptism' && value?.value !== 'The Journey class'
  );

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
              {campuses.map((campus, index) => {
                return (
                  <Select.Option key={`campus-${index}`} value={campus}>
                    {campus}
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
        {/* Birth Date Field - not using for now */}
        {/* <Box>
          <BirthDateField
            required={false}
            onChange={handleChange}
            error={errors?.birthDate}
          />
        </Box> */}
        {/* Gender Field - not using for now */}
        {/* <Box>
          <GenderField onChange={handleChange} initialValue={values?.gender} />
        </Box> */}
        {/* Made a Decision */}
        <Box display="flex" pt="2rem">
          <Checkbox
            id="madeDecision"
            size={18}
            onChange={handleChange}
            mr="s"
          />
          <Box as="p" mb="base" fontWeight="bold" color="secondary">
            I recently made a decision to follow Jesus!
          </Box>
        </Box>
      </Box>
      {/* All that Applies */}
      <Box
        display="grid"
        gridColumnGap="base"
        gridRowGap="s"
        textAlign="left"
        my="l"
        mr="auto"
        maxWidth={650}
      >
        <Box as="p" fontWeight="bold">
          I am looking to:
        </Box>
        <Box as="p" mb="-0.8rem" fontStyle="italic">
          Take the next step in my faith through…
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ gap: '1rem' }}
        >
          {nextStepValues && (
            <StyledCheckBoxList
              data={nextStepValues}
              handleChange={handleChange}
              handleHook={() => setShowOther(!showOther)}
            />
          )}
        </Box>
        <Box>
          {defaultValues && (
            <StyledCheckBoxList
              data={defaultValues}
              handleChange={handleChange}
              handleHook={() => setShowOther(!showOther)}
            />
          )}
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{ _: '', md: '1fr 1fr' }}
          gridColumnGap="base"
        ></Box>

        <Box>
          {showOther && (
            <>
              <Box mt="xs" as="p" px="s" fontStyle="italic">
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
          <Icon name="settings" />
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
