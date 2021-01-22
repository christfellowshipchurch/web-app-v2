import {
  ArticleLink,
  Layout,
  MainPhotoHeader,
  MarketingHeadline,
  EventsCallout,
  EventCallout,
  PageSplit,
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
        mx="xxl"
        my="xl"
        gridColumnGap="l"
        columns="2"
        minColumns="1"
        breakpoint="lg"
      >
        <Box>
          <ArticleLink
            title="Child Dedication"
            description="Make a public commitment to raise and train your children to be faithful followers of Jesus Christ."
            url="/rsvp"
            urlText="RSVP"
            imageSrc="https://s3-alpha-sig.figma.com/img/c56b/0838/b6294050e9e43aff944b8569ef22dbd7?Expires=1612137600&Signature=VzoGDvUPIScP3mFxtLpHKrMvVxmz-J2HMAo8mAcKHwuLMR1wsrm0UvmEsBv28Li0UCU17wlVHk-QW7qG2lcVMVyFeYA8IlfsnJASuP5B1GUKkex37RwfNYXbwOnW7ApUU7KsdVawH8loZkIzIvGcNF33dAz7m7wAsqgYK097xN0sVP7GFqu0y6SnRR1o8qDm6XaoUOvU2P2PrN78z6jKyiFKhIK5lWE2ao7ueIXCELYo3WE9~cdZ4utPBzCxuAKfQHAz0pYhCEZrAf3aS2bUibNIWMrH1ddyMFY-P2oVPOOPpA-DShXg6UWw0C0l0H-wTXqRryFOINX2OR~XGMHl5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
      <Box mx="xxl" my="xl">
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
      </Box>
      <PageSplit title="Meet the Staff" variant="h3" />
      <Box mx="xxl" my="xl">
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
      </Box>
    </Layout>
  );
}
