import {
  ArticleLink,
  Layout,
  MainPhotoHeader,
  EventsCallout,
  EventCallout,
  PageSplit,
} from 'components';
import { Info } from 'phosphor-react';
import { Box, CardGrid, theme } from 'ui-kit';

export default function About() {
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
    </Layout>
  );
}
