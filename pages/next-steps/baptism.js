import {
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
      'https://s3-alpha-sig.figma.com/img/091b/b983/74c95b9550a49519df5dfe5208a7ac95?Expires=1613347200&Signature=L7xO38zvPLY36Xocb3DM2VU2MJXKQVaD8UxcVBzyBFtKCE~~DBDye6KMNcZZPVkW-HtY8GrmXyWuLiGz~s1JyBVVvwl39odr0B4s6WwXu4HMKcMrNMQ6e5jpOyaV04GMAWnnGw4VS7Lgbx8aVoVBcEr8bVBZzAzCFn21TRlg0AAG-6811BLzJR87xVgatvk1WFU7F6WgjpW4od4X9jM6eA87H06IauSeu7DMiTPKmOTqFiqJcAfYc7D2NA4HzbuzwH1DR43~Dxl45Uw1mJy4kozSWpdFDYrCcOJvpiUe78eZ3I9oAatQDtI-OufO5-BLX3-boXQzPhEmzZymzPWI2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    title: 'LH Baptism',
    description: 'Lorem ipsum doler sit itmut del fal some big bold header.',
    details: 'Lorem ipsum doler sit itmut del fal some big bold header.',
  };

  return (
    <Layout title="Next Steps - Baptism" bg="bg_alt">
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
              'https://s3-alpha-sig.figma.com/img/0f99/2372/92a308153196f78e3e371d567cf8c01e?Expires=1613347200&Signature=MaG~2sEFbpsPayiNCW9FQRBR7npDmL5Rt0hTeB1cgipLSy9-mJkkM7~V6FAuZY6pEk~ZUxcdW3d1ZYVGJCof5nqQZHt9~mEhqcjEsClXss1cDQxIG13IH0x4acX535UTFYHUPG9Bv5DILWHYTD~KeoeJURaHJ4dIlgb7wK0rp-BBdI-87QgzL-SaGvWHRio1vHYrKlFiOpS4Y9Cra13uGMvX5ffuZUn86xZnPNeBYHS4iFYS5gzJ8Z~lj5F8ESyXPaGrLppLQuwCSLS8Fgj-1xgEDDrAVDQ~gX13sxQeC2ESfN45dMTegczhd2ivxN9xCGWcupWRD9k4ThMLG0GR0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          }}
          title={
            <>
              <Heading color="neutrals.900" variant="h2" fontWeight="800">
                Should I Be&nbsp;
              </Heading>
              <Heading color="primary" variant="h2" fontWeight="800">
                Baptized?
              </Heading>
            </>
          }
          description="Baptism isn’t required for salvation, but is the first step of faith for believers. The baptismal waters don’t save anyone. It’s Jesus that does that. Baptism is a picture of the work that Jesus has done in a person’s heart.\n\nBaptism illustrates Christ’s death, burial, and resurrection. (1 Corinthians 15:3-4) It shows our new life as a follower of Christ. (2 Corinthians 5:17) Baptism doesn’t make you a believer… it shows that you already believe. Baptism doesn’t save you; Jesus does! Baptism is like a wedding ring, signifying a relationship rather than forming that relationship."
        />
        <MarketingHeadline
          image={{
            src:
              'https://s3-alpha-sig.figma.com/img/8688/4842/db5a433818ef7b5e55fd48645ee17c72?Expires=1613347200&Signature=OR6hPqBR3YSdLo7D0cGnO3S1IvIbU0ATpqW7XUUoaD9AdDDU5gw5Q4En8SQsiuNZhNoD8qUnid9UVdo3lAGGxrjJjL-E3OzESU-NAymuSgBh~Ke3j76Da4DERmRWFroo~jUqgiwQMHqB9T80zwkNG1cqHt3ZOg34Vs5VKm66RKkQadbuW7KRf~03QvtKNjz214WoAtsy8tFw29-06uaVT8Mb4ev3ziCumwyZA8GpMcHbP70Fvp3czEPTEibYRx3dFSqAZ75M7I5UvXu9YIonIeFKlRxd4chTkMywpHh1Bc05eVwVCDkCHvUHqJtuH5YPa~glmdKUENUJnFh3af57sg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          }}
          justify="right"
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
          actions={[
            {
              label: 'Sign Up',
              onClick: noop,
            },
          ]}
        />
        <ValuesRow
          title={
            <Box display="flex" justifyContent="center">
              <Heading variant="h3" color="black" fontWeight="700">
                Getting Baptized At Home
              </Heading>
            </Box>
          }
          items={[
            {
              title: 'What you need:',
              text:
                '\n1. A tub/container full of water.\nAnother believer to baptize you.\n\n2. A phone/camera to record or live stream your step of faith!\n\n3. There’s no specific script you have to follow, but here’s a simple guide to how we normally do it at Long Hollow',
            },
            {
              title: "What you'll say",
              text:
                '\n“Have you given your life to Jesus?” (Response)\n\n“Because of that, I now baptize you my [brother/sister] in the name of the Father, Son, and Holy Spirit.”\n\nWhile submerging: “Buried with Christ in baptism…”\nWhile raising: “Raised to walk in the newness of life!”',
            },
          ]}
        />
        <Box>
          <MarketingHeadline
            title={
              <Heading variant="h2" fontWeight="800" mb="xs">
                Be Sure to Share It With Us!
              </Heading>
            }
            description="If you get baptized from home, please let us know! Fill out the quick contact form at longhollow.com/next, or simply message us your video on Facebook, Instagram, or Twitter. If you took a video of your baptism, please share it with us here. We’d love to celebrate with you, and share the big news with the rest of the Long Hollow family."
            justify="left"
            mb="m"
          />
          <Box display="flex">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="40px"
              height="40px"
              backgroundColor="#C13584"
              borderRadius="20px"
              mr="m"
            >
              <Icon name="instagram" fill="bg" size="32px" />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="40px"
              height="40px"
              backgroundColor="#3B5998"
              borderRadius="20px"
              mr="m"
            >
              <Icon name="facebook" fill="bg" size="26px" />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="40px"
              height="40px"
              backgroundColor="#1DA1F2"
              borderRadius="20px"
              mr="m"
            >
              <Icon name="twitter" fill="bg" size="26px" />
            </Box>
          </Box>
        </Box>
      </CardGrid>
    </Layout>
  );
}
