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
import isEmpty from 'lodash/isEmpty';

import { useModalDispatch, showModal } from 'providers/ModalProvider';
import { useSendGroupEmail } from 'hooks';
import { Box, Button, Card, Icon, RichTextEditor } from 'ui-kit';
import { sanitizeAllTags } from 'utils/sanitizeHtml'

import Styled from './GroupEmailComposer.styles';
import AvatarRow from './AvatarRow';

import {
  useCurrentUser,
  useGroupEmailRecipients,
  useSearchGroupMembers,
} from 'hooks';

const Label = props => (
  <Box
    as="label"
    textTransform="uppercase"
    fontStyle="italic"
    fontWeight="bold"
    color="neutrals.600"
    fontSize="0.875rem"
    {...props}
  />
);

const StyledCard = props => <Card p="base" {...props} />;

const GroupEmailComposer = (props = {}) => {
  const router = useRouter();
  const modalDispatch = useModalDispatch();
  const { currentUser } = useCurrentUser();
  const [searchGroupMembers, { groupMembers }] =
    useSearchGroupMembers();
  const { recipients, toggleRecipient, setRecipients } =
    useGroupEmailRecipients({
      groupId: props?.data?.id,
    });
  const [submitting, setSubmitting] = useState(false);
  const [emailBody, setEmailBody] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [status, setStatus] = useState('IDLE');
  const [statusMessage, setStatusMessage] = useState('STATUS MESSAGE');
  const fromEmail = currentUser?.profile?.email;
  const allSelected = recipients.length >= groupMembers?.length;
  const bodyExceedsCharacterCount = sanitizeAllTags(emailBody).length > 10000
  const disabled = submitting 
    || isEmpty(emailBody) 
    || recipients?.length < 1
    || bodyExceedsCharacterCount;
  const groupId = props?.data?.id;

  const [sendEmailMutation] = useSendGroupEmail();

  const handleSubmit = async () => {
    if (submitting) return;

    setSubmitting(true);

    try {
      const response = await sendEmailMutation({
        variables: {
          input: {
            groupId,
            recipientIds: recipients,
            subject: emailSubject,
            body: emailBody,
          },
        },
      });
      setStatusMessage(response?.data?.sendGroupEmail);
      setStatus('SUCCESS');
      setSubmitting(false);
    } catch (e) {
      setStatusMessage(e?.message ?? 'Could not send email.');
      setStatus('ERROR');
      setSubmitting(false);
      return;
    }
  };

  useEffect(() => {
    searchGroupMembers({
      variables: {
        groupId,
        query: {
          attributes: [
            {
              key: 'groupId',
              values: [props?.data?.id],
            },
          ],
        },
      },
    });
  }, [groupId, props?.data?.id, searchGroupMembers]);

  useEffect(() => {
    if (status === 'IDLE') return;

    modalDispatch(
      showModal('GroupEmailConfirmation', {
        status,
        statusMessage,
      })
    );
  }, [modalDispatch, status, statusMessage]);

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={{
          _: 'flex-start',
          md: 'flex-end',
        }}
        mb={{ _: 's', md: 'l' }}
      >
        <Box flex="1">
          <Button ml="-1rem" variant="link" onClick={() => router.back()}>
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
            status={submitting ? 'LOADING' : 'IDLE'}
            disabled={disabled}
          >
            {!submitting && <Icon name="paperPlane" size="18px" />} Send
          </Button>
        </Box>
      </Box>

      <Styled.Grid>
        <Box gridArea="from-email">
          <StyledCard>
            <Label>Sender Email</Label>
            <Styled.EmailLabel>{fromEmail}</Styled.EmailLabel>
          </StyledCard>
        </Box>

        <Box gridArea="recipients">
          <StyledCard>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Label>{`${recipients?.length} Recipients`}</Label>

              <Button
                variant="link"
                onClick={() => {
                  if (allSelected) {
                    setRecipients([]);
                  } else {
                    setRecipients(groupMembers.map(({ id }) => id));
                  }
                }}
                p="0"
                m="0"
              >
                {allSelected ? 'Deselect All' : 'Select All'}
              </Button>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gridGap="1rem"
              mt="base"
            >
              {groupMembers.map((groupMember, i) => (
                <AvatarRow
                  key={groupMember?.id}
                  id={groupMember?.id}
                  photo={groupMember?.person?.photo?.uri}
                  firstName={groupMember?.person?.firstName}
                  lastName={groupMember?.person?.lastName}
                  selected={recipients.includes(groupMember?.id)}
                  status={groupMember?.status?.label}
                  toggle={toggleRecipient}
                />
              ))}
            </Box>
          </StyledCard>
        </Box>

        <Box gridArea="email-body">
          <StyledCard>
            <Label>Email Subject</Label>
            <Button
              variant="link"
              size="s"
              margin="0"
              disabled={disabled || recipients.length === 0}
            />

            <Box position="relative" mt="s">
              <Styled.SubjectInput
                placeholder="Subject"
                value={emailSubject}
                onChange={e => setEmailSubject(e.target.value)}
              />
            </Box>

            {bodyExceedsCharacterCount && <Box
              position="relative"
              color="danger"
              my="base"
            >
              <Box as="i" color="alert">
                We're unable to send your email because it exceeds 10,000 characters. Please shorten and try again.
              </Box>
            </Box>}

            <Box position="relative" mt="base">
              <RichTextEditor value={emailBody} onChange={setEmailBody} />
            </Box>
          </StyledCard>
        </Box>
      </Styled.Grid>
    </Box>
  );
};

GroupEmailComposer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
GroupEmailComposer.defaultProps = {};

export default GroupEmailComposer;
