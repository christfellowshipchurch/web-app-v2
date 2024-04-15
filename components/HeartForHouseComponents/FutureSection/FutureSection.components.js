import CustomLink from 'components/CustomLink';
import React from 'react';
import { Box, HtmlRenderer, Image } from 'ui-kit';
import { useRouter } from 'next/router';

export const HeartForHouseContentBlock = props => {
  const router = useRouter();

  return (
    <Box
      display="flex"
      mx={{ _: 'base', lg: '0' }}
      flexDirection={{ _: 'column', md: 'row' }}
      alignItems="center"
    >
      <Image
        display={{
          _: 'block',
          md: props?.layout === 'left' ? 'block' : 'none',
        }}
        onClick={() => {
          router.push(
            'https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig/16?fr=sNWI3MDcyMzY3MDE'
          );
        }}
        source={props?.image}
        width={{ _: '90vw', md: 500 }}
        height={{ _: 200, md: 300 }}
        borderRadius={0}
        m={0}
        mr={{ _: '0', md: 'base' }}
        mb={{ _: 'base', md: 0 }}
      />
      <Box maxWidth={{ _: '90vw', md: 600 }}>
        <CustomLink
          as="h1"
          target="_blank"
          color="primary"
          fontFamily="vision"
          fontWeight={600}
          href="https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig/16?fr=sNWI3MDcyMzY3MDE"
        >
          {props?.title}
        </CustomLink>
        <HtmlRenderer htmlContent={props?.description} />
      </Box>
      <Image
        display={{
          _: 'none',
          md: props?.layout === 'right' ? 'block' : 'none',
        }}
        onClick={() => {
          router.push(
            'https://issuu.com/christfellowshipchurch/docs/clients_heartforthehouse_print_handouts_7.5x10_dig/16?fr=sNWI3MDcyMzY3MDE'
          );
        }}
        source={props?.image}
        width={500}
        height={300}
        borderRadius={0}
        mr={{ _: '0', md: 'base' }}
      />
    </Box>
  );
};
