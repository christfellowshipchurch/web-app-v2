import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, GroupMemberStatusBadge, SquareAvatar } from 'ui-kit';
import { Icon } from 'ui-kit';

function AvatarRow(props = {}) {
    return (
        <Box 
            display="flex" 
            flexDirection="row" 
            alignItems="center" 
            justifyContent="space-between"
            width="100%"
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
                <Box pl="s">
                    <GroupMemberStatusBadge status={props?.status} />
                    <Box as="h4">
                        {`${props?.firstName} ${props?.lastName}`}
                    </Box>
                </Box>
            </Box>
            
            <Button 
                variant="link" 
                onClick={() => props?.toggle(props?.id)}
                p="0"
                m="0"
                color={props?.selected ? "primary" : "neutrals.500"}
            >
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