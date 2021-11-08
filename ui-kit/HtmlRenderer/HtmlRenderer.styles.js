import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { system } from 'ui-kit';
import { primaryHover } from 'ui-kit/Button/Button.styles'

const HtmlRenderer = styled.div`
    a {
        color: ${themeGet('colors.primary')};
        
        &:active,
        &:focus,
        &:hover {
            color: ${primaryHover};
        }
    }

    ${system};
`;

export default HtmlRenderer;