import HeartForHouseContentBlock from 'components/HeartForHouseContentBlock';
import { useCurrentBreakpoint } from 'hooks';
import React from 'react';
import { Box, Button } from 'ui-kit';

const HeartForHouseFutureSection = () => {
  const contentBlockSections = [
    {
      title: <u>BOCA RATON</u>,
      description:
        '<div style="font-weight: 200;">Christ Fellowship Boca Raton has experienced exponential growth ever since opening its doors. While our original plans included the demolition of our current site to build a 400-seat auditorium, we realized the current growth trajectory would eventually outgrow those plans! As we began to pray, God opened new doors right down the road. <br/><br/>Earlier this year, we purchased the former Macy’s Furniture Store on Glades Road—a 50,000-square-foot building, sitting on 5 acres of land that we intend to transform into a 1,000-seat sanctuary with ample space for ministry for every generation. <div  style="display: inline; font-weight: 600; color: #E63E51;">With a population of nearly 100,000 people, a large majority being unchurched—Boca Raton boasts opportunities to reach people for Jesus!</div> We anticipate this new home will be ready by Christmas 2025, as we transform this store into a place for God to do exceedingly more!</div>',
      image: '/heart-for-house/future-boca.jpeg',
    },
    {
      title: <u>JUPITER</u>,
      description:
        '<div style="font-weight: 200;">Last year, we shared the news that we were finally planting permanent roots in the town of Jupiter as we purchased the former Jupiter Fitness Center building located in the heart of Jupiter on Indiantown Road. Our plans include a complete renovation of the 20,000-square-foot space into a 400-seat sanctuary. But while awaiting these renovations and continuing to meet at the Wyndham Grand, God opened a door right next door. <br/><br/>After six years as a portable campus, in the Fall of 2023, Christ Fellowship Jupiter moved into its first-ever permanent location—a move-in ready, former church building located in the same parking lot as our future location! <div style="display: inline; font-weight: 600;  color: #E63E51;">Once the new building is renovated, we will be able to use both spaces for multi-generational ministry, including ample space for kids, students, and classes.</div> We anticipate opening the doors by Easter 2025—transforming this space where people worked out to a place where people can work out their faith and grow in their relationship with Jesus!</div>',
      image: '/heart-for-house/future-jupiter.jpeg',
    },
    {
      title: (
        <>
          CFSEU <u>HOUSING</u>
        </>
      ),
      description:
        '<div style="font-weight: 200;">As a part of our Get There First initiative, we are expanding Southeastern University at Christ Fellowship (CFSEU) in the years to come—with a vision to provide outstanding Christian leadership training through accredited classes for Dual Enrollment, Undergraduate, and Master’s Degrees.<br/><br/> We have a conceptual plan to build a <div style="display: inline; font-weight: 600; color: #E63E51"> multi-unit residence that will house both students and resident interns</div>—opening enrollment for prospective students across the country, and making CFSEU a premier destination in Christian education! As a first step in this large project, this year, we’ll be starting underground work and preparing the land for construction.</div>',
      image: '/heart-for-house/future-cfseu.png',
    },
  ];

  const currentBreakpoint = useCurrentBreakpoint();
  return (
    <Box bg="#EBEBEB">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        py="xl"
        backgroundImage={
          !currentBreakpoint.isSmall &&
          !currentBreakpoint.isMedium &&
          'url(/heart-for-house/i-heart-house-white.png)'
        }
        backgroundSize="170px"
        backgroundRepeat="no-repeat"
        backgroundPosition="right 8% bottom 95%"
      >
        <Box
          width="fit-content"
          color="#414141"
          fontSize={{ _: 34, md: 58 }}
          fontWeight={600}
          textAlign="center"
          mx={{ _: 's', md: '0' }}
          background="url(/heart-for-house/future-rectangle.png)"
          backgroundSize={{ _: 400, md: 640 }}
          backgroundPosition="center 55%"
          backgroundRepeat="no-repeat "
        >
          THE{' '}
          <Box display="inline" color="primary" textDecoration="underline">
            FUTURE
          </Box>
          <br /> WE’RE PRAYING FOR
          <br /> STARTS{' '}
          <Box display="inline" color="primary" textDecoration="underline">
            TODAY
          </Box>
        </Box>
        <Box
          display={{ _: 'none', md: 'inline' }}
          mt="s"
          mb="base"
          textAlign="center"
          color="#818181"
        >
          WHY WE'RE GIVING
        </Box>
        {/* Section 1 */}
        <Box my="l">
          <HeartForHouseContentBlock
            title={contentBlockSections[0].title}
            description={contentBlockSections[0].description}
            image={contentBlockSections[0].image}
            layout="left"
          />
        </Box>
        {/* Section 2 */}
        <Box my="l">
          <HeartForHouseContentBlock
            title={contentBlockSections[1].title}
            description={contentBlockSections[1].description}
            image={contentBlockSections[1].image}
            layout="right"
          />
        </Box>
        {/* Section 3 */}
        <Box my="l">
          <HeartForHouseContentBlock
            title={contentBlockSections[2].title}
            description={contentBlockSections[2].description}
            image={contentBlockSections[2].image}
            layout="left"
          />
        </Box>
        <Button
          mt="l"
          as="a"
          href="https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig/16?fr=sNWI3MDcyMzY3MDE"
          target="_blank"
        >
          SEE MORE
        </Button>
      </Box>
    </Box>
  );
};

export default HeartForHouseFutureSection;
