import gql from 'graphql-tag';

const METADATA_FRAGMENT = gql`
  fragment MetadataFragment on UniversalContentItem {
    time
    schedule
    deadline
    forWho
    isMembershipRequired
    groupEventType
    daysAvailable
    ministry
    serviceArea
    opportunityType
    relatedSkills
    childcareInfo
    location {
      name
      address
      latitude
      longitude
    }
    contactName
    contactEmail
    contactPhone
    featureFeed {
      features {
        ... on ButtonFeature {
          action {
            title
            relatedNode {
              id
              ... on Url {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default METADATA_FRAGMENT;
