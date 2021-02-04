import PropTypes from 'prop-types';
import { Heading, Text } from 'ui-kit';
import Styled, { StyledCard, StyledCardGrid } from './ValuesRow.styles';

function ValuesRow({ title, items } = {}) {
  return (
    <Styled>
      {title && (
        <Heading variant="h3" color="black" mb="base">
          {title}
        </Heading>
      )}
      <StyledCardGrid>
        {items.map((item, i) => {
          return (
            <StyledCard
              key={i}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              borderRadius="image"
            >
              <Heading variant="h3" color="black" fontWeight="700">
                {item.title}
              </Heading>
              <Text
                variant="s"
                color="black"
                fontWeight="400"
                width="55%"
                textAlign="center"
              >
                {item.text}
              </Text>
            </StyledCard>
          );
        })}
      </StyledCardGrid>
    </Styled>
  );
}

ValuesRow.propTypes = {
  title: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default ValuesRow;
