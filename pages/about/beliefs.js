import { Layout, MainPhotoHeader, MarketingHeadline } from 'components';
import { GET_CONTENT_ITEM } from 'hooks/useContentItem';
import { initializeApollo } from 'lib/apolloClient';
import { Box, CardGrid, Heading, Text } from 'ui-kit';

export default function Beliefs(props) {
  const mainHeaderData = {
    src: props.page?.coverImage?.sources?.[0]?.uri,
    title: `LH ${props.page?.title}`,
    description: 'Lorem ipsum doler sit itmut del fal some big bold header.',
    details: 'Lorem ipsum doler sit itmut del fal some big bold header.',
  };

  const beliefs = [
    {
      justify: 'left',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          I. The Scriptures
        </Heading>
      ),
      description:
        'The Holy Bible was written by men divinely inspired and is God’s revelation of Himself to man. It is a perfect treasure of divine instruction. It has God for its author, salvation for its end, and truth, without any mixture of error, for its matter. Therefore, all Scripture is totally true and trustworthy. It reveals the principles by which God judges us, and therefore is, and will remain to the end of the world, the true center of Christian union, and the supreme standard by which all human conduct, creeds, and religious opinions should be tried. All Scripture is a testimony to Christ, who is Himself the focus of divine revelation. ',
      image: {
        src:
          'https://s3-alpha-sig.figma.com/img/7a58/cc7a/9ac8329bdeea76f56ee11811634b91ac?Expires=1613347200&Signature=fGlM8YSbGaSBZAXol9f5qXIInlXy50XKfKqAooveWkmTYu~bSdfrfk0rAbxB8uA5Uy9G~QrecZ0QiiUwleMQTJ2CK443zC6GYFTPYbMVGuijkolBkm2FrSU4EalDTiPTobdQizNvGRD0ZbqEF6EGWwb72w6au5y4Iz1RyNm59-OePdA8Lyb39XDprF5jGF5kuo9kF0ey~gCTRNa65F55IhRks17rLQt~5XP28REuzzuL0JoPI161-OtMk368Ks5z7ghVQju60VLSxlEmtHgxL5TrZNYDNyKIpnCkdM48TDEVOWg7XIDEUUxxtObd5v-VAqFLPa71-pvXQrCkzWFGpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        hover: true,
        overlay: {
          color: 'black',
          opacity: '50%',
        },
        inner: (
          <Text color="bg" lineHeight="37px" textAlign="center">
            Exodus 24:4; Deuteronomy 4:1-2; 17:19; Joshua 8:34; Psalms 19:7-10;
            119:11,89,105,140; Isaiah 34:16; 40:8; Jeremiah 15:16; 36:1-32;
            Matthew 5:17-18; 22:29; Luke 21:33; 24:44-46; John 5:39; 16:13-15;
            17:17; Acts 2:16ff.; 17:11; Romans 15:4; 16:25-26; 2 Timothy
            3:15-17; Hebrews 1:1-2; 4:12; 1 Peter 1:25; 2 Peter 1:19-21.
          </Text>
        ),
      },
    },
    {
      justify: 'right',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          II. God
        </Heading>
      ),
      description:
        'There is one and only one living and true God. He is an intelligent, spiritual, and personal Being, the Creator, Redeemer, Preserver, and Ruler of the universe. God is infinite in holiness and all other perfections. God is all powerful and all knowing; and His perfect knowledge extends to all things, past, present, and future, including the future decisions of His free creatures. To Him we owe the highest love, reverence, and obedience. The eternal triune God reveals Himself to us as Father, Son, and Holy Spirit, with distinct personal attributes, but without division of nature, essence, or being.',
      image: {
        src:
          'https://s3-alpha-sig.figma.com/img/8a1b/523a/11b549c0de6757cb49ff67f796f7e9a1?Expires=1613347200&Signature=LmExuaM1-IeEE5zI7l0E~Sk5uvo~I3lKn6yxhETv8WjZ5-RT~cM8an8jRrmTUYcWaQQktxyD8bs0jdPKipLqMVIhPA~I-vWGRaRo6N8rlA2COwpjirmPZgSsXfOWoQGtxcN4ji9YHzDfV7vIWax5YcqceUJJFRNMxyYzBGFr6RnEgDkafvEsf1xYIHqmWZOcJAZg6u-joYhJK83EWE7JqEH4yshFZ-pO36FAWRxT14FrZwVHlu1~ZUXvS0J3kiNy4YHOKCvGE-gAtu60S66VKcUpDtELsK0972csfc1cXQ9V5xQgnROpA0~c~18Ce9IV5V8u5v6NJ2phvfizlcqm1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      },
    },
    {
      justify: 'left',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          A. God the Father
        </Heading>
      ),
      description:
        'God as Father reigns with providential care over His universe, His creatures, and the flow of the stream of human history according to the purposes of His grace. He is all powerful, all knowing, all loving, and all wise. God is Father in truth to those who become children of God through faith in Jesus Christ. He is fatherly in His attitude toward all men.',
      details:
        'Genesis 1:1; 2:7; Exodus 3:14; 6:2-3; 15:11ff.; 20:1ff.; Leviticus 22:2; Deuteronomy 6:4; 32:6; 1 Chronicles 29:10; Psalm 19:1-3; Isaiah 43:3,15; 64:8; Jeremiah 10:10; 17:13; Matthew 6:9ff.; 7:11; 23:9; 28:19; Mark 1:9-11; John 4:24; 5:26; 14:6-13; 17:1-8; Acts 1:7; Romans 8:14-15; 1 Corinthians 8:6; Galatians 4:6; Ephesians 4:6; Colossians 1:15; 1 Timothy 1:17; Hebrews 11:6; 12:9; 1 Peter 1:17; 1 John 5:7.',
    },
    {
      justify: 'right',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          B. God the Son
        </Heading>
      ),
      description:
        'Christ is the eternal Son of God. In His incarnation as Jesus Christ He was conceived of the Holy Spirit and born of the virgin Mary. Jesus perfectly revealed and did the will of God, taking upon Himself human nature with its demands and necessities and identifying Himself completely with mankind yet without sin. He honored the divine law by His personal obedience, and in His substitutionary death on the cross He made provision for the redemption of men from sin. He was raised from the dead with a glorified body and appeared to His disciples as the person who was with them before His crucifixion. He ascended into heaven and is now exalted at the right hand of God where He is the One Mediator, fully God, fully man, in whose Person is effected the reconciliation between God and man. He will return in power and glory to judge the world and to consummate His redemptive mission. He now dwells in all believers as the living and ever present Lord.',
      details:
        'Genesis 18:1ff.; Psalms 2:7ff.; 110:1ff.; Isaiah 7:14; 53; Matthew 1:18-23; 3:17; 8:29; 11:27; 14:33; 16:16,27; 17:5; 27; 28:1-6,19; Mark 1:1; 3:11; Luke 1:35; 4:41; 22:70; 24:46; John 1:1-18,29; 10:30,38; 11:25-27; 12:44-50; 14:7-11; 16:15-16,28; 17:1-5, 21-22; 20:1-20,28; Acts 1:9; 2:22-24; 7:55-56; 9:4-5,20; Romans 1:3-4; 3:23-26; 5:6-21; 8:1-3,34; 10:4; 1 Corinthians 1:30; 2:2; 8:6; 15:1-8,24-28; 2 Corinthians 5:19-21; 8:9; Galatians 4:4-5; Ephesians 1:20; 3:11; 4:7-10; Philippians 2:5-11; Colossians 1:13-22; 2:9; 1 Thessalonians 4:14-18; 1 Timothy 2:5-6; 3:16; Titus 2:13-14; Hebrews 1:1-3; 4:14-15; 7:14-28; 9:12-15,24-28; 12:2; 13:8; 1 Peter 2:21-25; 3:22; 1 John 1:7-9; 3:2; 4:14-15; 5:9; 2 John 7-9; Revelation 1:13-16; 5:9-14; 12:10-11; 13:8; 19:16.',
    },
    {
      justify: 'left',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          C. God the Holy Spirit
        </Heading>
      ),
      description:
        'The Holy Spirit is the Spirit of God, fully divine. He inspired holy men of old to write the Scriptures. Through illumination He enables men to understand truth. He exalts Christ. He convicts men of sin, of righteousness, and of judgment. He calls men to the Saviour, and effects regeneration. At the moment of regeneration He baptizes every believer into the Body of Christ. He cultivates Christian character, comforts believers, and bestows the spiritual gifts by which they serve God through His church. He seals the believer unto the day of final redemption. His presence in the Christian is the guarantee that God will bring the believer into the fullness of the stature of Christ. He enlightens and empowers the believer and the church in worship, evangelism, and service.',
      details:
        'Genesis 1:2; Judges 14:6; Job 26:13; Psalms 51:11; 139:7ff.; Isaiah 61:1-3; Joel 2:28-32; Matthew 1:18; 3:16; 4:1; 12:28-32; 28:19; Mark 1:10,12; Luke 1:35; 4:1,18-19; 11:13; 12:12; 24:49; John 4:24; 14:16-17,26; 15:26; 16:7-14; Acts 1:8; 2:1-4,38; 4:31; 5:3; 6:3; 7:55; 8:17,39; 10:44; 13:2; 15:28; 16:6; 19:1-6; Romans 8:9-11,14-16,26-27; 1 Corinthians 2:10-14; 3:16; 12:3-11,13; Galatians 4:6; Ephesians 1:13-14; 4:30; 5:18; 1 Thessalonians 5:19; 1 Timothy 3:16; 4:1; 2 Timothy 1:14; 3:16; Hebrews 9:8,14; 2 Peter 1:21; 1 John 4:13; 5:6-7; Revelation 1:10; 22:17.',
    },
    {
      justify: 'right',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          III. Man
        </Heading>
      ),
      description:
        'Man is the special creation of God, made in His own image. He created them male and female as the crowning work of His creation. The gift of gender is thus part of the goodness of God’s creation. In the beginning man was innocent of sin and was endowed by his Creator with freedom of choice. By his free choice man sinned against God and brought sin into the human race. Through the temptation of Satan man transgressed the command of God, and fell from his original innocence whereby his posterity inherit a nature and an environment inclined toward sin.',
      image: {
        src:
          'https://www.figma.com/file/zlluMsbAFPmWX6Z50iG86s/image/2da4bd9991eeb040758a7fc4da43c7baad0fc676',
      },
    },
    {
      justify: 'left',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          IV. Salvation
        </Heading>
      ),
      description:
        'Salvation involves the redemption of the whole man, and is offered freely to all who accept Jesus Christ as Lord and Saviour, who by His own blood obtained eternal redemption for the believer. In its broadest sense salvation includes regeneration, justification, sanctification, and glorification. There is no salvation apart from personal faith in Jesus Christ as Lord.',
      image: {
        src:
          'https://s3-alpha-sig.figma.com/img/a9d7/423f/335b3f40e2b6eb7e59046fc1f4a50358?Expires=1613347200&Signature=eG2VgjhapZ7ss~54agHIuVCre9kfGqO0jjMHI6rDaTYmhRHHxnFZJ7fqWsaa76yMl8nK5S1T5dugNcioQUh-ZTo-6vPumslU7BU95hl-9nUigQUG7wHznlRWTBvcpoO9e8Av4t-WTxqVM8yg9xbGZxFaHtlYquMDoySsjykw19Umq4jKuqdipFYigm86rCmjFkBacssiKEh8ssg2LsdoUhL1rE1tqu0znagPW2~9BYMHG1iQRexlyfdJxHm2K4CfG4r8Bq~c~YD9rfoWG3ui5GJtPoT1o-f2aA8fOjEieZnO-BhVDOMZbjYjcDYip4SbsRCXLhaD8eWXOBhZWzTf9g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      },
    },
    {
      justify: 'left',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          A. Regeneration
        </Heading>
      ),
      description:
        ' or the new birth, is a work of God’s grace whereby believers become new creatures in Christ Jesus. It is a change of heart wrought by the Holy Spirit through conviction of sin, to which the sinner responds in repentance toward God and faith in the Lord Jesus Christ. Repentance and faith are inseparable experiences of grace.\n\nRepentance is a genuine turning from sin toward God. Faith is the acceptance of Jesus Christ and commitment of the entire personality to Him as Lord and Saviour.',
    },
    {
      justify: 'right',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          B. Justification
        </Heading>
      ),
      description:
        'is God’s gracious and full acquittal upon principles of His righteousness of all sinners who repent and believe in Christ. Justification brings the believer unto a relationship of peace and favor with God.',
    },
    {
      justify: 'left',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          C. Sanctification
        </Heading>
      ),
      description:
        'is the experience, beginning in regeneration, by which the believer is set apart to God’s purposes, and is enabled to progress toward moral and spiritual maturity through the presence and power of the Holy Spirit dwelling in him. Growth in grace should continue throughout the regenerate person’s life.',
    },
    {
      justify: 'right',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          D. Glorification
        </Heading>
      ),
      description:
        'is the culmination of salvation and is the final blessed and abiding state of the redeemed.',
      details:
        'Genesis 3:15; Exodus 3:14-17; 6:2-8; Matthew 1:21; 4:17; 16:21-26; 27:22-28:6; Luke 1:68-69; 2:28-32; John 1:11-14,29; 3:3-21,36; 5:24; 10:9,28-29; 15:1-16; 17:17; Acts 2:21; 4:12; 15:11; 16:30-31; 17:30-31; 20:32; Romans 1:16-18; 2:4; 3:23-25; 4:3ff.; 5:8-10; 6:1-23; 8:1-18,29-39; 10:9-10,13; 13:11-14; 1 Corinthians 1:18,30; 6:19-20; 15:10; 2 Corinthians 5:17-20; Galatians 2:20; 3:13; 5:22-25; 6:15; Ephesians 1:7; 2:8-22; 4:11-16; Philippians 2:12-13; Colossians 1:9-22; 3:1ff.; 1 Thessalonians 5:23-24; 2 Timothy 1:12; Titus 2:11-14; Hebrews 2:1-3; 5:8-9; 9:24-28; 11:1-12:8,14; James 2:14-26; 1 Peter 1:2-23; 1 John 1:6-2:11; Revelation 3:20; 21:1-22:5.',
    },
    {
      justify: 'right',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          V. God's Purpose of Grace
        </Heading>
      ),
      description:
        'Election is the gracious purpose of God, according to which He regenerates, justifies, sanctifies, and glorifies sinners. It is consistent with the free agency of man, and comprehends all the means in connection with the end. It is the glorious display of God’s sovereign goodness, and is infinitely wise, holy, and unchangeable. It excludes boasting and promotes humility.',
      image: {
        src:
          'https://s3-alpha-sig.figma.com/img/25c7/77a2/de5f730b1b19e2b3f3a9f7dccc45bcea?Expires=1613347200&Signature=eTFNdHwrDoO9KLJxtCzcnH2k9f43JactcE-QH1ca0hV2srvzjdExzNcxWrCdMBQExoJ1LJDILCQhTGwp2f4X3sYyKrnjoxS2jdiLSzgruN9Pi6lHjTxNXz4-tEDkgzuWSbYrS28XgSXCnXfjXH~7qmxuYEd3Ph6v4VRYxCaj5y9Sn2dmINOmwTsWGYnhUTWgWHy~Q-4R7NdnWSSVyNY84C4fEKtW7EPE2bSMQUQAUDeOVGRK0l1bfD91NJLcBJoEOPTHHb60ez4x4~pzPGuevdCbcQC9HpDTPf7Eu66PHtTc9VrVAfOEDJBGYc-Df~IVZvNxAKroA2pbakoAp4HJQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      },
    },
    {
      justify: 'left',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          VI. The Church
        </Heading>
      ),
      description:
        'A New Testament church of the Lord Jesus Christ is an autonomous local congregation of baptized believers, associated by covenant in the faith and fellowship of the gospel; observing the two ordinances of Christ, governed by His laws, exercising the gifts, rights, and privileges invested in them by His Word, and seeking to extend the gospel to the ends of the earth. Each congregation operates under the Lordship of Christ through democratic processes. In such a congregation each member is responsible and accountable to Christ as Lord. ',
      image: {
        src:
          'https://s3-alpha-sig.figma.com/img/9531/e898/24dd66124d1cb4bd9e58e00530c7e33d?Expires=1613347200&Signature=eY8TsdxmpmgUpNP-lr6T2djvRmeM0HIsQ-dqaBzvl~LPE4yKwvEUMkNzHRg9Qk9hcx2X~WJXmCfrDXHZxpZFj0Ubvre5DwY3DBAZnKLcQ5NyebE-ucisaL5UnPrTtUPQM7DcZ4U11ngTqOUx1tQDK6WYNuznwwFMGyn-yAzXL~k0h1rkYa4O5Ww9CLb9LHk07DwHxcW2rNsd776dOaY99og~vqR85MNHSEC~SAr5lOezmKPOsjXTi5Rj3zxcop46mo2MUjneeAZkBUmawDguEtZXirkUO4ulAV0NnWcMm2PnC0P14Y3FDWgC51i8N0ePdJ6AzU22XuBjeXNUUYzXkA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      },
    },
    {
      justify: 'right',
      title: (
        <Heading variant="h2" color="fg" fontWeight="800">
          VII. Baptism and the Lord's Supper
        </Heading>
      ),
      description:
        'Christian baptism is the immersion of a believer in water in the name of the Father, the Son, and the Holy Spirit. It is an act of obedience symbolizing the believer’s faith in a crucified, buried, and risen Saviour, the believer’s death to sin, the burial of the old life, and the resurrection to walk in newness of life in Christ Jesus. It is a testimony to his faith in the final resurrection of the dead. Being a church ordinance, it is prerequisite to the privileges of church membership and to the Lord’s Supper.',
      image: {
        src:
          'https://s3-alpha-sig.figma.com/img/8688/4842/db5a433818ef7b5e55fd48645ee17c72?Expires=1613347200&Signature=OR6hPqBR3YSdLo7D0cGnO3S1IvIbU0ATpqW7XUUoaD9AdDDU5gw5Q4En8SQsiuNZhNoD8qUnid9UVdo3lAGGxrjJjL-E3OzESU-NAymuSgBh~Ke3j76Da4DERmRWFroo~jUqgiwQMHqB9T80zwkNG1cqHt3ZOg34Vs5VKm66RKkQadbuW7KRf~03QvtKNjz214WoAtsy8tFw29-06uaVT8Mb4ev3ziCumwyZA8GpMcHbP70Fvp3czEPTEibYRx3dFSqAZ75M7I5UvXu9YIonIeFKlRxd4chTkMywpHh1Bc05eVwVCDkCHvUHqJtuH5YPa~glmdKUENUJnFh3af57sg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      },
    },
  ];

  return (
    <Layout title="About - Beliefs" bg="bg_alt">
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
      <CardGrid
        px="xxl"
        pt="xl"
        mb="xxl"
        gridColumnGap="xl"
        gridRowGap="xxl"
        columns="1"
      >
        {beliefs.map((belief, i) => (
          <MarketingHeadline key={i} {...belief} />
        ))}
      </CardGrid>
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const pageResponse = await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: {
      itemId: 'UniversalContentItem:bd6137b9fe13bf2b8efdaea3a9e1d107',
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      page: pageResponse?.data?.node,
    },
  };
}
