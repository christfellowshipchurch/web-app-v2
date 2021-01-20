import { Box } from 'ui-kit';
import { ArticleLink, Layout, MainPhotoHeader } from 'components';

export default function About() {
  return (
    <Layout title="About">
      <MainPhotoHeader
        src="https://s3-alpha-sig.figma.com/img/dd11/d81a/34804b1e54856793f1d8d0e3d3e6d2cb?Expires=1612137600&Signature=FhLG0mx3yxgU3EXbHK-EXJJd-IS4xTx~x4yOYHJqCOgCpRncf5NU1lenhSbwdryzrzwSvxJ0UdXyX5VJ-iY7rNs8gtIlpi6aju5WXg~70bNpGZIH-X9Lke80xheBLGuy54oz6aCA9dvvWB11Fd-gjXBeSxPwZfG48MxqS-f4LSYDED5R5bTEVNmb9fpDcmURbDs4YlP~WUa6GF79MBR1wDya6YCsortedMOS4idt323LXWhhzYz-lQ~6v7ZS1UBDrSoeqZNoFjxl14ZHtemYa~hZoIngLlHw~mLxL~EiHvN3IWzae8WUtWDA7ZnfkmBT5Wi1j6NGG~fLQ7z~zMh-Dg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        category="LH Kids"
        title="Lorem ipsum doler sit itmut del fal some big bold header."
        subtitle="Lorem ipsum doler sit itmut del fal some big bold header."
      />
      <Box p="xxl">
        <ArticleLink
          title="Child Dedication"
          description="Make a public commitment to raise and train your children to be faithful followers of Jesus Christ"
          url="/rsvp"
          urlText="RSVP"
          imageSrc="https://s3-alpha-sig.figma.com/img/c56b/0838/b6294050e9e43aff944b8569ef22dbd7?Expires=1612137600&Signature=VzoGDvUPIScP3mFxtLpHKrMvVxmz-J2HMAo8mAcKHwuLMR1wsrm0UvmEsBv28Li0UCU17wlVHk-QW7qG2lcVMVyFeYA8IlfsnJASuP5B1GUKkex37RwfNYXbwOnW7ApUU7KsdVawH8loZkIzIvGcNF33dAz7m7wAsqgYK097xN0sVP7GFqu0y6SnRR1o8qDm6XaoUOvU2P2PrN78z6jKyiFKhIK5lWE2ao7ueIXCELYo3WE9~cdZ4utPBzCxuAKfQHAz0pYhCEZrAf3aS2bUibNIWMrH1ddyMFY-P2oVPOOPpA-DShXg6UWw0C0l0H-wTXqRryFOINX2OR~XGMHl5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
      </Box>
    </Layout>
  );
}
