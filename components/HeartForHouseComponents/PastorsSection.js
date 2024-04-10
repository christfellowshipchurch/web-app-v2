import React from 'react';
import { Box, Button, Image } from 'ui-kit';

const HeartForHousePastorsSection = ({ id }) => {
  return (
    <Box bg="white" id={id} display="flex" justifyContent="center">
      <Box
        display="flex"
        flexDirection={{ _: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-around"
        maxWidth={1200}
        width={{ _: '90vw', md: '100%' }}
        py="xl"
        mx={{ _: '0', md: 'base' }}
      >
        <Box
          display="flex"
          flexDirection="column"
          width={{ md: '50%' }}
          maxWidth={550}
          mb={{ _: 'base', md: 0 }}
        >
          <Box display={{ _: 'block', md: 'none' }} mb="base">
            <Image
              source="/heart-for-house/pastors-image.jpg"
              width="90vw"
              height={420}
              borderRadius={0}
            />
          </Box>
          <Box mb="base" fontFamily="vision">
            <Box
              color="primary"
              fontWeight="600"
              fontSize={32}
              fontStyle="italic"
            >
              This is our{' '}
              <Box display={{ _: 'inline', md: 'none' }}>
                <br />
              </Box>
              Heart for the House
            </Box>
            <Box fontSize={20} textDecoration="underline" color="#6D6A6A">
              A letter from Pastors Todd & Julie
            </Box>
          </Box>
          <Box fontWeight="200">
            It was the spring of 1984 when a small Bible study began in my
            parents’ living room. My parents were always involved in church,
            always serving wherever they were needed—even serving as our Sunday
            School teachers for all four years of high school. While they had
            always opened their home for Bible studies and small groups, on that
            night in April of 1984, there was something different. That first
            night, as about 20 people gathered, none of us had any idea that
            this was actually the beginning of a new spiritual family—our Christ
            Fellowship family.
            <br />
            <br />
            In that house was love and acceptance, and joy and anticipation for
            what God was getting ready to do. In that house were people with
            hearts surrendered to the will and the Word of God. And what we love
            most about what we celebrate today is that all that love,
            anticipation, and hunger for God are still in the house. Only it’s
            so much better today because YOU are in the house...
          </Box>
          <Button
            as="a"
            href="https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig/4?fr=sYWNjNTcyMzY3MjY"
            target="_blank"
            mt="base"
            width={240}
          >
            CONTINUE READING
          </Button>
        </Box>
        <Box
          display={{ _: 'none', md: 'block' }}
          width={{ md: '50%' }}
          maxWidth={{ md: 450 }}
          ml={{ md: 'base' }}
        >
          <Image
            source="/heart-for-house/pastors-image.jpg"
            width={{ _: '90vw', md: '100%' }}
            height={540}
            borderRadius={0}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeartForHousePastorsSection;
