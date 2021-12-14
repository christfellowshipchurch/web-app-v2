/**
 * GroupEmailComposer.js
 * 
 * Author: Caleb Panza
 * Created: Dec 07, 2021
 * 
 * Email composer for a specified Group.
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { Box, Button, Card, Icon, RichTextEditor } from 'ui-kit'

import Styled from './GroupEmailComposer.styles'
import AvatarRow from './AvatarRow'

import { useGroupEmailRecipients, useSearchGroupMembers } from 'hooks';

const Label = (props) => <Box 
    as="label"
    textTransform="uppercase"
    fontStyle="italic"
    fontWeight="bold"
    color="neutrals.600"
    fontSize="0.875rem"
    {...props}
/>

const StyledCard = (props) => <Card
    p="base"
    {...props}
/>

const GroupEmailComposer = (props = {}) => {
    const router = useRouter()
    const modalDispatch = useModalDispatch();
    const [searchGroupMembers, { groupMembers, loading }] = useSearchGroupMembers();
    const { recipients, toggleRecipient, setRecipients } = useGroupEmailRecipients({ 
        groupId: props?.data?.id
    })
    const [submitting, setSubmitting] = useState(false)
    const [emailBody, setEmailBody] = useState("")
    const fromEmail = "my.email@domain.com"
    const allSelected = recipients.length >= groupMembers?.length
    const disabled = submitting;

    const handleSubmit = () => {
        if (submitting) return

        setSubmitting(true)
        
        setTimeout(() => {
            modalDispatch(showModal("GroupEmailComposerConfirmation", { 
                memberCount: recipients?.length ?? 0 
            }))
            setSubmitting(false)
        }, 1000);
    }

    useEffect(() => {
        searchGroupMembers({
            variables: {
                groupId: props?.data?.id,
                query: {
                    attributes: [{
                        key: "groupId",
                        values: [props?.data?.id],
                    }]
                },
            }
        })
    }, [])

    return <Box>
        <Box 
            display="flex"
            justifyContent="space-between"
            alignItems={{
                _: "flex-start",
                md: "flex-end"
            }}
            mb={{ _: "s", md: "l"}}
        >
            <Box  flex="1" >
                <Button 
                    ml="-1rem"
                    variant="link"
                    onClick={() => router.back()}
                >
                    &larr; Back
                </Button>
                <Box as="h1">{props?.data?.title}</Box>
            </Box>

            <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
                flex="1"

            >
                <Button
                    size="s"
                    onClick={handleSubmit}
                    status={submitting ? "LOADING" : "IDLE"}
                    disabled={disabled}
                >
                    {!submitting && <Icon name="paperPlane" size="18px" />} Send
                </Button>
            </Box>
        </Box>

        <Styled.Grid>
            <Box gridArea="from-email">
                <StyledCard>
                    <Label>
                        Sender Email
                    </Label>
                    <Box
                        as="h3"
                        color="secondary"
                        mb="0"
                    >
                        {fromEmail}
                    </Box>
                </StyledCard>
            </Box>

            <Box gridArea="recipients">
                <StyledCard>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Label>
                            Recipients
                        </Label>

                        <Button 
                            variant="link" 
                            onClick={() => {
                                if (allSelected) {
                                    setRecipients([])
                                } else {
                                    setRecipients(groupMembers.map(({ id }) => id))
                                }
                            }}
                            p="0"
                            m="0"
                        >
                            {allSelected ? "Deselect All" : "Select All"}
                            {allSelected ? <Icon name="circle" ml="xs" /> : <Icon name="checkCircle" ml="xs" /> }
                        </Button>
                    </Box>
                    
                    <Box 
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gridGap="1rem"
                        mt="base"
                    >
                        {groupMembers.map((groupMember, i) => <AvatarRow 
                            key={groupMember?.id}
                            id={groupMember?.id}
                            photo={groupMember?.person?.photo?.uri}
                            firstName={groupMember?.person?.firstName}
                            lastName={groupMember?.person?.lastName}
                            selected={recipients.includes(groupMember?.id)}
                            status={groupMember?.status?.label}
                            toggle={toggleRecipient}
                        />)}
                    </Box>
                </StyledCard>
            </Box>

            <Box gridArea="email-body">
                <StyledCard>
                    <Label>
                        Email Subject
                    </Label>
                    <Button
                        variant="link"
                        size="s"
                        margin="0"
                        disabled={disabled}
                    />
                    
                    <Box 
                        position="relative"
                        mt="s"
                    >
                        <Styled.SubjectInput 
                            placeholder="Subject"
                        />
                    </Box>

                    <Box 
                        position="relative"
                        mt="base"
                    >
                        <RichTextEditor 
                            value={emailBody}
                            onChange={setEmailBody}
                        />
                    </Box>
                </StyledCard>
            </Box>
        </Styled.Grid>
    </Box>
};

GroupEmailComposer.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired
    })
}
GroupEmailComposer.defaultProps = {}

export default GroupEmailComposer;