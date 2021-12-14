import React from 'react';
import PropTypes from 'prop-types';
import { Box, SquareAvatar } from 'ui-kit';
import { Icon } from 'ui-kit';

function AvatarRow(props = {}) {
console.log(props?.selected)

return (
    <>
    <Box display="flex" flexDirection="row" alignItems="center"  >
        <SquareAvatar 
            height="65px"
            width="56px" 
            src={props?.photo}
        />
        <Box as="h4" pl="s">
            {`${props?.firstName} ${props?.lastName}`}

        </Box>
        <Box as="h4" pl="s" onClick={() => props?.toggle()}>
            {props?.selected ? <Icon name="checkCircle" /> : <Icon name="circle" /> }
        </Box>

    </Box>
    </>
    );
}




AvatarRow.propTypes = {
    id: PropTypes.string.isRequired,
    photo: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    status: PropTypes.string,
    selected: PropTypes.bool
}

AvatarRow.defaultProps = {
    selected: false,
    status: "ACTIVE"
}

export default AvatarRow;