import {
  EasterLocationSearch,
  EasterWordCarousel,
  FAQ,
  Layout,
  PhotoCarousel,
} from 'components';
import { Box, Button, Image, EasterContentBlock } from 'ui-kit';
import faqData from 'components/FAQ/faqData';
import { useCurrentBreakpoint } from 'hooks';

const EasterCFE = () => {
  const currentBreakpoint = useCurrentBreakpoint();
  return (
    <Layout>
      <Box
        background="url('/easter/paper-background.jpg')"
        backgroundSize="contain"
      >
        {/* Header Section */}
        <Box pt="l" pb="xl">
          <Image
            width={{ _: '90vw', md: 600, lg: 800 }}
            aspectRatio="auto"
            source="/easter/easter-logo.png"
          />
          <Box
            my="base"
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontWeight="bold"
            mb={0}
            color="black"
          >
            <Box fontSize={{ _: 88, md: 110, lg: 124 }} lineHeight="0.7">
              PASCUA
            </Box>
            <Box mt={0} fontSize={{ _: 27, md: 34, lg: 38 }}>
              EN CHRIST FELLOWSHIP
            </Box>
          </Box>
          <Box my="l" display="flex" justifyContent="center">
            <Button
              as="a"
              bg="#3B7DD9"
              fontSize={18}
              py="xs"
              px="base"
              borderRadius="20px"
              href="#times-locations"
            >
              Encuentra Un Servicio
            </Button>
          </Box>
        </Box>

        {/* Video/Word Carousel Section */}
        <EasterWordCarousel
          title="Disfruta de un servicio de Pascua con"
          backgroundVideo="https://embed.wistia.com/deliveries/6ed64294542ce063a441632597b8554c.mp4"
          words={[
            'un ambiente lleno de vida',
            'música de adoración ',
            'un mensaje alentador',
            'actividades para niños',
            'tiempo con familia y amigos',
          ]}
        />

        {/* Times and Locations */}
        <EasterLocationSearch
          cfe
          title="Horarios y Localizaciones"
          description="Contamos con servicios de Pascua y Viernes Santo en el sur de Florida ¡Encuentra uno cerca y elige uno que funcione para ti!"
          additionalInfo='<span style="font-style:italic;">Ten en cuenta que contamos con traducción al inglés disponible en todos los servicios. <br/> Algunas ubicaciones de Christ Fellowship Church ofrecen traducción al español en vivo. <a href="/easter-2024" style="color: #3B7DD9; text-decoration: underline;">Ver todas las ubicaciones</a>.</span>'
        />

        {/* Kids Programming Section */}
        <Box
          id="kids-programming"
          py={{ _: 'l', xl: 'xxl' }}
          backgroundColor="#EBCD5F"
          backgroundSize={{ _: '200px', xl: '450px' }}
          backgroundPosition={{
            _: 'top -50px right -30px',
            md: 'top right 0px',
            xl: 'top -90px right -30px',
          }}
          backgroundRepeat="no-repeat"
          borderTop="3px solid black"
          backgroundImage={{
            _: '',
            md: "url('/easter/lines-desktop.png')",
            xl: "url('/easter/lines-desktop-xl.png')",
          }}
        >
          <Box
            m="auto"
            maxWidth="1100px"
            px="base"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <EasterContentBlock
              title={`Programación Especial Para Niños`}
              actions={[
                {
                  title: 'Encuentra Un Servicio',
                  border: '2px solid black',
                  relatedNode: {
                    url: '#times-locations',
                  },
                  bg: '#FF7D01',
                  borderRadius: '30px',
                  paddingLeft: '40px',
                  paddingRight: '40px',
                  mt: 's',
                },
              ]}
              contentLayout={currentBreakpoint.isSmall ? 'INVERTED' : 'LEFT'}
              htmlContent={`<div>
                <p>¡Christ Fellowship Kids busca llevar a tus hijos a amar a Jesús, amar a los demás y a amar la vida! </p>
                <p> La Pascua en Christ Fellowship está diseñada pensando en tu familia, incluyendo una programación especial para <b>bebés hasta primaria</b> durante todos los servicios del <b>Viernes Santo</b> y <b>Pascua</b>.</p>
              </div>
            `}
              image="/easter/special-kids-programming-espanol.png"
              imageRatio="12by17"
            />
          </Box>
        </Box>

        {/* Photo Carousel */}
        <PhotoCarousel photo="/easter/photo-carousel-espanol.jpg" />

        {/* Serve Section */}
        <Box
          background="linear-gradient(0deg, rgba(59,125,217,1) 24%, rgba(138,208,194,1) 91%)"
          borderTop="3px solid black"
          borderBottom="3px solid black"
        >
          <Box
            py={{ _: 'l', xl: 'xxl' }}
            backgroundImage="url(/easter/cross-equals-love.png)"
            backgroundPosition={{
              _: 'bottom right 30px',
              md: 'bottom right 100px',
            }}
            backgroundSize={{ _: 200, md: 300 }}
            backgroundRepeat="no-repeat"
          >
            <Box
              m="auto"
              mb={{ _: 'xl', md: 'xs' }}
              maxWidth="1100px"
              p="base"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <EasterContentBlock
                title={`Sirve durante la Pascua`}
                subtitle={'Únete al Dream Team de Pascua'}
                actions={[
                  {
                    title: 'Regístrate Para Servir',
                    border: '2px solid black',
                    relatedNode: {
                      url: '/events/join-easter-dream-team',
                    },
                    bg: '#FFEC7F',
                    color: 'black',
                    hoverColor: 'black',
                    borderRadius: '30px',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    mt: 's',
                  },
                ]}
                contentLayout={currentBreakpoint.isSmall ? 'INVERTED' : 'RIGHT'}
                htmlContent={`<div>
                <p>
                  Puedes ser parte de la Pascua en Christ Fellowship. ¡Cómo sirvas dependerá de ti! Desde las calles hasta los asientos: ¡hay un lugar para todos en el Dream Team de Pascua!
                </p>
              </div>
            `}
                image="easter/dream-team-espanol.png"
                imageRatio="13by17"
              />
            </Box>
          </Box>
        </Box>

        {/* FAQ Section Section */}
        <FAQ
          customTheme={{ secondary: '#39383A' }}
          py="l"
          mt="2.5rem !important"
          px={{ _: 'base', md: 'l' }}
          data={faqData('Easter CFE')}
          otherData={{
            title: 'FAQ',
            titleColor: 'black',
            question: 'Have additional questions?',
            description:
              '<div>Call <span style="font-weight: bold;">561-776-3380</span> to speak to someone on our team that would love to help you.</div>',
            descriptionOverride: true,
          }}
        />
      </Box>
    </Layout>
  );
};

export default EasterCFE;
