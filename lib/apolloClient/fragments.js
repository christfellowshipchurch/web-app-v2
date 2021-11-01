import { gql } from '@apollo/client';

export const METADATA_FRAGMENT = gql`
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
    finePrint
    contactName
    contactEmail
    contactPhone
    cost
    tripType
    closedInstructions
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

export const BASE_CONTENT_ITEM = gql`
  fragment BaseContentItem on ContentItem {
    id
    title
    summary
    htmlContent
    publishDate
    parentChannel {
      id
    }
    coverImage {
      ...Sources
    }
    sharing {
      url
    }
    siblingContentItemsConnection {
      edges {
        node {
          id
          title
          summary
          publishDate
          coverImage {
            ...Sources
          }
          sharing {
            url
          }
        }
      }
    }
  }
`;

export const SOURCES = gql`
  fragment Sources on Media {
    sources {
      uri
    }
  }
`;

export const WITH_MEDIA = gql`
  fragment WithMedia on ContentItem {
    videos {
      ...Sources
    }
  }
`;

export const PERSON_FRAGMENT = gql`
  fragment PersonFragment on Person {
    id
    photo {
      uri
    }
  }
`;

export const GROUP_ITEM_FRAGMENT = gql`
  fragment GroupItemFragment on VolunteerGroup {
    id
    title
    summary
    groupType
    groupResources {
      title
      action
      relatedNode {
        id
        ... on Url {
          url
        }
      }
    }
    coverImage {
      ...Sources
    }

    leaders: people(isLeader: true, first: 3) {
      edges {
        node {
          ...PersonFragment
        }
      }
      totalCount
    }
    members: people(isLeader: false, first: 4) {
      edges {
        node {
          ...PersonFragment
        }
      }
      totalCount
    }
  }
`;

export const GROUP_FRAGMENT = gql`
  fragment GroupFragment on Group {
    id
    title
    groupType
    summary
    schedule {
      friendlyScheduleText
    }
    coverImage {
      ...Sources
    }
    groupResources {
      title
      url
      contentChannelItem
    }
    dateTime {
      start
      end
    }
    leaders: people(isLeader: true, first: 3) {
      edges {
        node {
          ...PersonFragment
        }
      }
      totalCount
    }
    members: people(isLeader: false, first: 4) {
      edges {
        node {
          ...PersonFragment
        }
      }
      totalCount
    }
  }
`;
