import Styled from './MetadataCallout.styles';
import { Button, Heading } from 'ui-kit';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import Link from 'next/link';

const getDataFn = data => key => {
  const datum = data[key];

  return Array.isArray(datum) && datum?.length < 1 ? null : datum;
};

export default function MetadataCallout({ data }) {
  const router = useRouter();

  const feature = data?.featureFeed?.features?.[0]?.action;

  const getData = getDataFn(data);
  const getLocationData = getDataFn(getData('location'));
  const metadata = {
    time: getData('time'),
    schedule: getData('schedule'),
    deadline: getData('deadline'),
    forWho: getData('forWho'),
    isMembershipRequired: getData('isMembershipRequired'),
    groupEventType: getData('groupEventType'),
    daysAvailable: getData('daysAvailable'),
    ministry: getData('ministry'),
    serviceArea: getData('serviceArea'),
    opportunityType: getData('opportunityType'),
    relatedSkills: getData('relatedSkills'),
    childcareInfo: getData('childcareInfo'),
    location: [getLocationData('name'), getLocationData('address')]
      .filter(loc => Boolean(loc))
      .join(' '),
    gps:
      getLocationData('latitude') && getLocationData('longitude')
        ? [getLocationData('latitude'), getLocationData('longitude')].join(',')
        : null,
    contact: [
      getData('contactName'),
      getData('contactEmail'),
      getData('contactPhone'),
    ]
      .filter(con => Boolean(con))
      .join(', '),
  };

  return (
    <Styled.Callout>
      <Styled.CalloutHeader>
        <Styled.CaretCircleDown color="#FFFFF" size={64} weight="fill" />
        <Heading variant="h2" color="white" ml="xs">
          Details!
        </Heading>
      </Styled.CalloutHeader>
      <Styled.CalloutDetails>
        <Styled.CalloutDetailsList>
          {metadata.time && (
            <Styled.CalloutDetailsListItem>
              Time: {metadata.time}
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.schedule && (
            <Styled.CalloutDetailsListItem>
              Schedule: {metadata.schedule}
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.deadline && (
            <Styled.CalloutDetailsListItem>
              Signup Deadline:{' '}
              {format(new Date(metadata.deadline), 'MM/dd/yyyy')}
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.forWho && (
            <Styled.CalloutDetailsListItem>
              For Who: {metadata.timforWho}
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.isMembershipRequired && (
            <Styled.CalloutDetailsListItem>
              Membership Required: {metadata.isMembershipRequired}
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.groupEventType && (
            <Styled.CalloutDetailsListItem>
              Group Type: {metadata.groupEventType}
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.daysAvailable && (
            <Styled.CalloutDetailsListItem>
              Days Available: {metadata.daysAvailable}
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.ministry && (
            <Styled.CalloutDetailsListItem>
              Ministry: {metadata.ministry}
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.serviceArea && (
            <Styled.CalloutDetailsListItem>
              Service Area: {metadata.serviceArea}
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.opportunityType && (
            <Styled.CalloutDetailsListItem>
              Opportunity Type: {metadata.opportunityType}
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.relatedSkills && (
            <Styled.CalloutDetailsListItem>
              Related Skills: {metadata.relatedSkills}
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.childcareInfo && (
            <Styled.CalloutDetailsListItem>
              Childcare Info: {metadata.childcareInfo}
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.location && (
            <Styled.CalloutDetailsListItem
              onClick={() => {
                if (metadata.gps) {
                  router.push(
                    `https://www.google.com/maps/place/${metadata.gps}`
                  );
                }
              }}
            >
              Location:{' '}
              {metadata.gps ? (
                <Link
                  href={`https://www.google.com/maps/place/${metadata.gps}`}
                >
                  {metadata.location}
                </Link>
              ) : (
                `${metadata.location}`
              )}
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.contact && (
            <Styled.CalloutDetailsListItem>
              Contact: {metadata.contact}
            </Styled.CalloutDetailsListItem>
          )}
          {feature?.title && feature?.relatedNode?.url ? (
            <Button
              mt="l"
              fontWeight="bold"
              fontFamily="heading"
              fontSize="h5"
              lineHeight="h5"
              onClick={() => router.push(feature?.relatedNode?.url)}
            >
              {feature?.title}
            </Button>
          ) : null}
        </Styled.CalloutDetailsList>
      </Styled.CalloutDetails>
    </Styled.Callout>
  );
}
