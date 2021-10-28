
import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const PasswordReset = styled.div`
    display: flex;
    flex-direction: column;

    background-color: ${themeGet('colors.paper')};
    color: ${themeGet('colors.fg')};
    text-align: center;

    @media screen and (min-width: ${themeGet('breakpoints.md')}) {
        flex-direction: row;
        max-width: 800px;
        margin: ${themeGet('space.l')} ${themeGet('space.base')};
        margin-left: auto;
        margin-right: auto;

        text-align: left;
        border-radius: ${themeGet('radii.base')};
        box-shadow: ${themeGet('shadows.xl')};
        overflow: ${props => (props.scaleCoverImage ? 'hidden' : 'initial')};

        border-width: 2px;
        border-color: ${themeGet('colors.neutrals.200')};
    }

    ${system}
`;

// Hero Section
const HeroSection = styled.div`
    position: relative;
    flex: 1;

    padding: ${themeGet('space.base')};

    background-color: ${themeGet('colors.primary')};

    @media screen and (min-width: ${themeGet('breakpoints.md')}) {
        border-top-left-radius: ${themeGet('radii.base')};
        border-bottom-left-radius: ${themeGet('radii.base')};
    }
`

const HeroTitle = styled.h1`
    width: 350px;
    z-index: 1;
    position: relative;
    margin: auto;
    
    color: ${themeGet('colors.paper')};
    font-size: 36pt;
    font-weight: bold;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (min-width: ${themeGet('breakpoints.md')}) {
        font-size: 48pt;
        top: 50%;
        transform: translateY(-50%);
    }
`

const HeroCurve = styled.img`
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
`

const HeroWedgePattern = styled.img`
    z-index: 0;
    position: absolute;
    bottom: 0;
    right: 0;
`

// Content Section
const ContentSection = styled.div`
    flex: 1;
    padding: ${themeGet('space.l')} ${themeGet('space.base')};
    
    @media screen and (min-width: ${themeGet('breakpoints.md')}) {
        padding: ${themeGet('space.xxl')} ${themeGet('space.l')};
    }
`

const ContentTitle = styled.h1`
    font-weight: 400;
    font-size: 24pt;
    font-style: italic;
    color: ${themeGet('colors.secondary')};
`

const ContentSubtitle = styled.h2`
    font-size: 14pt;
    color: ${themeGet('colors.tertiary')};
`

PasswordReset.ContentSection = ContentSection
PasswordReset.ContentSubtitle = ContentSubtitle
PasswordReset.ContentTitle = ContentTitle
PasswordReset.HeroSection = HeroSection
PasswordReset.HeroTitle = HeroTitle
PasswordReset.HeroCurve = HeroCurve
PasswordReset.HeroWedgePattern = HeroWedgePattern

export default PasswordReset;
