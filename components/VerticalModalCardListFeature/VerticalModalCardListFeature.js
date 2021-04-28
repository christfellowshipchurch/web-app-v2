import React from 'react';
import PropTypes from 'prop-types';

import { CustomLink } from 'components';
import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { CardGrid, Icon } from 'ui-kit';
import Styled from './VerticalModalCardListFeature.styles';

function VerticalModalCardListFeature(props = {}) {
  const modalDispatch = useModalDispatch();

  if (!props?.data?.cards) {
    return null;
  }

  let cards = props?.data?.cards;

  return (
    <CardGrid marginBottom="base" columns={'12'}>
      {cards.map((card, i) => (
        <Styled.Card key={i} index={i} total={cards.length}>
          <CustomLink
            as="div"
            href="#"
            onClick={e => {
              e.preventDefault();

              console.log('HI?');

              modalDispatch(
                showModal('NodeSingle', { id: card?.relatedNode?.id })
              );
            }}
          >
            <Styled.Content>
              <div>
                <h3>{card?.title}</h3>
                <p>{card?.summary}</p>
              </div>

              <div>
                <Icon name="expand" fill="none" />
              </div>
            </Styled.Content>
          </CustomLink>
        </Styled.Card>
      ))}
    </CardGrid>
  );
}

VerticalModalCardListFeature.propTypes = {
  data: PropTypes.object,
};

export default VerticalModalCardListFeature;
