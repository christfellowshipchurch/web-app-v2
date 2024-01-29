/**
 * These are custom informational comoponents for the Location Single - Campus Info component.
 */

import React from 'react';
import { Box, Icon } from 'ui-kit';
import { showModal, useModalDispatch } from 'providers/ModalProvider';
import { whatToExpectVideos } from '../../../../lib/locationData';

const CFEButtons = name => {
  const modalDispatch = useModalDispatch();
  const campusName = name.campus;

  return (
    <Box display={{ _: 'none', md: 'flex' }} my="l">
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row">
          <Box ml="base">
            <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
              ¿Qué puedo esperar?
            </Box>
          </Box>

          <Box maxWidth={500}>
            <Box mb="s">
              En Christ Fellowship Español puedes ser parte de nuestros
              servicios que cuentan con música y espacios de adoración
              edificantes, mensajes alentadores de nuestros pastores,
              programación especial para tu familia y oportunidades para
              encontrar personas con quienes puedes caminar por la vida y hacer
              comunidad durante toda la semana—¡todo comienza aquí!
            </Box>

            <Box
              as="a"
              onClick={() =>
                modalDispatch(
                  showModal('Video', {
                    step: 0,
                    wistiaId:
                      campusName ===
                      'Christ Fellowship Español Palm Beach Gardens'
                        ? whatToExpectVideos['cfe']
                        : whatToExpectVideos['royalPalmBeach'],
                    title: '¿Qué puedo esperar?',
                  })
                )
              }
              mt="s"
              display="flex"
              alignItems="center"
              width="fit-content"
              fontStyle="italic"
              textDecoration="underline"
              cursor="pointer"
            >
              Mira lo que puedes esperar aquí!
              <Icon ml="s" name="play" size="24" variant="secondary" />
            </Box>
          </Box>
        </Box>

        <Box display="flex" flexDirection="row" mt="base">
          <Box ml="base">
            <Box as="h3" pr="xl" color="secondary" maxWidth={200}>
              Tenemos más para ti
            </Box>
          </Box>
          <Box maxWidth={500}>
            <Box mb="s" fontStyle="italic">
              {campusName === 'Christ Fellowship Español Palm Beach Gardens' ? (
                <Box fontStyle="italic">
                  Consulta{' '}
                  <Box as="a" href="/locations/iglesia-royal-palm-beach">
                    Christ Fellowship Church Español en Royal Palm Beach
                  </Box>
                  <Box fontStyle="italic">
                    para conocer más espacios entre semana.
                  </Box>
                </Box>
              ) : (
                <Box fontStyle="italic">
                  Consulta{' '}
                  <Box as="a" href="/locations/iglesia-palm-beach-gardens">
                    Christ Fellowship Church Español en Palm Beach Gardens
                  </Box>
                  <Box fontStyle="italic">
                    para conocer más espacios entre semana.
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const CFEMobileButtons = name => {
  const modalDispatch = useModalDispatch();
  const campusName = name.campus;

  return [
    <Box
      ml="base"
      display={{ _: 'flex', md: 'none' }}
      flexDirection="column"
      alignItems="center"
      mt="xl"
      mb={{ _: '0px', md: 'base' }}
      pb="l"
    >
      <Box>
        <Box as="h3" color="secondary" maxWidth={200}>
          ¿Qué puedo esperar?
        </Box>
      </Box>
      <Box flex="2">
        <Box mb="s" pr="base" textAlign="center">
          En Christ Fellowship Español puedes ser parte de nuestros servicios
          que cuentan con música y espacios de adoración edificantes, mensajes
          alentadores de nuestros pastores, programación especial para tu
          familia y oportunidades para encontrar personas con quienes puedes
          caminar por la vida y hacer comunidad durante toda la semana—¡todo
          comienza aquí!
        </Box>
      </Box>

      <Box
        as="a"
        onClick={() =>
          modalDispatch(
            showModal('Video', {
              step: 0,
              wistiaId:
                campusName === 'Christ Fellowship Español Palm Beach Gardens'
                  ? whatToExpectVideos['cfe']
                  : whatToExpectVideos['royalPalmBeach'],
              title: '¿Qué puedo esperar?',
            })
          )
        }
        mt="xxs"
        display="flex"
        alignItems="center"
        width="fit-content"
        fontStyle="italic"
        textDecoration="underline"
        cursor="pointer"
        mx="auto"
      >
        ¿Qué puedo esperar?
        <Icon ml="s" name="play" size="24" variant="secondary" />
      </Box>

      <Box mt="l">
        <Box as="h3" color="secondary" maxWidth={200}>
          Tenemos más para ti
        </Box>
      </Box>
      <Box flex="2">
        <Box mb="s" px="base" fontStyle="italic" textAlign="center">
          {campusName === 'Christ Fellowship Español Palm Beach Gardens' ? (
            <Box fontStyle="italic">
              Consulta{' '}
              <Box as="a" href="/locations/iglesia-royal-palm-beach">
                Christ Fellowship Church Español en Royal Palm Beach
              </Box>{' '}
              para conocer más espacios entre semana.
            </Box>
          ) : (
            <Box fontStyle="italic">
              Consulta{' '}
              <Box as="a" href="/locations/iglesia-palm-beach-gardens">
                Christ Fellowship Church Español en Palm Beach Gardens
              </Box>{' '}
              para conocer más espacios entre semana.
            </Box>
          )}
        </Box>
      </Box>
    </Box>,
  ];
};

export { CFEButtons, CFEMobileButtons };
