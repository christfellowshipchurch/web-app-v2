/**
 * GroupEmailComposer.styles.js
 * 
 * Author: Caleb Panza
 * Created: Dec 07, 2021
 * 
 * Styles for the Email Composer
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import isEmpty from 'lodash/isEmpty';

import { system } from 'ui-kit';

const GroupEmailComposer = styled.div`
    ${system}
`

const Grid = styled.div`
    display: grid;
    gap: 15px;
    grid-gap: 15px;
    grid-template-areas: "from-email"
                         "recipients"
                         "email-body"
                         "attachments";
    grid-template-columns: 100%;

    @media screen and (min-width: ${themeGet('breakpoints.md')}) {
        grid-template-areas: "from-email email-body"
                             "recipients email-body"
                             "attachments email-body"
                             ". email-body";
        grid-template-columns: 40% 60%;
    }
`

const SubjectInput = styled.input`
    padding-bottom: 5px;
    width: 100%;
    
    font-size: 1rem;
    color: ${themeGet("colors.secondary")};
    
    border: 0;
    outline: 0;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: ${themeGet("colors.neutrals.300")};

    -webkit-transition : border 200ms ease-out;
    -moz-transition : border 200ms ease-out;
    -o-transition : border 200ms ease-out;
    transition : border 200ms ease-out;

    &:focus {
        outline: none !important;
        border-bottom-color: ${themeGet("colors.secondary")};
    }

    @media screen and (min-width: ${themeGet('breakpoints.md')}) {
        font-size: 1.25rem;
    }
`;

GroupEmailComposer.Grid = Grid
GroupEmailComposer.SubjectInput = SubjectInput

export default GroupEmailComposer