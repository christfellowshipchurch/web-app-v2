import { useEffect } from 'react';
import { useRouter } from 'next/router';

import flags from 'config/flags';
import { Box, Cell, utils } from 'ui-kit';
import {
  CommunityActionSection,
  CommunityLeaderActions,
  CommunityList,
  Layout,
  SearchField,
} from 'components';
import JsonLD from 'components/JsonLD';
import {
  resetValues,
  update,
  useGroupFilters,
} from 'providers/GroupFiltersProvider';
import { CommunitiesProvider } from 'providers';
import { update as updateAuth, useAuth } from 'providers/AuthProvider';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

import Styled from './Groups.styles';
import { useForm } from 'hooks';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');

export default function Community(props = {}) {
  const router = useRouter();
  const [{ authenticated }, authDispatch] = useAuth();
  const [filtersState, filtersDispatch] = useGroupFilters();
  const modalDispatch = useModalDispatch();

  // Logic for Search bar: sets values and handles search
  const { values, handleSubmit, handleChange, setValues, reset } = useForm(
    () => {
      router.push({
        pathname: `/groups/search`,
        query: filtersState.valuesSerialized,
      });
    }
  );

  // Reset Filter State
  useEffect(() => {
    filtersDispatch(resetValues());
  }, [filtersDispatch]);

  useEffect(() => {
    if (!flags.GROUP_FINDER) router.push('/');
  }, [router]);

  useEffect(() => {
    if (filtersState.values.text.length) {
      setValues({ text: filtersState.values.text[0] });
    }
  }, [filtersState.values.text, setValues, router]);

  function ensureAuthentication(onSuccess) {
    if (!authenticated) {
      modalDispatch(showModal('Auth'));
      authDispatch(updateAuth({ onSuccess }));
    } else {
      onSuccess();
    }
  }

  function handleMyGroups(e) {
    const navigateToConnect = () => {
      router.push('/connect');
    };

    e.preventDefault();
    ensureAuthentication(navigateToConnect);
  }

  function handleOnClick() {
    router.push('/groups/search');
  }

  const handleClick = event => {
    filtersDispatch(update({ text: [values.text] }));
  };

  if (!flags.GROUP_FINDER) return null;

  return (
    <>
      <JsonLD
        schema={{
          '@type': 'WebSite',
          url: 'https://christfellowship.church/groups',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate:
                'https://christfellowship.church/groups/search?text={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        }}
      />
      <Layout
        title="Christ Fellowship Church Groups"
        seoMetaTags={{
          image: '/groups-cover-image.jpg',
          description:
            ' We want to help you find community, grow in your relationship with God, and build the kind of friendships we all need to live out our faith. Groups and classes help you know where to look for direction and have the right people encouraging you along the way.',
        }}
      >
        <Box>
          <Styled.Hero height={{ _: 300, sm: 500, md: 600, lg: 700 }}>
            <Styled.Content>
              <Box
                as="img"
                maxWidth={{ _: 350, sm: 450, md: 500, lg: 600 }}
                src="/groups-logo.png"
              />
              <SearchField
                minWidth={{ _: 'none', sm: '120%' }}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleClick={handleClick}
                handleClear={() => reset()}
                value={values.text || ''}
              />
            </Styled.Content>
          </Styled.Hero>
          <Box bg="white" textAlign="center" py="xl">
            <Box as="h1" color="secondary">
              Why Groups?
            </Box>
            <Box px="l" mx="auto" maxWidth={800}>
              You weren’t meant to do life alone. You were made for community.
              But not just any community. Groups and classes help you find
              people to do life with so that you can know where to look for
              direction, and have someone to keep you accountable and encouraged
              as you grow in your relationship with God and others.
            </Box>
          </Box>
          <Box>
            <Cell
              maxWidth={DEFAULT_CONTENT_WIDTH}
              px="base"
              py={{ _: 'm', lg: 'l' }}
            >
              <Box as="section">
                <Box
                  as="h1"
                  color="secondary"
                  textAlign="center"
                  mt={{ _: 'l', lg: 0 }}
                >
                  Discover All Kinds of Groups
                </Box>
                <Box as="p" textAlign="center" mb="l">
                  Tap on a group category below to see what’s available.
                </Box>
                <CommunitiesProvider Component={CommunityList} />
              </Box>
            </Cell>
          </Box>
          <CommunityActionSection handleOnClick={handleOnClick} />
          <CommunityLeaderActions />
        </Box>
      </Layout>
    </>
  );
}
