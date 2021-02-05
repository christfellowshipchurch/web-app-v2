import {
  ArticleLink,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  ValuesRow,
} from 'components';
import { Box, CardGrid, Heading, Icon } from 'ui-kit';
import { noop } from 'utils';

export default function Baptism() {
  const mainHeaderData = {
    src:
      'https://s3-alpha-sig.figma.com/img/cab4/7ddb/3256aae6b201200b9ac5194a5f1ba981?Expires=1613347200&Signature=a2AfLdvnWzAtFV7rnPt7yFC-wvSN57trgf~X5DGT55eCkucDF8onW31uk1vkiBr81KIBj1Ef3qmoxmWz8~OSldrM5yB5K4GpNS0ModS3wrpVefVlfKKKW0xehJZoS-8HdCvW7aZ02efL5eR1g3N0JREKE~M2pZnfVh-HUPfLed6y-pGjFW1fe8D5MmNeV~AONFTQ88I4wJL5yR9ZnW31uggsXQrAnAIvj~vJ--P2gIEI4jd0GaM4pCAVwOh59bs7yshHpCLqOC6DOBG-6CCpMs-pVC2kOVKa5L7S0BJTippK9GXCVzZ4FMFfy~2lvBGLKZs0hHi2DTzRNFwAspRaJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'LH Volunteer',
    description: 'Lorem ipsum doler sit itmut del fal some big bold header.',
    details: 'Lorem ipsum doler sit itmut del fal some big bold header.',
  };

  const explorations = [
    {
      title: 'LH Kids',
      description:
        'Help children from infancy through fifth grade come to know God, find community, make disciples, and change the world.',
      url: '/',
      urlText: 'Learn More',
      imageSrc:
        'https://s3-alpha-sig.figma.com/img/c43d/45ae/1ffb3890bf4027ea8b1f63ba47b00aef?Expires=1613347200&Signature=BXoRpRBHmW6p75c06bdfDZ1xy6sOyuCus~r~II37FBfx9deP1F-myELy~k8ex90DhGXPq6FPBJ7Kv-40pseAn3jT1q-KXpPc-4DYSb8ucEhuMQ9EwnJKagr5dAsg9HbkaaYJJLpe3wqgoYcX9VGAXFupw6Y17mkPDglYBCqyQpHZ0AAfIzBg~PCuZpYosBTOBTqZcUOE5UvSl1nRwAOa1aqu7VFyeP4qn0izfWdfXpexXZAwkF10a0S9TOvM-MDaXepj7y8Av5QYVhrgYtT6Hi2aHFU6sW2PcR4VIXRFc8GKC3pl4TwGVsoehD6ikJLLNBEST2de7tNmGp~yGyyAEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      title: 'LH Students',
      description:
        'Create a safe place for middle schoolers and high schoolers to learn how to approach life’s challenges. ',
      url: '/',
      urlText: 'Learn More',
      imageSrc:
        'https://s3-alpha-sig.figma.com/img/1a2d/90b2/9afdd4e85ba5391a4b815d74a4d6e7c7?Expires=1613347200&Signature=TyZ3XOyAiNFcwuzg8VAJ~s519~eV4XK1RzdLh7qNdE4GJhiEIJEs97EGQ7H594tavrCufidONoSg8JTJayiE8QPdCnAdXm1obIi8-vdnLjxajfmvzOs6pXvj0EBHfkos3ScK3~A0KcWxQMmtBk3qZ5gQUkyIlx~X5AnydtRKhT83swZ1swzkJT3Uo5W0jeUIDSwmBDRA9Fzay6po7OTlglZzHf0xeAATCvD2V84sAe4bqATk0Y4XENuWlsV~bP-q9co2EZS0iNClMmgOTP-~AeaLZYNCsoNweqEPzJl~PZFDTrIOMo0FdRS2gN4JUadBPGESt3ofvHBuvPtMZRq4jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      title: 'Still Not Sure?',
      description:
        'If you’re ready to volunteer at Long Hollow but not sure where, fill out this form, and a member of our team will reach out.',
      url: '/',
      urlText: 'Fill Out Form',
      imageSrc:
        'https://s3-alpha-sig.figma.com/img/493d/14c0/d6d582397dad7960aa07123f3af3ec17?Expires=1613347200&Signature=TDuWDUy5teWj54TVEDQSy9lCKrTMgL7pjyteSnfVqSOrvs0~80ZNfBfLNzkX13FNtWzYwWh~D2X2CtU1wwqAQmY1zKMuY2jlr3JaOogDgpox34wQXAIKEWMP~A2FHGJeo-MJGbOosATXx5CDDckudoTDSTubblFsbxvBpd4gdOSZnmqL9dC64yzVHaugN~I~OkxosAkaszTzmjD3KSDkTtZIdNXQkxEpe5hIR0qF6Omems5VWz9T9kdCdX5i7pUiMjh7mjc1Xx2w1jOn9B~1q54g7XzkIA8R3uSbyDoAlPvT0U6bQUtP4y29M50GAKa0hRHpHs08d4TDBaUZ8PWSKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      title: 'Guest Services',
      description:
        'Help us provide a great first impression and experience to the many guests who attend Long Hollow each week.',
      url: '/',
      urlText: 'Learn More',
      imageSrc:
        'https://s3-alpha-sig.figma.com/img/0d82/7d3f/51b6ba5bfd1213362751127b04d079ac?Expires=1613347200&Signature=VNC3Af2XQ2IRvCGXoyx3amM7Zo0GZefoZ4hP98Hf-Yl24w1dnSMaRSAzSC3E7Tr~WmTNO55YTCYVEY1U1kIV3unTgab5gugy-7tK~aZbGdEdyS3-R18BY0nsQRAc9RGiiwk6AXGJG-7nJwvFdB0UmlmMrPDiogaSNSl9pTI2XA4javwitAe3oK~XpWQw9R46viXVtb-X5fEcBY3VaFAqKYm5~a4EMhq4wfPi7Nvazn6G5kyjy4xMp~7c28BjitM01r-rogaPSB1l7lev206csO-iyNrQsksYE8Ws5etyCit8Hlg4DbshEpog4oqBrY2-~KXE2XSrwsCkQfoSQ~60mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      title: 'Production Team',
      description:
        'Create dynamic, life-changing experiences and atmospheres, whether it be with videos, stage designs, sermon illustrations, etc.',
      url: '/',
      urlText: 'Learn More',
      imageSrc:
        'https://s3-alpha-sig.figma.com/img/0842/5475/60710b0079e969d808e11f9f264f2f2b?Expires=1613347200&Signature=J4i~d49wnOTtBS5Jmq-WFwdgfgo3JPGtnlMeNZNHMGlhItGcd5m4GmIdqOwl~ZZIfm3evPd5DdaqACZINgu60iB5qQzzV8RRvpUuTdc9q2o~IWnltA5p~LU0ayIYqF2WI-W8WeMSYNu~d2wY3b2AT9Q~CtXa79GEANsIdTCgHSZj1ILrjK0-Nrw0jvs3btFGSYTkhFsZIdP6-ZKUoRlTVdJQdOXUjWHm~EIseL-B0FEkttP4oyNjqgylZRZiSLtAtm6ahQ8X2T51YhKBO~0fGS-9CFlj9d7QkXkwtDRPbkwFUXRmpcqCMHGjT6zrUD2zIuW3kaFC9Q5DgD9n1ah1Kw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      title: 'Worship Team',
      description:
        'Sunday worship, LH Kids services, Celebrate Recovery on Mondays, LH Students on Wednesdays, and LH College on Thursdays.',
      url: '/',
      urlText: 'Learn More',
      imageSrc:
        'https://s3-alpha-sig.figma.com/img/e480/facf/ad64410752a9e72b55cda3a8f98b47a9?Expires=1613347200&Signature=J4Yupw-QpAAj5sClZGLb5KZIdA13IzMOfWHFHGwhxQsqHuUwE6RH2uUEHETIpfvPmSILVx7PLzEijrcWbtJ9JZiykfPZh9t2Vd2TXgC9yUT9Rf1pVkvw0kXqYv1cN3RXXFCmR6reNfF8JuSa7KU2EXVrT2DM9r8dUv79sNpMkGD5ErE~F81p4o7~lP~gxLxE6pra2xGZsevGhyCERDV2waQ405J3G53WUMgfl7q93TgYZLI5POhrF4Z-gwN9LD-WL0vxjbxh9xmUWSXnnXGyhFb8i8yw5hr22Tdk1Oo1fEiVGZAzUGzknW42b2qz--Tyh-vFFQsOo9zt0mfbDRllzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
  ];

  const exploreColumns = [[], []];

  for (let i = 0; i < explorations.length; ++i) {
    if (i < explorations.length / 2) {
      exploreColumns[0].push(explorations[i]);
    } else {
      exploreColumns[1].push(explorations[i]);
    }
  }

  const exploreRowCount = exploreColumns[0].length;

  return (
    <Layout title="Next Steps - Volunteer" bg="bg_alt">
      <MainPhotoHeader
        src={mainHeaderData.src}
        content={
          <Box position="absolute" left="97px" bottom="73px" maxWidth="440px">
            <Heading
              color="neutrals.100"
              variant="h2"
              opacity="50%"
              fontWeight="800"
            >
              {mainHeaderData.title}
            </Heading>
            <Heading
              color="neutrals.100"
              variant="h1"
              fontWeight="800"
              textTransform="uppercase"
            >
              {mainHeaderData.description}
            </Heading>
            <Heading
              color="neutrals.100"
              variant="h3"
              fontWeight="700"
              maxWidth="360px"
            >
              {mainHeaderData.details}
            </Heading>
          </Box>
        }
      />
      <CardGrid px="xxl" my="xxl" columns="1" gridRowGap="xxl">
        <MarketingHeadline
          image={{
            src:
              'https://s3-alpha-sig.figma.com/img/3526/9767/a819891e9f977628a5237523f626cf8d?Expires=1613347200&Signature=EPA6ixPcjSd39uz3vjuL5qadMORGgopP-LqtE3vSN1Zrs2bQCWLRpKZHUyX1F9xdiSN3k9f8uX3qSB~31hEwuM2UcJ1dzyw722vDH6hOoamjLAfMSK3lqWqh4EYnfsGpftf4mAUHs-l0UqSjNf6fAf2KB3ywHj4jq4ilZzcUD4-lVpzfXakldgzbY3LddrGoPHOhYfQTkUMKa56gqRdbgDoi2jMoJ-8C~PPhzLVx5QsTs6DzjStBeZLkmOAHpJoeP2o8Tf6lZei6Nb~5mzZO15fNC1vXhV8biyqVyaSqpq9H51kLBi1g7YOGZMw7NJGSHnHwwmdIeLz3Ehy9WXvI2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          }}
          justify="right"
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Volunteer at&nbsp;
              </Heading>
              <Heading color="primary" variant="h2" fontWeight="800">
                Long Hollow
              </Heading>
            </>
          }
          description="There are plenty of opportunities where you can plug in and begin volunteering at Long Hollow. Our hope is that you will build community among other volunteers, make a difference at Long Hollow and in our city, and ultimately, help us change the world with the hope of the Gospel. If you have questions about volunteering at Long Hollow, contact Vivian Penuel at vivian.penuel@longhollow.com or (615) 824-4006 x 115"
          actions={[
            {
              label: 'Sign Up',
              onClick: noop,
            },
          ]}
        />
        <Box>
          <Heading
            variant="h3"
            color="fg"
            fontWeight="700"
            textAlign="center"
            mb="m"
          >
            Explore more!
          </Heading>
          <CardGrid
            columns="2"
            gridColumnGap="l"
            gridRowGap="xs"
            breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
          >
            {exploreColumns.map((exploreColumn, i) => (
              <CardGrid
                key={i}
                gridRowGap="xs"
                columns="1"
                gridTemplateRows={`repeat(${exploreRowCount}, 1fr)`}
              >
                {exploreColumn.map((explore, j) => (
                  <ArticleLink key={i + j} {...explore} />
                ))}
              </CardGrid>
            ))}
          </CardGrid>
        </Box>
      </CardGrid>
    </Layout>
  );
}
