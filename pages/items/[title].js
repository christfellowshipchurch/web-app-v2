import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';

import { LegacyNodeRouter, ContentLayout, Layout } from 'components';
import ContentVideo from '../../components/ContentSingle/ContentVideo';
import { Box, Button, Card, Loader } from 'ui-kit';

import { gql, useQuery } from '@apollo/client';

export const CONTENT_ITEM_FRAGMENT = gql`
  fragment contentItemFragment on ContentItem {
    id
    title
    summary
    htmlContent
    coverImage {
      name
      sources {
        uri
      }
    }
    theme {
      type
      colors {
        primary
        secondary
        screen
        paper
      }
    }
    parentChannel {
      id
      name
    }
    videos {
      key
      name
      sources {
        uri
      }
    }
    audios {
      sources {
        uri
      }
    }
  }
`;

export const EVENT_ITEM_FRAGMENT = gql`
  fragment eventContentItemFragment on EventContentItem {
    eventGroupings {
      name
      instances {
        id
        start
        end
      }
    }
    labelText
    callsToAction {
      call
      action
    }
  }
`;

export const PUBLISH_FRAGMENT = gql`
  fragment publishFragment on ContentItem {
    ... on ContentSeriesContentItem {
      author {
        firstName
        lastName
        photo {
          uri
        }
      }
      estimatedTime
      publishDate
    }
    ... on UniversalContentItem {
      author {
        firstName
        lastName
        photo {
          uri
        }
      }
      estimatedTime
      publishDate
    }
    ... on DevotionalContentItem {
      author {
        firstName
        lastName
        photo {
          uri
        }
      }
      estimatedTime
      publishDate
    }
    ... on MediaContentItem {
      author {
        firstName
        lastName
        photo {
          uri
        }
      }
      estimatedTime
      publishDate
    }
  }
`;

export const INFORMATIONAL_ITEM_FRAGMENT = gql`
  fragment informationalContentItemFragment on InformationalContentItem {
    callsToAction {
      call
      action
    }
  }
`;

export const GET_CONTENT_ITEM = gql`
  query getContentItem($id: ID!) {
    node(id: $id) {
      id
      __typename
      ... on ContentItem {
        ...contentItemFragment
        ...eventContentItemFragment
        ...informationalContentItemFragment
        ...publishFragment
      }

      ... on FeaturesNode {
        featureFeed {
          id
          features {
            id
          }
        }
      }
    }
  }

  ${EVENT_ITEM_FRAGMENT}
  ${CONTENT_ITEM_FRAGMENT}
  ${PUBLISH_FRAGMENT}
  ${INFORMATIONAL_ITEM_FRAGMENT}
`;

/**
 * note : This file exists for backwards compatibility
 *
 * /items/item-name-9f59c65055fec6cd0292deb993711bf5
 * redirects to new, prettier content url
 */

function getItemId(slug) {
  if (!slug) return null;

  const id = slug.split('-').pop();
  return `InformationalContentItem:${id}`;
}

export default function Item() {
  const router = useRouter();
  const { title } = router.query;
  const itemId = getItemId(title);

  // ! WARNING: this is a very temporary fix for a bad email that was sent out.
  /** This is a redirect for Group Finder */
  if (itemId === 'InformationalContentItem:42eda0fe3fbf3f200a2872df727d4440') {
    router.push('/groups');
  }

  const { loading, data } = useQuery(GET_CONTENT_ITEM, {
    variables: { id: itemId },
    fetchPolicy: 'network-only',
    skip: isEmpty(itemId),
  });

  const node = data?.node;

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        width="100%"
        minHeight="50vh"
      >
        <Loader />
      </Box>
    );
  }

  return (
    <Layout title={title}>
      <ContentLayout
        title={node?.title}
        summary={node?.summary}
        coverImage={
          node?.videos.length > 0 ? null : node?.coverImage?.sources[0]?.uri
        }
        htmlContent={node?.htmlContent}
        features={[]}
        renderA={() => (
          <ContentVideo
            video={node?.videos[0]}
            poster={node?.coverImage?.sources[0]?.uri}
          />
        )}
        renderContentE={() =>
          node?.callsToAction?.length > 0 && (
            <Card
              boxShadow="base"
              display="flex"
              flexDirection="column"
              p={{ _: 's', md: 'base' }}
            >
              {node?.callsToAction?.map((n, i) => (
                <Button
                  as="a"
                  href={n.action}
                  key={i}
                  mb={i === node?.callsToAction?.length - 1 ? '0' : 's'}
                  target={n.action.includes('http') ? '_blank' : ''}
                >
                  {n.call}
                </Button>
              ))}
            </Card>
          )
        }
      />
    </Layout>
  );
}
