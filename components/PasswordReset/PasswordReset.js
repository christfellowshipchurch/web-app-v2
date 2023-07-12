/**
 * PasswordReset.js
 * 
 * Author: Caleb Panza
 * Created: Oct 25, 2021
 * 
 * Form to request a pin to reset your password for the given email address.
 */

import React, { useState } from 'react';

import useForm from 'hooks/useForm'
import useRequestEmailPin from 'hooks/useRequestEmailPin'
import validateEmail from 'utils/validateEmail'

import { Box, Button, TextInput } from 'ui-kit'
import Styled from './PasswordReset.styles'

const PasswordReset = () => {
    const [status, setStatus] = useState("IDLE")
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(null)
    const [requestEmailPin] = useRequestEmailPin()
    const { values, handleSubmit, handleChange } = useForm(() => {
        const { email } = values;
        const validEmail = validateEmail(email);
    
        if (validEmail) {
            setStatus('LOADING');
            requestEmailPin({ 
                variables: { email },
                update: () => {
                    setSubmitted(true)
                },
                onError: () => {
                    setError("Oops! That didn't work. Try refreshing your page and try again.")
                }
            });
        } else {
          setStatus('ERROR');
          setError('Please enter in a valid email.');
        }
    });

    return <Styled>
        <Styled.HeroSection>
            <Styled.HeroCurve src="/password-reset/curve.png" />
            <Styled.HeroWedgePattern src="/password-reset/wedge-pattern.png" />

            <Styled.HeroTitle>
                Forgot your password?
            </Styled.HeroTitle>
            
        </Styled.HeroSection>

        {submitted ?
        <Styled.ContentSection>
            <Styled.ContentTitle>
                You're all set!
            </Styled.ContentTitle>
            <Box as="hr" my="base" />
            <Styled.ContentSubtitle>
                Check your email for instructions on how to reset your password.
            </Styled.ContentSubtitle>
        </Styled.ContentSection>
        : <Styled.ContentSection>
            <Styled.ContentTitle>
                We can help!
            </Styled.ContentTitle>
            <Box as="hr" my="base" />
            <Styled.ContentSubtitle>
                Enter your Email Address to reset your password.
            </Styled.ContentSubtitle>
            <Box
                as="form"
                action=""
                onSubmit={handleSubmit}
            >
                <TextInput
                    id="email"
                    type="email"
                    placeholder="hello@email.com"
                    onChange={handleChange}
                    required
            autoFocus
                />

                {Boolean(error) ? (
                    <Box as="p" color="alert" fontSize="s" mt="s">
                        {error}
                    </Box>
                ) : null}

                <Box 
                    display="flex" 
                    justifyContent="flex-end" 
                    mt="l"
                >
                    <Button type="submit" status={status} disabled={status === "LOADING"}>
                        Reset Password
                    </Button>
                </Box>
            </Box>
            
        </Styled.ContentSection>}
    </Styled>
};

PasswordReset.propTypes = {}
PasswordReset.defaultProps = {}

export default PasswordReset;