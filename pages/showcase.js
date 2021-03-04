import { useRouter } from 'next/router';
import { ArrowRight, Circle, Info } from 'phosphor-react';
import {
  ArticleLink,
  Carousel,
  Countdown,
  EventCallout,
  EventsCallout,
  FlagCTA,
  FullWidthCTA,
  FullWidthText,
  HorizontalRow,
  LargeImage,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  MeetTheStaff,
  PageSplit,
  Photo,
  Quote,
  Search,
  ValuesRow,
  VideoPlayer,
} from 'components';
import { Box, Button, CardGrid, Heading, Icon, Text, theme } from 'ui-kit';
import { addHours, addMinutes } from 'date-fns';

export default function Showcase() {
  const router = useRouter();
  return (
    <Layout title="Showcase">
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
            title="Child Dedication"
            description="Make a public commitment to raise and train your children to be faithful followers of Jesus Christ."
            url="/rsvp"
            urlText="RSVP"
            imageSrc="https://s3-alpha-sig.figma.com/img/c56b/0838/b6294050e9e43aff944b8569ef22dbd7?Expires=1612137600&Signature=VzoGDvUPIScP3mFxtLpHKrMvVxmz-J2HMAo8mAcKHwuLMR1wsrm0UvmEsBv28Li0UCU17wlVHk-QW7qG2lcVMVyFeYA8IlfsnJASuP5B1GUKkex37RwfNYXbwOnW7ApUU7KsdVawH8loZkIzIvGcNF33dAz7m7wAsqgYK097xN0sVP7GFqu0y6SnRR1o8qDm6XaoUOvU2P2PrN78z6jKyiFKhIK5lWE2ao7ueIXCELYo3WE9~cdZ4utPBzCxuAKfQHAz0pYhCEZrAf3aS2bUibNIWMrH1ddyMFY-P2oVPOOPpA-DShXg6UWw0C0l0H-wTXqRryFOINX2OR~XGMHl5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            mb="s"
          />
          <ArticleLink
            title="Expectant Parents"
            description="Whether you’re welcoming a new child to your family through birth, adoption or foster, we want to cheer you on and provide support."
            url="/contact"
            urlText="Let us know"
            imageSrc="https://s3-alpha-sig.figma.com/img/0607/2b98/01ff019c692234b93cbf2696d450cbf5?Expires=1612137600&Signature=g3l4pjYR2pJwn-FYDyfahRI4gqzi2ZYFmIPmSCEMkS5BGXz3SQKO79flt7yK-qZswrYkOghjJ0aGiUaysTL2kQlcemrXifg-AUbNqQJWK9QK5w-63CBdnIF4xiBhTkUwcCajSpTOtknw8LvIWhCsqIvaX1KNa--N8nrRh8oc9qYitevXDWU3yOhaQrvOFRBgWPidyKUTGZ7hQtJEXW3bfyZ4coCg8mfiNVbGYVRcfEz0EyJbXMLG4scnnnAC2czVYJKtR~VP3h1eS5anTmuJWBGQ-4BghgxDvQC9vQnQcZEI2S2z0UTLhDi8m7griG-0X9rL9Uv~OVRZ1kPEDOZhiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
      <PageSplit title="Explore" variant="h3" />
      <CardGrid
        px="xxl"
        py="xl"
        gridColumnGap="xl"
        columns="1"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <MarketingHeadline
          imageSrc="https://s3-alpha-sig.figma.com/img/0c64/d4fc/add8d8345bbc582fcd9698863a611910?Expires=1612137600&Signature=APFKcOaU0w-iZmyAWGeEu3PoVIgIWYEMa7Lq4jfMjKcyKyEBZujU2JTl2qOJf4fED3HhhpMWBYPTc~4foisZPwCE6m3eYgAE6KkPn5~2VsZmYWl-z9FjqRParOf3sCMXM0cY0Q771NhfOr5Ybdm7Tp0s~uZlRJfkNckBeM5Oo3kgzja~OHmuVE7dftPq4C-EZ3Hafj8k7fHAK7OJ5gR5zBaBQgx6T8o2HPrfomrvCeC7AB0gLGaOcC7TUZ3PSFRmAm~cCwM0T-eEnEAntP2F6F9Y9U6xvDEfD5gaan~HKQ0QrPe2ojGhpPBAEFFpThLfdjsBKumURZ8SVVYIDoOIVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Marketing&nbsp;
              </Heading>
              <Heading color="primary" variant="h2" fontWeight="800">
                headline
              </Heading>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                .
              </Heading>
            </>
          }
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Quote
          color="quaternary"
          attribution="Sarah Connor"
          actionLabel="Full story"
          actionLink="/sarah-connor-quote"
          text="When trauma and loss left me adrift and disoriented, God provided faithful believers to remind me that He is good, His Word can be trusted, and He will never leave or forsake us."
          avatar="https://s3-alpha-sig.figma.com/img/157c/c6d9/8fb9cd71abfce81ea46bb9375e44af18?Expires=1612742400&Signature=SSjcHzKAP8nbHd5k9TaIDxbR2VnuIOnNDy61YRCbwePp7zMc6I5dXb2bt67XCpzFtHB3EX5Vsfnx1nitDFukOfaHVMr0LsbPvmNIz8-Rt3vVljeQzUhwswiZMKm8Q6~7wI7-ygpPpIwo45pga53hTWfdEfEWIDj9YRvsEr-gpysagJg1mpn1ibF2DhPDjpq8Wb1~3D6z~T-ZRWuhLcT7GAh7pkY4v7mGjJUWYumIWhXqkSs6NoYbbbxHcaGarQfzKv1JGL9imro731-yfG5JSOI2OaXmw3c~gVkCuwy-yq1Pd~0nnKdoRW3YjB7G7g8lAh86qHJAP2iNHgEyNtIabQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
        <MarketingHeadline
          imageSrc="https://s3-alpha-sig.figma.com/img/7be8/6993/46526ee7a373891356914030a50eecb1?Expires=1612137600&Signature=P~ma-wzBuFel034I5mDV7N09k05Jc5uA7PBM-Rj0~W6smzKHp4S845mDEcRehgLug5aUc27r1Jps~ETWmBMRyY1RRTg8Y4FluHPLGKqKOgK7mYkFZ3Tv5oFGGeXDXHsp8Taz~ZdFb9zJC0O-cHOKBe~oyLkiwmgJbIh-XL9~l6hiNKzu7jaSd5nMvKL7jSFiRsa2C0pYEpkapsDdRl9WXvgkM61VWM7n7sm9wLKaWq-84axd6D9pRHtWKYkzE-DApMofKcDQzlGWvjXVD-bgkkZz4qzf2e41wuRJKusZkLEdscpDG4k0kpO7sxGsA0ubhXiUnp3Qn8QpGhU6DVHuVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Marketing&nbsp;
              </Heading>
              <Heading color="primary" variant="h2" fontWeight="800">
                headline
              </Heading>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                .
              </Heading>
            </>
          }
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          justify="right"
        />
      </CardGrid>
      <CardGrid
        px="xxl"
        py="xl"
        gridColumnGap="xl"
        columns="2"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
        backgroundColor="white"
      >
        <Box display="flex" flexDirection="column">
          <ArticleLink
            description="Lorem ipsum doler sit itmut this is a title of this story article or news something or thing."
            url="/"
            urlText="Learn more"
            imageSrc="https://s3-alpha-sig.figma.com/img/d503/cf1e/51e2f4afe7a9d1befea1d404776bce58?Expires=1612742400&Signature=CRak1QZFV30oWYfOmofyDhPZYYUSuYLx5PM7veQNCK-J6VdCBLLnh8eNG-gzZHSVnxHkr0W-DVRrRtvGBahERez2kJ~HCg1IQSsXl73m1yvGvBDoXNLHXly67ZJlfHxcKKgYk5iw1uwU3ditcGV1vxpiVdFFBIECr58qlnIbSRmrgWqHBZtWsC16IIuNt68NW~43iIcWUMmqxtM3~EsLRm8XyPqylh37St-e2KNBa22gDFhz2kz5uub7iYR5nZLiYXOoMYI0FeRXXNV0Oj~79pyGCOOi5-xVIRaqlFQhIKrV0I0oO~D2ZDXo2QdXWdqH9Ek6QKG3RlhIzE2ayQQ-Xg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            mb="s"
          />
          <ArticleLink
            description="Lorem ipsum doler sit itmut this is a title of this story article or news something or thing."
            url="/"
            urlText="Learn more"
            imageSrc="https://s3-alpha-sig.figma.com/img/493d/14c0/d6d582397dad7960aa07123f3af3ec17?Expires=1612742400&Signature=SpddFW9DyeXdpNgbU~5HczCH8qWgjJ3kjUx7ItiFFtUrZLSZpcPEZRaRpaeIukzmAMW12aHq6w4SDR5lBYAlNSN-ICni49wl1OxXKfzRDB1uQAALGwFzUHYiPMCrLUChsMD1J5OBvDKU2PcapV1sCydekg57fxQSUUsUQ15C5tppmGDLLfrikXSmABnJ3Y70344V3CyNO4Y6CN6CnBoGm5YVPkyLC84FTle0a~YAuSD8rrBAlTMTuJQi8jaB6qG6OcXt93WkXvpAWKQhOZhUIKAapn6er4kOra27v~VQweYGd8a4afbbE98pd2fnknsWqZkKsdLZfGuPMokwvSYEng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            mb="s"
          />
          <ArticleLink
            description="Lorem ipsum doler sit itmut this is a title of this story article or news something or thing."
            url="/"
            urlText="Learn more"
            imageSrc="https://s3-alpha-sig.figma.com/img/d222/5e20/7026f0d2db6b662bd925005ed3d78375?Expires=1612742400&Signature=gAWCBTp4D7KbI8TALUxCNMI21NhB08Mu5O-BaA~wM5CMp6jlRdy-Q52YMSGw6vZ60EilqDTbxyJ1INP4xrgD5MbdMprqR6D1xu7dbpeZnu72yavDCj26VaShkz62FAM8Y6cPUDzhGJKTxM40EgElerZ0qsFEIuSTNl9y40ZeJWiXa2WwKBKgb2dGmSw5WCVTsARUCYJ1iXiGsOsbY57SZL5m1xVZxFJnl28ioFHOFTmKqvcjpk-xPuk287igAOGSOVEm5psTZ71hjrv9AUGf-s8RrQiDd1ZzcrF1y5Ul6oBQYmBxuhjkCjK2u4RFUcGhOqMokzja4TqpyxCj6rB1SQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </Box>
        <LargeImage
          text="Celebrate the Hope of Christ with us."
          color="white"
          action={() => router.push('/christmas')}
          src="https://s3-alpha-sig.figma.com/img/819d/924a/5b523972e95961c459d926736ea2f611?Expires=1612742400&Signature=KRqft30qRfZq4MpUq27xME4hIEj4gFYr4s~lXEFpUwlDGfVCXfUsCu~JNXBicN9MnQYNW84z84g6RwRkDxQsrYlRGGeE~0wBdHAbSEWx~lZIG9k7JK8iCoVEWSsryT-xrQY-o4rO7AaN0WrZwNClqcEG9x0~VAvEUzLqTfi5hegv4F9I1kCTpY545Qzh-gYhy7IUBOfLW8Eip3E5Y7c-m0tj4Cmk50KQB1DIAyJXuaF0DaM4pfjA4HBt1SM8-EkudX9ciRXJfJwx-ctTNOD~CCYZ8kCLgq-nV-NEj2xrJ9ijau0npbxA-PKPbq5VifVBGZnw3xfTkKvBjWsdIvkNIg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
      </CardGrid>
      <CardGrid
        px="xxl"
        py="xxl"
        gridColumnGap="l"
        columns="1"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <HorizontalRow
          title="Horizontal Row"
          actionLabel="See more"
          color="primary"
          items={[
            {
              src:
                'https://s3-alpha-sig.figma.com/img/63ce/7196/92c4e08dadee0202fbc722f1cb03b6bd?Expires=1612742400&Signature=hkepmhGzmp0lIGLrV7h49DVU9xCwuCyF55FR4VUP2k70pV6IFf8WUZdzA3RQTTqpwr~1s5aqiXFzzXATj64xUlnGf5B2BkHTsu~e82BZnWdK9T53~4uFmBuvWfXwSIfgkFfM2gaYfjgvsCa1mI4-NHX6Dsje5qUeL8DS~O7qciptSFPZ14loI31zr0RZwIei3E6Xs6iKKfeUz9cAZ9jv-G01PMRG5nRnxhZylOUMdUhjWJ9YE9B96oa00-GCFYAoLMuCnRPTGjdEt-w9XEb-FNxRW1uhY8YsDKRXjKTufL6UEQTynSiL8EDhNJbHbJiaiwv8xYe1dqqEX6AqqKWwOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              action: () => router.push('/lh-kids'),
            },
            {
              src:
                'https://s3-alpha-sig.figma.com/img/a71a/09aa/51ce7f0bbbde68d797b2c6023b97fe67?Expires=1612742400&Signature=DSeL2yxC9eQgty0gmT~EhZGCPZiTPyH1mgoE18Qwx8xAqtvos1vnjwwnBVAYbAHZC5Lu-WmpD66tUKAH~qa30wBSyogrkSV7n1vH0qb2Cfp90jaIIWcurSY4wOGAd85Cw0Tfvy6zqN7gSlzO55YipZQ4kNt1BBUstUbtuhQFNOKM9e9UkcIapK~1u6kSfxpRGlTGPuQZLTM4PyYH2cckmdY-rSIT3SEvTFWAvD75SDtqJsGoDNiW8pW6ROUYw55KBzCR0SLiE5MEwHoWWsBGCcxgYFnuWYUKVFcHAb9GncdvfAKIszlnqOYATSdXH8tS4hN9miAoKmY29ylXBvuqsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              action: () => router.push('/lh-students'),
            },
            {
              src:
                'https://s3-alpha-sig.figma.com/img/3d8b/c8d0/b14a632da1e6e32e7e2ec1acdc1befbb?Expires=1612742400&Signature=bpds~I-~pQwWugwuvGLrP3b97I~1mI0Q3A-2CSQr7uinyYZk5NmSqZMboDG-JumlxrAWYXpHWUgeAI~VawJjl5P~VtzvkZXaoFuD4Bi-lcABhQZlOnAygzwsUMO~bYPcZ5~X0WUrvR9~jpUF5z0ukPcwWQTlhLp67RKhACVr0FLP0~HkAo-8MwHqOfPPnJCJB9YREGPXfaN4Pl7mQFYwG4Bz636Ly~PKg9Td7-yxAh993kKtXNXGw6lf99Ckyry7KxNIjJbALciFRq34MOKvcC4Ms2s0Du3P~60wvfm~XK0mwIfVP5dG725TbRjuXgOT1fne42fpe6GLUDOYwV3oCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              action: () => router.push('/cr-support'),
            },
          ]}
        />
      </CardGrid>
      <CardGrid
        px="xxl"
        py="xxl"
        gridColumnGap="l"
        columns="1"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <ValuesRow
          title="Values Row"
          items={[
            {
              title: 'The Bible',
              text:
                'Lorem ipsum doler sit itmut this is a title of this story article or news something or thing.',
            },
            {
              title: 'The Bible',
              text:
                'Lorem ipsum doler sit itmut this is a title of this story article or news something or thing.',
            },
          ]}
        />
      </CardGrid>
      <PageSplit title="Meet the Staff" variant="h3" mb="xl" />
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
          src="/staff/001.png"
          name="Amet minim"
          description="Nonn deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <MeetTheStaff
          src="/staff/002.png"
          name="Amet minim"
          description="Nonn deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <MeetTheStaff
          src="/staff/003.png"
          name="Amet minim"
          description="Nonn deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <MeetTheStaff
          src="/staff/004.png"
          name="Amet minim"
          description="Nonn deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </CardGrid>
      <CardGrid
        px="xxl"
        py="xxl"
        gridColumnGap="l"
        columns="1"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <MarketingHeadline
          imageSrc="https://s3-alpha-sig.figma.com/img/8688/4842/db5a433818ef7b5e55fd48645ee17c72?Expires=1612137600&Signature=CANbQ-ScaFdP78lYAQCCQ1LREPBjzGiOolM1g5zV8JNG6buyTXWrKy0zPtaycJuVlCbB2qa~Ll-EQ9QV6MLXTx~6Bp7vOYneDWVSZhIFZyGLmqxYm7fxtEo1kPyCYg72fDDN3i37v~9byzWJOqzVyUMy5Du-5aIrl2mTCNUaog5t~aURMZ1FwC~FL9oILhMV3ujKRtvtwIAXmmKcrrCqpFWVYpjX~YHrAvTcGnKCcKRxe73suf5z5QlLTyO~q1a6gOPdCZ8tOfXV1OWurzDaaHQWsuI4FXuNSiAGxHbmKpP3IHWQGutGytTut3m0NxMJw1qEuleaI7BUooNzjTdS~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Ready to Be&nbsp;
              </Heading>
              <Heading color="primary" variant="h2" fontWeight="800">
                Baptized?
              </Heading>
            </>
          }
          description="If you’re a believer, you should be baptized! It doesn’t matter if you were saved 20 years ago or just last week… it’s time to take the next step in your faith journey.\n\nWe can normally baptize you during any worship service at any of our campuses. Just fill out this form and let us know when you would like to be baptized. Someone will get in touch with you shortly with instructions."
          justify="right"
          actions={[
            {
              label: 'Sign Up',
              onClick: () => router.push('/signup'),
            },
          ]}
        />
      </CardGrid>
      <CardGrid
        px="xxl"
        py="xxl"
        gridColumnGap="l"
        columns="1"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <MarketingHeadline
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Marketing&nbsp;
              </Heading>
              <Heading color="primary" variant="h2" fontWeight="800">
                headline
              </Heading>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                .
              </Heading>
            </>
          }
          description="Christianity is the faith of enlightenment and intelligence. In Jesus Christ abide all the treasures of wisdom and knowledge. All sound learning is, therefore, a part of our Christian heritage. The new birth opens all human faculties and creates a thirst for knowledge. Moreover, the cause of education in the Kingdom of Christ is co-ordinate with the causes of missions and general benevolence, and should receive along with these the liberal support of the churches. An adequate system of Christian education is necessary to a complete spiritual program for Christ’s people."
          details="Deuteronomy 4:1,5,9,14; 6:1-10; 31:12-13; Nehemiah 8:1-8; Job 28:28; Psalms 19:7ff.; 119:11; Proverbs 3:13ff.; 4:1-10; 8:1-7,11; 15:14; Ecclesiastes 7:19; Matthew 5:2; 7:24ff.; 28:19-20; Luke 2:40; 1 Corinthians 1:18-31; Ephesians 4:11-16; Philippians 4:8; Colossians 2:3,8-9; 1 Timothy 1:3-7; 2 Timothy 2:15; 3:14-17; Hebrews 5:12-6:3; James 1:5; 3:17."
          justify="right"
        />
      </CardGrid>
      <CardGrid
        px="xxl"
        py="xxl"
        gridColumnGap="l"
        columns="1"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <MarketingHeadline
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Marketing&nbsp;
              </Heading>
              <Heading
                color="neutrals.900"
                fontSize="28px"
                lineHeight="40px"
                fontWeight="800"
              >
                headline
              </Heading>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                .
              </Heading>
            </>
          }
          description="We believe that the term “marriage” has only one meaning and that is marriage sanctioned by God, which joins one man and one woman in a single, exclusive union, as delineated in Scripture and as part of God’s good creation prior to the entry of sin into the world. We believe that God intends sexual intimacy to only occur between one man and one woman who are married to each other. We believe that God has commanded that no intimate sexual activity be engaged in outside of a marriage between one man and one woman.\n\nWe believe that any form of sexual immorality, including, but not limited to, lust, fornication, adultery, unbiblical divorce, cohabitation prior to marriage, the use or promulgation of pornography, pedophilia, homosexual conduct, bisexual conduct, polygamy, polyamory, bestiality, or incest, is sinful and offensive to God."
          details="Genesis 1:26-28; 2:15-25; 3:1-20; Exodus 20:12; Deuteronomy 6:4-9; Joshua 24:15; 1 Samuel 1:26-28; Psalms 51:5; 78:1-8; 127; 128; 139:13-16; Proverbs 1:8; 5:15-20; 6:20-22; 12:4; 13:24; 14:1; 17:6; 18:22; 22:6,15; 23:13-14; 24:3; 29:15,17; 31:10-31; Ecclesiastes 4:9-12; 9:9; Malachi 2:14-16; Matthew 5:31-32; 18:2-5; 19:3-9; Mark 10:6-12; Romans 1:18-32; 1 Corinthians 7:1-16; Ephesians 5:21-33; 6:1-4; Colossians 3:18-21; 1 Timothy 5:8,14; 2 Timothy 1:3-5; Titus 2:3-5; Hebrews 13:4; 1 Peter 3:1-7."
        />
      </CardGrid>
      <Carousel
        labels={[
          'Sunday Messages',
          "Robby's Wed Night Studies",
          'Archives',
          'Baptism Videos',
          'Watch Live',
        ]}
        px="xxl"
        py="xxl"
      >
        <VideoPlayer
          src="http://embed.wistia.com/deliveries/0e364f7e6f6604384ece8a35905a53a864386e9f.bin"
          title="What Happens When God Shows Up"
          details="In this message from January 3rd, 2021, Pastor Robby discusses how one moment in the presence of God can alter your life for eternity."
        />
        <Box height="200px" width="600px" backgroundColor="orange" />
        <Box height="600px" width="500px" backgroundColor="yellow" />
        <Box height="400px" width="800px" backgroundColor="green" />
        <Box height="400px" width="500px" backgroundColor="blue" />
      </Carousel>
      <CardGrid
        px="xxl"
        py="xxl"
        gridColumnGap="l"
        columns="1"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Heading variant="h2" color="neutrals.900" fontWeight="800" mb="s">
            Need to find something?
          </Heading>
          <Text
            variant="s"
            color="neutrals.900"
            opacity="60%"
            fontWeight="400"
            mb="xxl"
            maxWidth="700px"
            textAlign="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            lectus elementum montes, ut fringilla dignissim donec massa
            interdum. Mus scelerisque mauris imperdiet scelerisque semper sed
            dignissim suscipit ullamcorper. Integer od
          </Text>
          <Search
            width="640px"
            button={{ color: 'primary', label: 'Search', size: 's' }}
          />
        </Box>
        <CardGrid
          gridColumnGap="l"
          columns="2"
          breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
        >
          <MarketingHeadline
            title={
              <>
                <Heading color="neutrals.900" variant="h2" fontWeight="800">
                  They're welcome here.
                </Heading>
              </>
            }
            supertitle="Know someone in need?"
            description="Long Hollow is one church that meets in two locations just north of Nashville. We’re a community of believers with something for everyone. Whether you’re checking out Christ for the first time or are looking for a place to call home, you’re invited to discover your purpose and live it out at Long Hollow."
            actions={[
              {
                color: 'primary',
                label: 'Primary Call',
              },
              {
                color: 'secondary',
                label: 'Secondary Call',
              },
            ]}
          />
          <Quote
            color="primary"
            title={
              <Box display="flex">
                <Heading
                  color="primary"
                  fontSize="18px"
                  lineHeight="27px"
                  fontWeight="700"
                >
                  LH&nbsp;
                </Heading>
                <Heading
                  textTransform="uppercase"
                  color="primary"
                  fontSize="18px"
                  lineHeight="27px"
                  fontWeight="400"
                >
                  Story
                </Heading>
              </Box>
            }
            attribution="Sarah Connor"
            actionLabel="Full story"
            actionLink="/lh-story-quote"
            text="When trauma and loss left me adrift and disoriented, God provided faithful believers to remind me that He is good, His Word can be trusted, and He will never leave or forsake us."
            avatar="https://s3-alpha-sig.figma.com/img/157c/c6d9/8fb9cd71abfce81ea46bb9375e44af18?Expires=1612742400&Signature=SSjcHzKAP8nbHd5k9TaIDxbR2VnuIOnNDy61YRCbwePp7zMc6I5dXb2bt67XCpzFtHB3EX5Vsfnx1nitDFukOfaHVMr0LsbPvmNIz8-Rt3vVljeQzUhwswiZMKm8Q6~7wI7-ygpPpIwo45pga53hTWfdEfEWIDj9YRvsEr-gpysagJg1mpn1ibF2DhPDjpq8Wb1~3D6z~T-ZRWuhLcT7GAh7pkY4v7mGjJUWYumIWhXqkSs6NoYbbbxHcaGarQfzKv1JGL9imro731-yfG5JSOI2OaXmw3c~gVkCuwy-yq1Pd~0nnKdoRW3YjB7G7g8lAh86qHJAP2iNHgEyNtIabQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </CardGrid>
      </CardGrid>
      <CardGrid px="xxl" py="xl" columns="1">
        <FullWidthText
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Marketing&nbsp;
              </Heading>
              <Heading color="primary" variant="h2" fontWeight="800">
                headline
              </Heading>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                .
              </Heading>
            </>
          }
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit id massa id massa elementum nulla mi. Leo mauris aliquam porta suscipit vitae sit. Viverra scelerisque pellentesque quam adipiscing risus. Praesent euismod dui feugiat at mauris nisl tortor id. Mauris urna in a vehicula. Sed vivamus scelerisque tincidunt egestas. Accumsan, ut lacus, donec massa felis eget mauris. Elit magna sed urna posuere. Nascetur diam enim penatibus amet at pretium.\n\nMauris nulla montes, ut faucibus arcu eget amet libero. Volutpat, nibh venenatis, suscipit ornare mollis amet odio venenatis adipiscing. Amet posuere scelerisque aliquam volutpat."
          justify="left"
        />
      </CardGrid>
      <CardGrid px="xxl" py="xl" columns="1">
        <FullWidthText
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Marketing&nbsp;
              </Heading>
              <Heading color="primary" variant="h2" fontWeight="800">
                headline
              </Heading>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                .
              </Heading>
            </>
          }
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit id massa id massa elementum nulla mi. Leo mauris aliquam porta suscipit vitae sit. Viverra scelerisque pellentesque quam adipiscing risus. Praesent euismod dui feugiat at mauris nisl tortor id. Mauris urna in a vehicula. Sed vivamus scelerisque tincidunt egestas. Accumsan, ut lacus, donec massa felis eget mauris. Elit magna sed urna posuere. Nascetur diam enim penatibus amet at pretium.\n\nMauris nulla montes, ut faucibus arcu eget amet libero. Volutpat, nibh venenatis, suscipit ornare mollis amet odio venenatis adipiscing. Amet posuere scelerisque aliquam volutpat."
          justify="right"
        />
      </CardGrid>
      <CardGrid px="xxl" py="xl" columns="1">
        <FullWidthText
          title={
            <Heading color="neutrals.900" variant="h2" fontWeight="800">
              Marketing headline.
            </Heading>
          }
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit id massa id massa elementum nulla mi. Leo mauris aliquam porta suscipit vitae sit. Viverra scelerisque pellentesque quam adipiscing risus. Praesent euismod dui feugiat at mauris nisl tortor id. Mauris urna in a vehicula. Sed vivamus scelerisque tincidunt egestas. Accumsan, ut lacus, donec massa felis eget mauris. Elit magna sed urna posuere. Nascetur diam enim penatibus amet at pretium.\n\nMauris nulla montes, ut faucibus arcu eget amet libero. Volutpat, nibh venenatis, suscipit ornare mollis amet odio venenatis adipiscing. Amet posuere scelerisque aliquam volutpat."
          justify="center"
        />
      </CardGrid>
      <CardGrid px="xxl" py="xl" columns="1" gridRowGap="l">
        <Box display="flex" flexDirection="column">
          <Photo
            maxHeight="451px"
            src="https://s3-alpha-sig.figma.com/img/2049/a3d6/d7d850f8389837aaa63909bd7be531d8?Expires=1613347200&Signature=IWFhoOcxSEasMsunnFXV0nxArxO6~ycdJx916yJzraIhzPkAsBOxhlOqXTpVITyuZhOd2A8lyBvxrb22GeGxBMoYZ2xvdSZZNwO1r9SR2VV~vXblREOw3KLbD7rxPmeD-r782tuAxKmhF4QNDvjDfGtOoB3S29aqcnutBsNQx~xsii49CkKJc0gDbFkyPdf6QJx5J9DNY9Fl8vpswa4Bye7gznEy~TecmR9XpalLPXUeUBg4IA3iqr4Wszi~NT4hQnXapRruI1WzjCu-0MjK79y0~uFza3-pLYRtgfhNNgtnPv~wHpzr224NzPxeAmNpnsuNdtNop5O1198bs4GlWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            mb="l"
          />
          <FullWidthText
            title={
              <Heading variant="h2" fontWeight="800" mb="xs">
                Headline.
              </Heading>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit id massa id massa elementum nulla mi. Leo mauris aliquam porta suscipit vitae sit. Viverra scelerisque pellentesque quam adipiscing risus. Prae"
            justify="left"
          />
        </Box>
        <Box display="flex" flexDirection="column">
          <CardGrid
            columns="2"
            gridColumnGap="l"
            gridRowGap="l"
            breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
            mb="l"
          >
            <Photo
              maxHeight="451px"
              src="https://s3-alpha-sig.figma.com/img/e2ce/bb31/0ceb508b5bfd15a0e4261ac8aeb53c4a?Expires=1613347200&Signature=b7OY1yB06ydQXTq3qilcXNaRG6piegkcy7Tsp-uoYJ-ktddiVTVPu1kJm16xfy~YDvq1rhwzHmKlT2GHOLWY~Qp25l80CjkRMVKslkDPrRwz6ek39C2AxDVUjKuzWisjopcCFA6G0vvAVx0OFf5zG54jGRyornigmjKHCypUSwaCe-iPTSGeUOo8o0Pv5mEfeRG4Ydj7IHHySLyAl19W256kFJUZW2dimj2DAGsaPz2TogIvrLAdrhpkQTD~4POT1A8P4Xx4~OzS~Jy-T-UPHFPug2w6ZdaeN-I6nSWAGVn42XiLOiuv4WHKjxtDZrZBC3OT5XBe7FF8yhFEP1E1Kg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            />
            <Photo
              maxHeight="451px"
              src="https://s3-alpha-sig.figma.com/img/549d/f127/b0fc2847325ff1ed813fe77d09b5aaa4?Expires=1613347200&Signature=eRcHwqbrQ5edpZyO9ke5XaF9IxvrY3wAR40uOnKsGcgb-wwpglo2oWMzI9PAYeqjapkkXXxr7wojosuBKEQTLd7uufa9AIq3puZJ9b3pykN5mC0HbSwSejj2PWLNAoCjIwiHYrcA2X1ebL2XdYO8J3Bh-nxMvZgz0InuSvBpCCxgVeNZyGw-fYkh5g8X6Z8yrJs0CCMFnImnCQ7kS4Iqfr3B65y9-Qn-Ye2HvwJJdxet4DHJpr3CM1Ldv6d6r-LidHjHhC8j0KyS8IUkD3T9f2wwpgJHCzrx1-GoqRCOOq4UHxRHBnE6vbrsOLlIMLrXmoslYmrR95MaUIQhTlqHLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            />
          </CardGrid>
          <FullWidthText
            title={
              <Heading variant="h2" fontWeight="800" mb="xs">
                Headline.
              </Heading>
            }
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit id massa id massa elementum nulla mi. Leo mauris aliquam porta suscipit vitae sit. Viverra scelerisque pellentesque quam adipiscing risus. Prae"
            justify="left"
          />
        </Box>
        <CardGrid columns="2" gridRowGap="xxl">
          <Box display="flex" flexDirection="column">
            <Photo
              maxHeight="451px"
              src="https://s3-alpha-sig.figma.com/img/d3f3/fec5/d6809c8d69c8e9d00fa3f6f41354ed8c?Expires=1613347200&Signature=MM3fidhZCdUoOJIMEWmDeW-KQPA59speMZlR~G6GF2r2qvHoaLxvyZC57v-ly~x1etbnJhpsNmr6pPYnf8p8Fqak4G6GSt11pUs~99e7KvEl0Otr78dMl~Hi6z4ODJ8VaZYKTgLdzCbdMzmDyYwJzfDggbSU3-w0iCEpKZ8AzNLroIRvLFT~xtfam8BrQtN~RWrRYaBCdDFT49~dNY9bLdLYq~EzspuIODUUdY4I5fmflK1PHAEvqSASu2K5uTDgI7UrmDk~oiRzwtvwqR58sWX6fJuOyo-k0thmjXzT7~dvOkpgeSjNz6RKTKGUpEOcQy4mte8HMjVmAZdpDiPVHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              mb="l"
            />
            <FullWidthText
              title={
                <Heading variant="h2" fontWeight="800" mb="xs">
                  Headline.
                </Heading>
              }
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit id massa id massa elementum nulla mi. Leo mauris aliquam porta suscipit vitae sit. Viverra scelerisque pellentesque quam adipiscing risus. Prae"
              justify="center"
            />
          </Box>
        </CardGrid>
      </CardGrid>
      <CardGrid
        px="xxl"
        py="l"
        columns="2"
        gridRowGap="xxl"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <Countdown
          src="https://www.figma.com/file/zlluMsbAFPmWX6Z50iG86s/image/2c35a9fea98b9a3404dfaca24537e5a91c123c48"
          width="595px"
          height="451px"
          borderRadius="image"
          alignItems="flex-end"
          // date={new Date('02-15-2021')}
          date={addHours(addMinutes(new Date(), 2), 15)}
        />
      </CardGrid>
      <CardGrid
        py="l"
        columns="2"
        gridRowGap="xxl"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
        <FlagCTA left color="primary" height="227px" width="434px">
          <Heading
            color="white"
            fontWeight="700"
            fontSize="28px"
            lineHeight="35px"
            mb="s"
          >
            Join us live now!
          </Heading>
          <Button variant="outlined" color="white" bg="transparent" size="l">
            <Text fontWeight="600">Join Us!</Text>
          </Button>
        </FlagCTA>
        <FlagCTA right color="gray" height="227px" width="434px">
          <Heading
            color="neutrals.900"
            opacity="60%"
            fontWeight="700"
            fontSize="28px"
            lineHeight="35px"
            mb="s"
          >
            Join us live now!
          </Heading>
          <Button
            variant="outlined"
            color="neutrals.900"
            opacity="60%"
            bg="transparent"
            size="l"
          >
            <Text fontWeight="600">Join Us!</Text>
          </Button>
        </FlagCTA>
      </CardGrid>
      <FullWidthCTA
        size="s"
        title="Join us live now!"
        action={{ text: 'The good news', onClick: () => {} }}
        mb="m"
        pt="37px"
        height="134px"
      >
        <Heading
          color="white"
          fontSize="28px"
          lineHeight="35px"
          fontWeight="700"
        >
          Join us live now!
        </Heading>
        <Text
          color="neutrals.100"
          opacity="60%"
          display="flex"
          fontWeight="600"
          alignItems="center"
        >
          The good news&nbsp;
          <ArrowRight
            size="18"
            color={`${theme.colors.neutrals[100]}`}
            opacity="60%"
            weight="bold"
          />
        </Text>
      </FullWidthCTA>
      <FullWidthCTA height="434px" pt="171px">
        <Box display="flex" alignItems="flex-end" mb="s">
          <Icon
            name="godLoves"
            width="532px"
            height="67px"
            viewBox="0 0 532 67"
            stroke="white"
            fill="white"
            mr="m"
          />
          <Icon
            name="you"
            width="200px"
            height="67px"
            viewBox="0 0 200 67"
            stroke="white"
          />
          <Circle color="white" size={20} weight="fill" />
        </Box>
        <Text
          color="white"
          variant="h4"
          width="530px"
          textAlign="center"
          display="inline"
          fontWeight="600"
          mb="s"
        >
          For God so loved the world, that he gave his only Son, that whoever
          believes in him should not perish but have eternal life.&nbsp;
          <Text
            color="neutrals.100"
            variant="h4"
            opacity="60%"
            display="inline"
            fontWeight="600"
          >
            John 3.16
          </Text>
        </Text>
        <Text
          color="neutrals.100"
          opacity="60%"
          display="flex"
          fontWeight="600"
          alignItems="center"
        >
          The good news&nbsp;
          <ArrowRight
            size="18"
            color={`${theme.colors.neutrals[100]}`}
            opacity="60%"
            weight="bold"
          />
        </Text>
      </FullWidthCTA>
    </Layout>
  );
}
