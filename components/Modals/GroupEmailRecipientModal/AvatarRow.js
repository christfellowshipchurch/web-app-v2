import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, SquareAvatar } from 'ui-kit';
import { Icon } from 'ui-kit';

function AvatarRow(props = {}) {
    return (
        <Box 
            display="flex" 
            flexDirection="row" 
            alignItems="center" 
            justifyContent="space-between"
        >
            <Box
                display="flex" 
                flexDirection="row" 
                alignItems="center" 
            >
                <SquareAvatar 
                    height="65px"
                    width="56px" 
                    src={props?.photo}
                    name={`${props?.firstName} ${props?.lastName}`}
                />
                <Box as="h4" pl="s">
                    {`${props?.firstName} ${props?.lastName}`}

                </Box>
            </Box>
            
            <Button variant="link" onClick={() => props?.toggle(props?.id)}>
                {props?.selected ? <Icon name="checkCircle" /> : <Icon name="circle" /> }
            </Button>

        </Box>
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