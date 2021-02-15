import { ArrowRight, Info } from 'phosphor-react';
import {
  ArticleLink,
  Countdown,
  EventCallout,
  EventsCallout,
  FlagCTA,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  MeetTheStaff,
  PageSplit,
  Quote,
} from 'components';
import { Box, CardGrid, Heading, Text, theme } from 'ui-kit';
import { addDays } from 'date-fns';
import { noop } from 'utils';

export default function Kids() {
  return (
    <Layout title="Connect - Kids">
      <MainPhotoHeader
        src="https://s3-alpha-sig.figma.com/img/dd11/d81a/34804b1e54856793f1d8d0e3d3e6d2cb?Expires=1612137600&Signature=FhLG0mx3yxgU3EXbHK-EXJJd-IS4xTx~x4yOYHJqCOgCpRncf5NU1lenhSbwdryzrzwSvxJ0UdXyX5VJ-iY7rNs8gtIlpi6aju5WXg~70bNpGZIH-X9Lke80xheBLGuy54oz6aCA9dvvWB11Fd-gjXBeSxPwZfG48MxqS-f4LSYDED5R5bTEVNmb9fpDcmURbDs4YlP~WUa6GF79MBR1wDya6YCsortedMOS4idt323LXWhhzYz-lQ~6v7ZS1UBDrSoeqZNoFjxl14ZHtemYa~hZoIngLlHw~mLxL~EiHvN3IWzae8WUtWDA7ZnfkmBT5Wi1j6NGG~fLQ7z~zMh-Dg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        content={
          <Box position="absolute" left="97px" bottom="73px" maxWidth="440px">
            <Heading
              color="neutrals.100"
              variant="h2"
              opacity="50%"
              fontWeight="800"
              textTransform="uppercase"
            >
              LH Kids
            </Heading>
            <Heading
              color="neutrals.100"
              variant="h1"
              fontWeight="800"
              textTransform="uppercase"
            >
              Lorem ipsum doler sit itmut del fal some big bold header.
            </Heading>
            <Heading
              color="neutrals.100"
              variant="h3"
              fontWeight="700"
              maxWidth="360px"
            >
              Lorem ipsum doler sit itmut del fal some big bold header.
            </Heading>
          </Box>
        }
      />
      <CardGrid
        px="xxl"
        py="xl"
        gridColumnGap="xl"
        columns="2"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <Box display="flex" flexDirection="column">
          <ArticleLink
            title="Long Hollow Weekday Preschool"
            description="At Long Hollow Weekday Preschool, we are committed to creating a nurturing environment for preschoolers to grow."
            url="/"
            urlText="Learn More"
            imageSrc="https://s3-alpha-sig.figma.com/img/c43d/45ae/1ffb3890bf4027ea8b1f63ba47b00aef?Expires=1614556800&Signature=DiVQMlOgfzqXVSoX7Xw5oI2M-Cwz72c1Q7jvEhBQMqIfpuXmqIA~EFTHFrTsc2wpVKV~AokAoJ3TOubjAfgU6PpzvFJSUf4cQTVH7u-~8SrvM4Plk4LRN0Y8sxWQmllpxNYCeJyWxEJfgp0LcsXXdTVKs~qjELl6WbfyB-TQ74UFrUFdQIhcyHyO11MeVJhdMJnbLwjEbZN8gIN8FxuqEIjAdAw~mMoBsTp8rFZwVx7N8fRN948G0xukc-AD9gCC~XHLIah0Niute03egHX8x5nrOy7oCctbWHgTUTTmdiUQaiR5xND2~U1TioxZ6MEn4lcMyfETa~NLVu2zvhva5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            mb="s"
          />
          <ArticleLink
            title="Special Needs"
            description="If your child has special needs, we have several options to best meet their needs."
            url="/"
            urlText="Learn More"
            imageSrc="https://s3-alpha-sig.figma.com/img/f26f/0e24/5ebcd4636c6f86ac2897455c080f0ce9?Expires=1614556800&Signature=BUj5VEQRCVzSgD4rdFfvWf0XrN6YXz7z1cgnJX~BqLP5Zjz9d97bah8QsdFXVjUdkCKHrsSy3cYqPgt5Rm7UP68q9vpNqDN8sd9Z3VThY3aav~yx1IszKy3YolUTR-hvWJ1poTXOOCcSmyUAjx-ou5WEQ5lczyfVdydYzCR8RKuEVG3v~y7tocBtqej5VU~96mplrLhfDBXLQY4uJDDz9-bRR2vYda~WzEWFYRBxoJKumQXMkT-8RlmAbFX9xULF5rjFJlOuzaV7IHqpTxczjj~DLGoRJ5jYZTPNwwxbMZH-8pCUuYhxNAVHLbo82da1z4G~1yKwHSex6-VFeVuWfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            mb="s"
          />
          <ArticleLink
            title="Wednesday Nights"
            description="During the school year, LH Kids provides programming from 6:30 to 7:45 p.m. for children from 6 weeks old through fifth grade. "
            url="/"
            urlText="RSVP"
            imageSrc="https://s3-alpha-sig.figma.com/img/17d9/31cb/2947fe42ec8e0b152341cf539515a24b?Expires=1614556800&Signature=HVm2P6LmHD3Xi2fueuInI2siA24-o1Hsl--LWK7FmHsx8mlioQ6RDQw~sd-VwSGPLerXZcnS0xuOjdbdEWJY~jGVmPPp8NrMdpAxitnCFedPIu3BqySfXFYfvqRfplJMo34AEaJp5~gPyULid-1lLQOlh1fop7QCiIScJ-iJrrOfXZT5pdZ2WDhAXWQFF6~OultvzlkK7EooxK2V6IBxi3T6gWz7i3Jt~BxGQGBxC7sXu4aRu1RAiaPCSRcr4shuob2VIQmQDBichZs38xfUpeYkY18p9TIW55XgpnELIBgU4AVZ972PQeKZ5EF74RvZLAxL02pwaYDkHa9OQVRQPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            mb="s"
          />
          <ArticleLink
            title="Sunday Morning"
            description="Online: Sunday at 9:00, 10:00 or 11:00 am.\nIn Person: Every Sunday during regular worship services. "
            url="/"
            urlText="RSVP"
            imageSrc="https://s3-alpha-sig.figma.com/img/2e07/9aec/bf3d447594dff28c2a2a86a8260c5897?Expires=1614556800&Signature=CJBi~rZ-I3Zx3eENUXuH36wbP1zGmbMuKDkgWuvqp0Rm38W1VptZq-rMH-4ZDoCZC9oMfpSGqr5qs5VTvQlrgbrPyPuPULtSeWgH-RsJ2KP86nUGbnIi3flDCddp1IFp7fQkiWAmArx315nMB0~FWh5lyWFkZRHARViEt1GFof8Dekv9oZ-5ooRhgDP6ld1QMpzpadEcwc6Cp3vNKUuclX6Jot8eHM32Yk-ukNNx~qIAPAx5-5xjSlRu2TEKIdrHM-fBuwwQcm7vHHj~n8C-u18Dm9ZfycNlvdOoz3wgkTK~XH48Voz14JMT5d9Moa0Y9hX5imuuN9F9-cqBNB2-OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            mb="s"
          />
          <ArticleLink
            title="Child Dedication"
            description="Make a public commitment to raise and train your children to be faithful followers of Jesus Christ."
            url="/"
            urlText="Let Us Know"
            imageSrc="https://s3-alpha-sig.figma.com/img/493d/14c0/d6d582397dad7960aa07123f3af3ec17?Expires=1614556800&Signature=QzxMFDz0qmZNdV0bt~BGwMaRY8VN7hK1RJ6n~eMl6cnhYknlvSh7CuCwQqqJoeeF0FnwPaJxOhqvyWef4YlwBEXvxCiWddLF4igG-enQPrqyfDV~77nMQOLHJuZNX0HjUMyBt7d2MxBbLPCPiRAsQUXaRnPyftwkHlTQEcbYc6NxpG1XAsD5t5Upodx2tmRh5R-DNeduFQyUJ-n2-i7Fi19JP7fiVzuhHy6nx-9KMO4C9B1bZKqwLC7JjqFpPPL3eZ5sH714IvntrJb4H8378jAe2wo9C1V9Gz~XHU8c6rmU8kMz4rZMqd-lvY4kLdsmZ0zPDRBDe6zSbdKdgc65jg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            mb="s"
          />
          <ArticleLink
            title="Expectant Parents"
            description="Whether you’re welcoming a new child to your family through birth, adoption or foster, we want to cheer you on and provide support."
            url="/"
            urlText="Learn More"
            imageSrc="https://s3-alpha-sig.figma.com/img/0607/2b98/01ff019c692234b93cbf2696d450cbf5?Expires=1612137600&Signature=g3l4pjYR2pJwn-FYDyfahRI4gqzi2ZYFmIPmSCEMkS5BGXz3SQKO79flt7yK-qZswrYkOghjJ0aGiUaysTL2kQlcemrXifg-AUbNqQJWK9QK5w-63CBdnIF4xiBhTkUwcCajSpTOtknw8LvIWhCsqIvaX1KNa--N8nrRh8oc9qYitevXDWU3yOhaQrvOFRBgWPidyKUTGZ7hQtJEXW3bfyZ4coCg8mfiNVbGYVRcfEz0EyJbXMLG4scnnnAC2czVYJKtR~VP3h1eS5anTmuJWBGQ-4BghgxDvQC9vQnQcZEI2S2z0UTLhDi8m7griG-0X9rL9Uv~OVRZ1kPEDOZhiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            mb="s"
          />
        </Box>
        <Box zIndex="2">
          <EventsCallout
            title="General Info"
            icon={
              <Info
                color={theme.colors.neutrals[900]}
                opacity="30%"
                size={22}
                style={{ marginRight: '5px' }}
              />
            }
          >
            <EventCallout
              title="Sunday Morning"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enit. "
            />
            <EventCallout
              title="Wednesday Night"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enit. "
            />
            <EventCallout
              title="Special Needs"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enit. "
            />
            <EventCallout
              title="Weekday Preschool"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enit. "
            />
            <EventCallout
              title="Staff"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enit. "
            />
          </EventsCallout>
        </Box>
      </CardGrid>
      <CardGrid
        px="xxl"
        py="xxl"
        gridColumnGap="l"
        columns="1"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <CardGrid
          gridColumnGap="l"
          columns="2"
          breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
        >
          <MarketingHeadline
            title={
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Volunteer.
              </Heading>
            }
            supertitle="LH KIDS"
            description="We LOVE families at Long Hollow and that means we’re intentional about investing in and discipling the next generation. If you’re interested in making a difference in the lives of children and impacting families, then check out the volunteer opportunities in LH Kids."
            actions={[
              {
                color: 'primary',
                label: 'Sign up now',
              },
              {
                color: 'quaternary',
                label: 'Fill Out Form',
                variant: 'outlined',
              },
            ]}
          />
          <Quote
            alignment="left"
            color="quaternary"
            title={
              <Box display="flex">
                <Heading
                  color="quaternary"
                  fontSize="18px"
                  lineHeight="27px"
                  fontWeight="700"
                >
                  LH&nbsp;
                </Heading>
                <Heading
                  textTransform="uppercase"
                  color="quaternary"
                  fontSize="18px"
                  lineHeight="27px"
                  fontWeight="400"
                >
                  Voluntary Story
                </Heading>
              </Box>
            }
            attribution="Tim Taylor"
            actionLabel="Full story"
            actionLink="/"
            text={
              <Text
                lineHeight="h3"
                fontSize="18px"
                color="neutrals.900"
                opacity="60%"
                textAlign="left"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                arcu consequat vestibulum amet. Velit nunc augue a blandit diam.
                Malesuada eget faucibus amet hac.
              </Text>
            }
            avatar="https://s3-alpha-sig.figma.com/img/d7e1/adbf/b20478d79dd30a2d7bc4d1ff18f6fa20?Expires=1614556800&Signature=JKDNu6ES~NStD58DEMpxWcMl04A8gEC46XPr-1af08zBVGOWHpFtyaXFWggvfMCYsZ0Q4wF1un2aRzdWgEY0mWv1Su~EYiMy4tvN7Ecz-f7QQJhw-EBPPKQLBbwa9IF1shA8AzfXhRaM1KMxf6KKzYYyud6OleVsC9r2Xlc1yDPYT07wjqgZ~3MF0RUMsaPYTG23cy4qsn3XAzUWibpt7aRcHU7cBUKVX581d7OXqFDCMCASH06LQi-2j5zGKxrddtfiwsBO~16qCqvbAdbMP-2rAtciftT3LUHleiAUlpvnt44DpbvNjYa8iUR4FzXeV9IQXDYRRTFmuHjjmLOmgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </CardGrid>
      </CardGrid>
      <CardGrid
        px="xxl"
        py="l"
        columns="2"
        gridColumnGap="l"
        gridRowGap="xxl"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <Countdown
          src="https://www.figma.com/file/zlluMsbAFPmWX6Z50iG86s/image/2c35a9fea98b9a3404dfaca24537e5a91c123c48"
          width="595px"
          height="451px"
          borderRadius="image"
          alignItems="flex-end"
          date={addDays(new Date(), 5)}
          // date={addHours(addMinutes(new Date(), 2), 15)}
        />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Text
            fontSize="s"
            lineHeight="s"
            mb="s"
            color="neutrals.900"
            opacity="60%"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            massa aliquam volutpat in integer aliquam. Convallis tempor quis sed
            et vestibulum sed. Hendrerit consequat praesent sit neque. Felis in
            donec sit nisl feugiat cursus dictum velit
          </Text>
          <Text
            fontSize="xs"
            lineHeight="xs"
            color="neutrals.900"
            opacity="30%"
          >
            ipsum dolor sit amet, consectetur adipiscing elit. Tellus massa
            aliquam volutpat in integer aliquam. Convallis tempor quis sed et
            vestibulum sed. Hendrerit consequat praesent sit neque. Felis in
            donec sit nisl feugiat cursus dictum velit.
          </Text>
        </Box>
      </CardGrid>
      <FlagCTA
        right
        color="primary"
        height="227px"
        width="434px"
        mt={{ _: 0, lg: '-110px' }}
      >
        <Heading
          color="white"
          fontWeight="700"
          fontSize="28px"
          lineHeight="35px"
          mb="s"
        >
          Check out our events!
        </Heading>
        <Box display="flex" alignItems="center">
          <Text
            fontWeight="600"
            color="neutrals.100"
            opacity="60%"
            fontSize="s"
            lineHeight="s"
            display="flex"
            alignItems="center"
          >
            The good news
            <ArrowRight weight="bold" size={18} style={{ marginLeft: '5px' }} />
          </Text>
        </Box>
      </FlagCTA>
      <PageSplit title="Meet the Staff" variant="h3" mt="m" mb="xl" />
      <CardGrid
        px="xl"
        gridColumnGap="l"
        columns="4"
        breakpoints={[
          { breakpoint: 'xl', columns: 2 },
          { breakpoint: 'lg', columns: 1 },
        ]}
        justifyItems="center"
      >
        <MeetTheStaff
          src="https://s3-alpha-sig.figma.com/img/810e/a9cb/028675aba90fb0c25e1f84801b2b4e3f?Expires=1612742400&Signature=WhbSYarVW0uQ8Au1zqrG5VRP5z6SaPrVDrcCaW1tFDBWWratO1FTXdZrkHnXdKLM3Ee3-CXV98EOasoupndHYG33NnnKgz0pG5HjCEJsG~YFk2XX~4HClhWbdsY7hVZ~tPQEj0lQCZ4rx8sypp0mitV8gt~t27NQD5mUOevdbmFkcywyVJZUcMPkMWRcEekHGgykfB88BFsH1IVp5j7hL2PAlKXHfWdqbT22uLm-SwLi3dJwL~brtHvacaWfgFPaP3SWwHpdIZZHdKpR2dSDKJGpYZbkljTAXDp-wqEVuxJu-Z-xEMLhO24sQg66y9pBINulvvH3Gh4K1d8u40nhWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          name="Amet minim"
          description="Nonn deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <MeetTheStaff
          src="https://s3-alpha-sig.figma.com/img/5be1/75c3/313059fa178ec19969b1d4a4db71f5fa?Expires=1612742400&Signature=gI8t6mxgtd~eeJBNIrh457ZJeX~rOA68UlpJZG7pRYVfIOLfAxLcu8t9aLnhBllg9FxA2jsWH1cEw3mXMvVo5TsV-KfYUh1tN~mUqZ1~ZcaSuQ7fynJPgneiBeHe7lh2h7RXae89TltAO73MlOxgDYYET2QEBiJGL3UWB9hfxRgREWC0OtdLdGoV47h1hE6LXWQ5nTWAPB-UQ3QcWJAWUjwQu2bmLCl2ngXyp7K6RbXG2Hu2EFRnNFjPnsz9q~WQjXd4~WfjImNDT8u-5uR~vig3AWMS~wLkPJWz2F~LKaZ2Q0RSsygiLlyHd~puTdAGpTRIy~EXEbGOxdP9B-VFdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          name="Amet minim"
          description="Nonn deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <MeetTheStaff
          src="https://s3-alpha-sig.figma.com/img/3699/04e5/fa86e779b7c749638f38b96e066913c3?Expires=1612742400&Signature=At3Yv8fSCokLu0CRS2jqv8R4k7dw5ZQSIFwvl51nUnMGMckZs04NzBvWhAAECdv1FFdEqjAHlytiuckroEWtBdbL1DoH9ykw3SBCg0EifkaKguo8i6wR2BEjSjU~BCVC60oxKnKgkY6oPnjQXBHchHTaHVNOu1I-1qyLzvnM7URS3TWoizGnEnJqlJ3jVPtQcJzDy8fipYSGjeOELtITL9vJOcHZVR2jNh0Y45gccRQ0ZgvSWJQtPqZJje4308ucDjXVGhjqCpTN9DnxrsxHF3efmm1VtzofCFINdNgaylGfHoGM1RrZJyrfML~3ssL-OX-2KIAEVZKiGhXMC-pkqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          name="Amet minim"
          description="Nonn deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <MeetTheStaff
          src="https://s3-alpha-sig.figma.com/img/aa09/110e/bd10ceabb7e15ad1c9342d94d6d4c75f?Expires=1612742400&Signature=ZcWGh14SE4CrjeY7yJoorLpEqhFQM5KPepDx3swNBbTmlcKi8oRxQhMZWKCEIRFWv45tXeNCjiI1ujiZEn0ffoxsTn2ZT2kj2LgH4NIH-Mnio-ZKXJLDMku4kWNnF4dRG5VGD31vHDsUZf2W60bd-ulaJ5O~uhbbNwwSlsmTb8mdROqtdz3ClWijPBK~r2Qtb68794N6vharY5tAFS3CvnqONRrnIDfPP5krhFfGxOH5zDhKxP9-E2a1UmYOMDKxQ~7W~A~cjU3kMcxPAyN8zagiK7jiwYsqWLxfHTPRieAaVT4UDAOIg3sbeKKqr86-wJAuQeliWpMaNOKBy6t~FQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          name="Amet minim"
          description="Nonn deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </CardGrid>
      <Box m="xl">
        <Quote
          color="quaternary"
          attribution="Sarah Connor"
          actionLabel="Full story"
          actionLink="/lh-story-quote"
          text={
            <Heading
              fontSize="xl"
              lineHeight="xl"
              fontWeight="600"
              color="neutrals.900"
            >
              When trauma and loss left me adrift and disoriented, God provided
              faithful believers to remind me that He is good, His Word can be
              trusted, and He will never leave or forsake us.
            </Heading>
          }
          avatar="https://s3-alpha-sig.figma.com/img/157c/c6d9/8fb9cd71abfce81ea46bb9375e44af18?Expires=1612742400&Signature=SSjcHzKAP8nbHd5k9TaIDxbR2VnuIOnNDy61YRCbwePp7zMc6I5dXb2bt67XCpzFtHB3EX5Vsfnx1nitDFukOfaHVMr0LsbPvmNIz8-Rt3vVljeQzUhwswiZMKm8Q6~7wI7-ygpPpIwo45pga53hTWfdEfEWIDj9YRvsEr-gpysagJg1mpn1ibF2DhPDjpq8Wb1~3D6z~T-ZRWuhLcT7GAh7pkY4v7mGjJUWYumIWhXqkSs6NoYbbbxHcaGarQfzKv1JGL9imro731-yfG5JSOI2OaXmw3c~gVkCuwy-yq1Pd~0nnKdoRW3YjB7G7g8lAh86qHJAP2iNHgEyNtIabQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
      </Box>
      <MarketingHeadline
        px="184px"
        my="xl"
        image={{
          src:
            'https://s3-alpha-sig.figma.com/img/809e/21ff/84f7abd2dec8e66ed842c325c618f51d?Expires=1613347200&Signature=Rkszss7pMAZjRdsHL4lAQR3pcBU7zUWPLGOEut0jWkbCfgHrwn1aH~iP3J79ob8erXbPT0fkH~zad6kKj1wCgnyEiBEhueSNTwdZPUyZ2eY9858231iVURQ5AvbQl0aQf69qQNjD8yhs1mFnSuK0yc2AUH1EOG4ZmaMkTskqt9OVogWpuBf1HUA~NGFEPvLb6aSf7zVuPsJWKagt7SBY3eCNPacR6XbM5hVZCX23tjFLsbe1olvKPUTYCHXjZCx-5ClNyEZE8ggVS1~CbCLXaeXcgI2fsOtMQf2ttIR-Jg~s~JenMd-IsYUCwd1wYCeilc7XvxjR-aMsc039kH4yLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        }}
        title={
          <>
            <Heading color="neutrals.900" variant="h2" fontWeight="800">
              Contact&nbsp;
            </Heading>
            <Heading color="primary" variant="h2" fontWeight="800">
              us
            </Heading>
            <Heading color="neutrals.900" variant="h2" fontWeight="800">
              .
            </Heading>
          </>
        }
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        actions={[
          {
            label: 'Connect',
            onClick: noop,
          },
        ]}
      />
    </Layout>
  );
}
