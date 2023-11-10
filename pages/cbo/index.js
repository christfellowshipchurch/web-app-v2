import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import colors from 'ui-kit/_config/colors';
import { Layout, FAQ, Tabs } from 'components';
import Box from 'ui-kit/Box/Box.styles';
import { HtmlRenderer, Select, TextInput } from 'ui-kit';
import faqData from 'components/FAQ/faqData';
import { CustomTab, customTabs } from '../../components/Tabs/cboCustomTabs';

const christBirthdayOffering = () => {
  const campuses = ['psl', 'stuart', 'Palm Beach Gardens'];
  const GiveButton = ({ title, description, type, url }) => {
    return (
      <Box as="a" href={url} target="_blank" textDecoration="none">
        <Box
          m="base"
          py="base"
          maxWidth={300}
          bg={type === 'secondary' ? 'white' : 'secondary'}
          color={type === 'secondary' ? 'secondary' : 'white'}
          borderRadius="l"
          px="base"
        >
          <Box as="h4">{title}</Box>
          {description}
        </Box>
      </Box>
    );
  };

  return (
    <Layout>
      <SCThemeProvider
        theme={{
          colors: {
            ...colors?.light,
            primary: '#CB2C30',
            secondary: '#39383A',
          },
        }}
      >
        <Box id="stories">
          <Tabs
            title="Stories of Impact"
            summary="HEAR HOW YOUR CHRIST BIRTHDAY OFFERING DELIVERS HOPE"
            TabComponent={CustomTab}
            tabs={customTabs}
          />
        </Box>

        {/* Give Section */}
        <Box
          id="give"
          py="xxl"
          px="base"
          backgroundImage="url(/cbo/cbp-give-background.png)"
          backgroundPosition="center"
          backgroundSize="cover"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
          color="white"
        >
          <Box as="h2" color="secondary">
            Give Your Christ Birthday Offering
          </Box>
          <Box as="h4" color="secondary" fontWeight="normal">
            GIVE IN PERSON DURING CHRISTMAS SERVICES OR ONLINE & BY MAIL ANY
            TIME
          </Box>
          <Box
            my="l"
            bg="#F5F5F5"
            py="base"
            px={{ _: 's', md: 'l' }}
            borderRadius="base"
          >
            <Box as="h4" color="secondary">
              Give Online
            </Box>
            <Box as="form">
              {/* on submit */}
              <Select borderColor="primary">
                <Select.Option value={null}>Select a Campus</Select.Option>
                {campuses.map(name => {
                  return <Select.Option>{name}</Select.Option>;
                })}
              </Select>
              <TextInput
                border="none"
                bg="#F5F5F5"
                color="primary"
                placeholder="$0.00"
              />
            </Box>

            {/* <Box color="primary">$0.00</Box> */}
            {/* <GiveButton
              title="Give Now"
              description="One-time gifts can be given any time throughout 2023."
              url="https://rock.christfellowship.church/heartforthehouse"
            />
            <GiveButton
              type="secondary"
              title="Plan to Give"
              description="Set up a recurring (weekly/monthly) gift throughout 2023."
              url="https://rock.christfellowship.church/heartforthehouse"
            /> */}
          </Box>
          <Box my="l" bg="primary" py="base" px={{ _: 's', md: 'l' }}>
            <Box fontWeight="bold">GIVE BY MAIL</Box>
            <HtmlRenderer
              py="xl"
              htmlContent='Christ Fellowship Church Contributions<br/>5343 Northlake Blvd. Palm Beach Gardens, FL 33418<br/> <i style="font-size:13px;" >*Note: Please designate "Heart for the House" on the memo line.</i>'
            />
            <Box as="a" color="white" href="#faq" fontStyle="italic">
              Need help? Check out these FAQs.
            </Box>
          </Box>
        </Box>

        {/* FAQs Section */}
        <Box id="FAQ" px="base" py="xl" width="100%">
          <Box mx="auto" maxWidth={1200}>
            <FAQ
              data={faqData('CBO')}
              showDescription={false}
              customTheme={{ primary: '#CB2C30', secondary: '#39383A' }}
            />
          </Box>
        </Box>
      </SCThemeProvider>
    </Layout>
  );
};

export default christBirthdayOffering;
