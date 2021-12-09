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
import take from 'lodash/take'
import { slugify } from 'utils';

import { Box, Button, Card, Icon, SquareAvatar, TextArea } from 'ui-kit'
import { CustomLink } from 'components';

import Styled from './GroupEmailComposer.styles'

import { useSearchGroupMembers } from 'hooks';
import { useGroupManage } from 'providers/GroupManageProvider';

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
    const [{ groupData }] = useGroupManage();
    console.log('AHFH', groupData);
    const [searchGroupMembers, { groupMembers, facets, loading }] =
      useSearchGroupMembers();

    const [searchArgs, setSearchArgs] = useState([
        { key: 'text', values: [''] },
        { key: 'groupId', values: [groupData?.id] },
        { key: 'status', values: [] },
    ]);

    useEffect(() => {
        searchGroupMembers({
          variables: {
            groupId: groupData?.id,
            query: {
              attributes: searchArgs,
            },
          },
        });
      }, [searchArgs]);
    
      useEffect(() => {
        searchGroupMembers({
          variables: {
            groupId: groupData?.id,
            query: {
              attributes: [...searchArgs],
            },
          },
        });
      }, []);

      console.log(groupMembers)

    const fromEmail = "my.email@domain.com"
    // Recipients
    const recipients = [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
    ]
    const visibleRecipients = take(recipients, 7)
    // Attachments
    const attachments = [
        { type: "image", src: "https://picsum.photos/200" },
        { type: "image", src: "https://picsum.photos/200" },
        { type: "file", src: "https://picsum.photos/200" },
        { type: "image", src: "https://picsum.photos/200" },
        { type: "file", src: "https://picsum.photos/200" },
        { type: "image", src: "https://picsum.photos/200" },
        { type: "image", src: "https://picsum.photos/200" },
        { type: "image", src: "https://picsum.photos/200" },
    ]
    const visibleAttachments = take(attachments, 5)

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
            <Box flex="1">
                <CustomLink href={`/group/${slugify(props?.data?.title)}`}>
                    &larr; Back
                </CustomLink>
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
                    onClick={() => console.log("SEND EMAIL")}
                >
                    <Icon name="paperPlane" size="18px" /> Send
                </Button>
            </Box>
        </Box>

        <Styled.Grid>
            <StyledCard gridArea="from-email">
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

            <StyledCard gridArea="recipients">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    // Hack to position the button correctly
                    mt="-16px"
                    mr="-16px"
                >
                    <Label>
                        Recipients
                    </Label>

                    <Button
                        variant="link"
                        size="s"
                        margin="0"
                    >
                        {`${recipients?.length > 0 ? "Edit" : "Select"} Recipients`}
                    </Button>
                </Box>
                
                <Box 
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                >
                    {visibleRecipients.map((r, i) => <SquareAvatar 
                        key={`${r}-${i}`}
                        src={r} 
                        width="56px"
                        height="65px"
                        ml={{
                            _: i === 0 ? "-5px" : "-1.5rem",
                            md: i === 0 ? "-5px" : "-1rem",
                        }}
                        borderColor="white"
                        borderWidth="5px"
                        borderStyle="solid"
                    />)}
                    {recipients?.length > visibleRecipients?.length && <Box 
                        as="p"
                        m="xs"
                        color="neutrals.600"
                    >
                        {`+${recipients?.length - visibleRecipients?.length}`}
                    </Box>}
                </Box>
            </StyledCard>

            {/* ! Might end up removing this before release */}
            <StyledCard gridArea="attachments">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    // Hack to position the button correctly
                    mt="-16px"
                    mr="-16px"
                >
                    <Label>
                        Attachments
                    </Label>

                    <Button
                        variant="link"
                        size="s"
                        margin="0"
                    >
                        {`${attachments?.length > 0 ? "Edit" : "Select"} Attachments`}
                    </Button>
                </Box>
                
                <Box 
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                >
                    {visibleAttachments.map(({ type, src }, i) => <Box
                        key={`attachment-${i}`}
                        ml={i === 0 ? "-5px" : "-0.6rem"}
                        width="42px"
                        height="42px"
                        backgroundColor="secondary"
                        borderColor="white"
                        borderWidth="5px"
                        borderStyle="solid"
                        borderRadius="4px"
                    />)}

                    {attachments?.length > visibleAttachments?.length && <Box 
                        as="p"
                        m="xs"
                        color="neutrals.600"
                    >
                        {`+${attachments?.length - visibleAttachments?.length}`}
                    </Box>}
                </Box>
            </StyledCard>

            <StyledCard gridArea="email-body">
                <Label>
                    Email Subject
                </Label>
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
                    <TextArea 
                        placeholder="Html WYSIWYG"
                        minWidth="100%"
                        maxWidth="100%"
                    />
                </Box>
            </StyledCard>
        </Styled.Grid>
    </Box>
};

GroupEmailComposer.propTypes = {}
GroupEmailComposer.defaultProps = {}

export default GroupEmailComposer;