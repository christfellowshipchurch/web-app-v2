import { useEffect } from 'react';
import { useRouter } from 'next/router';

import flags from 'config/flags';
import { Box, Cell, utils } from 'ui-kit';
import {
  CommunityActionSection,
  CommunityLeaderActions,
  CommunityList,
  Footer,
  Header,
  SearchField,
  SEO,
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

import Styled from './Community.styles';
import { useForm } from 'hooks';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');

export default function Community(props = {}) {
  const router = useRouter();
  const [{ authenticated }, authDispatch] = useAuth();
  const [filtersState, filtersDispatch] = useGroupFilters();
  const modalDispatch = useModalDispatch();

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

  // Reset Filter State
  useEffect(() => {
    filtersDispatch(resetValues());
  }, [filtersDispatch]);

  useEffect(() => {
    if (!flags.GROUP_FINDER) router.push('/');
  }, [router]);

  function handleOnClick() {
    router.push('/groups/search');
  }

  if (!flags.GROUP_FINDER) return null;

  // Logic for Search bar: sets values and handles search
  const { values, handleSubmit, handleChange, setValues, reset } = useForm(
    () => {
      router.push({
        pathname: `/groups/search`,
        query: filtersState.valuesSerialized,
      });
    }
  );

  useEffect(() => {
    if (filtersState.values.text.length) {
      setValues({ text: filtersState.values.text[0] });
    }
  }, [filtersState.values.text, setValues, router]);

  const handleClick = event => {
    filtersDispatch(update({ text: [values.text] }));
  };

  return (
    <>
      <SEO
        title="Christ Fellowship Church Groups"
        image="/groups-cover-image.jpg"
        description=" We want to help you find community, grow in your relationship with
        God, and build the kind of friendships we all need to live out our
        faith. Groups and classes help you know where to look for
        direction and have the right people encouraging you along the way."
      />
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
      <Box display="grid" gridTemplateRows="auto 1fr auto" height="100vh">
        <Header />
        <Styled.Hero>
          <Styled.Content mx="base">
            <Styled.Title px="s">Groups & Classes</Styled.Title>
            <Styled.Subtitle>Life is Better Together</Styled.Subtitle>
            <SearchField
              boxShadow="0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
              0 1px 3px rgba(0, 0, 0, 0.3)"
              maxWidth={800}
              mx="auto"
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleClick={handleClick}
              handleClear={() => reset()}
              value={values.text || ''}
              mb="base"
            />
            <Box
              fontStyle="italic"
              fontSize={{ _: '16px', md: '20px' }}
              color="white"
            >
              Already in a group?{' '}
              <Box
                as="a"
                color="white"
                onClick={handleMyGroups}
                href="/connect"
              >
                Log in
              </Box>{' '}
              to see your groups.
            </Box>
            <Box
              fontStyle="italic"
              fontSize={{ _: '16px', md: '20px' }}
              color="white"
            >
              Interested in starting a Group?{' '}
              <Box
                as="a"
                color="white"
                target="_blank"
                href="https://rock.christfellowship.church/groups/starting-a-group"
              >
                Learn More
              </Box>{' '}
            </Box>
          </Styled.Content>
        </Styled.Hero>
        <Box bg="white" textAlign="center" py="xl">
          <Box as="h1" color="secondary">
            Why Groups?
          </Box>
          <Box px="l" mx="auto" maxWidth={800}>
            You weren’t meant to do life alone. You were made for community. But
            not just any community. Groups and classes help you find people to
            do life with so that you can know where to look for direction, and
            have someone to keep you accountable and encouraged as you grow in
            your relationship with God and others.
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
        <Footer />
      </Box>
    </>
  );
}
