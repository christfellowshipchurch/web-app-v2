import { useEffect } from 'react';
import {
  Button,
  Box,
  CardGrid,
  Cell,
  Divider,
  GroupCard,
  Loader,
  utils,
} from 'ui-kit';
import { Footer, GroupSearchFilters, Header, SEO } from 'components';
import { useGroupFilters } from 'providers/GroupFiltersProvider';
import { useSearchGroups } from 'hooks';
import { useModalDispatch, showModal } from 'providers/ModalProvider';

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');

export default function CommunitySearch() {
  const [filtersState] = useGroupFilters();
  const modalDispatch = useModalDispatch();
  const [searchGroups, { loading, groups }] = useSearchGroups({
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (!filtersState.hydrated) {
      return;
    }

    searchGroups({
      variables: {
        query: filtersState.queryParams,
      },
    });
  }, [searchGroups, filtersState.hydrated, filtersState.queryParams]);

  return (
    <>
      <SEO title="Find your Community" />
      <Box display="grid" gridTemplateRows="auto 1fr auto" height="100vh">
        <Header />
        <Cell
          width={DEFAULT_CONTENT_WIDTH}
          maxWidth={DEFAULT_CONTENT_WIDTH}
          px="base"
          py={{ _: 'l', lg: 'xl' }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="base"
          >
            <Box as="h1">Find your Community</Box>
            <Button
              as="a"
              rounded={true}
              size="s"
              variant="secondary"
              href="https://rock.gocf.org/page/2113"
            >
              Need help?
            </Button>
          </Box>
          <Divider mb="l" />
          <GroupSearchFilters loading={loading} resultsCount={groups?.length} />

          {loading && (
            <Box>
              <Loader />
            </Box>
          )}
          {!loading && Boolean(groups?.length) && (
            <CardGrid>
              {groups.map((group, index) => {
                const callToAction = {
                  call: 'Contact',
                  action: () =>
                    modalDispatch(
                      showModal('ConnectModal', {
                        leaderName: group.node?.leaders?.edges[0].node.nickName,
                        leaderAvatar:
                          group.node?.leaders?.edges[0].node.photo.uri,
                      })
                    ),
                };

                return (
                  <GroupCard
                    key={group.node?.id}
                    callToAction={callToAction}
                    campus={group.node?.campus?.name}
                    coverImage={group.coverImage?.sources[0]?.uri}
                    dateTime={group.node?.dateTime?.start}
                    groupType={group.type}
                    heroAvatars={group.node?.leaders?.edges}
                    preference={group.node?.preference}
                    subPreference={group.node?.subPreference}
                    summary={group.summary}
                    title={group.title}
                    totalAvatars={group.node?.members?.totalCount}
                  />
                );
              })}
            </CardGrid>
          )}
          {!loading && !Boolean(groups?.length) && (
            <Box>No Groups matched your search criteria.</Box>
          )}
        </Cell>
        <Footer />
      </Box>
    </>
  );
}
