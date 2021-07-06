import Styled from './MetadataCallout.styles';
import { Box, Button } from 'ui-kit';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PageSplit from 'components/PageSplit';

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
        <PageSplit title="Details" />
      </Styled.CalloutHeader>
      <Styled.CalloutDetails>
        <Styled.CalloutDetailsList>
          {metadata.time && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel>
                Time
              </Styled.CalloutDetailsListItemLabel>
              <Box>{metadata.time}</Box>
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.schedule && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel>
                Schedule
              </Styled.CalloutDetailsListItemLabel>
              <Box>{metadata.schedule}</Box>
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.deadline && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel>
                Signup Deadline
              </Styled.CalloutDetailsListItemLabel>
              <Box>{metadata.deadline}</Box>
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.forWho && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel>
                For Who
              </Styled.CalloutDetailsListItemLabel>
              <Box>{metadata.forWho}</Box>
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.isMembershipRequired && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel>
                Membership Required
              </Styled.CalloutDetailsListItemLabel>
              <Box>{metadata.isMembershipRequired}</Box>
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.groupEventType && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel>
                Group Type
              </Styled.CalloutDetailsListItemLabel>
              <Box>{metadata.groupEventType}</Box>
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.daysAvailable && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel>
                Days Available
              </Styled.CalloutDetailsListItemLabel>
              <Box>{metadata.daysAvailable}</Box>
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.ministry && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel>
                Ministry
              </Styled.CalloutDetailsListItemLabel>
              <Box>{metadata.ministry}</Box>
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.serviceArea && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel>
                Service Area
              </Styled.CalloutDetailsListItemLabel>
              <Box>{metadata.serviceArea}</Box>
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.opportunityType && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel>
                Opportunity Type
              </Styled.CalloutDetailsListItemLabel>
              <Box>{metadata.opportunityType}</Box>
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.relatedSkills && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel>
                Related Skills
              </Styled.CalloutDetailsListItemLabel>
              <Box>{metadata.relatedSkills}</Box>
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.childcareInfo && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel>
                Childcare Info
              </Styled.CalloutDetailsListItemLabel>
              <Box>{metadata.childcareInfo}</Box>
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.location && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel
                onClick={() => {
                  if (metadata.gps) {
                    router.push(
                      `https://www.google.com/maps/place/${metadata.gps}`
                    );
                  }
                }}
              >
                Location
              </Styled.CalloutDetailsListItemLabel>
              <Box>
                {metadata.gps ? (
                  <Link
                    href={`https://www.google.com/maps/place/${metadata.gps}`}
                  >
                    {metadata.location}
                  </Link>
                ) : (
                  `${metadata.location}`
                )}
              </Box>
            </Styled.CalloutDetailsListItem>
          )}
          {metadata.contact && (
            <Styled.CalloutDetailsListItem>
              <Styled.CalloutDetailsListItemLabel>
                Contact
              </Styled.CalloutDetailsListItemLabel>
              <Box>{metadata.contact}</Box>
            </Styled.CalloutDetailsListItem>
          )}
        </Styled.CalloutDetailsList>
        <Box display="flex" justifyContent="center">
          {feature?.title && feature?.relatedNode?.url ? (
            <Button
              mt="l"
              fontWeight="bold"
              fontFamily="heading"
              fontSize="h5"
              lineHeight="h5"
              borderRadius="xl"
              onClick={() => router.push(feature?.relatedNode?.url)}
            >
              {feature?.title}
            </Button>
          ) : null}
        </Box>
      </Styled.CalloutDetails>
    </Styled.Callout>
  );
}
