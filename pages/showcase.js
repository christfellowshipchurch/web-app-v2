import {
  ArticleLink,
  Carousel,
  EventCallout,
  EventsCallout,
  HorizontalRow,
  LargeImage,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  MeetTheStaff,
  PageSplit,
  Quote,
  ValuesRow,
  VideoPlayer,
} from 'components';
import { useRouter } from 'next/router';
import { Info } from 'phosphor-react';
import { Box, CardGrid, Heading, theme } from 'ui-kit';

export default function About() {
  const router = useRouter();
  return (
    <Layout title="About">
      <MainPhotoHeader
        src="https://s3-alpha-sig.figma.com/img/dd11/d81a/34804b1e54856793f1d8d0e3d3e6d2cb?Expires=1612137600&Signature=FhLG0mx3yxgU3EXbHK-EXJJd-IS4xTx~x4yOYHJqCOgCpRncf5NU1lenhSbwdryzrzwSvxJ0UdXyX5VJ-iY7rNs8gtIlpi6aju5WXg~70bNpGZIH-X9Lke80xheBLGuy54oz6aCA9dvvWB11Fd-gjXBeSxPwZfG48MxqS-f4LSYDED5R5bTEVNmb9fpDcmURbDs4YlP~WUa6GF79MBR1wDya6YCsortedMOS4idt323LXWhhzYz-lQ~6v7ZS1UBDrSoeqZNoFjxl14ZHtemYa~hZoIngLlHw~mLxL~EiHvN3IWzae8WUtWDA7ZnfkmBT5Wi1j6NGG~fLQ7z~zMh-Dg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        category="LH Kids"
        title="Lorem ipsum doler sit itmut del fal some big bold header."
        subtitle="Lorem ipsum doler sit itmut del fal some big bold header."
      />
      <CardGrid
        px="xxl"
        py="xl"
        gridColumnGap="xl"
        columns="2"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
        fullWidth
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
        fullWidth
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
        fullWidth
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
      <PageSplit title="Meet the Staff" variant="h3" />
      <CardGrid
        px="xl"
        gridColumnGap="l"
        columns="4"
        breakpoints={[
          { breakpoint: 'xl', columns: 2 },
          { breakpoint: 'lg', columns: 1 },
        ]}
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
      <CardGrid
        px="xxl"
        py="xxl"
        gridColumnGap="l"
        columns="1"
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
        fullWidth
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
        fullWidth
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
        fullWidth
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
        fullWidth
        breakpoints={[{ breakpoint: 'lg', columns: 1 }]}
      >
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
    </Layout>
  );
}
