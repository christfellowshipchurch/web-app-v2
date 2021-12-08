/**
 * RichTextEditor.styles.js
 * 
 * Author: Caleb Panza
 * Created: Dec 08, 2021
 * 
 * Wraps the text editor in order to provide some manual CSS overrides to Quill's stylesheet without rewriting the entire theme.
 * 
 * todo : is this the best way of handling this? Not sure, but it was the quickest solution
 * 
 * note : class references can be found in `/node_modules/react-quill/dist/quill.css`
 */

import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
 
import { system } from 'ui-kit';

const toolbarBorderColor = ({ isFocused }) => props => {
    if (isFocused) {
      return css`
        border-top-color: ${themeGet('colors.primary')};
        border-left-color: ${themeGet('colors.primary')};
        border-right-color: ${themeGet('colors.primary')};
      `;
    }
};

const containerBorderColor = ({ isFocused }) => props => {
    if (isFocused) {
      return css`
        border-bottom-color: ${themeGet('colors.primary')};
        border-left-color: ${themeGet('colors.primary')};
        border-right-color: ${themeGet('colors.primary')};
      `;
    }
};
 
const RichTextEditor = styled.div`
    .ql-snow {
        font-family: ${themeGet("fonts.base")} !important;
        -webkit-transition: border-color 0.25s;
        transition: border-color 0.25s;
    }

    .ql-toolbar {
        border-top-left-radius: ${themeGet("radii.base")};
        border-top-right-radius: ${themeGet("radii.base")};
        background-color: ${themeGet("colors.neutrals.200")};
        
        ${toolbarBorderColor}
    }

    .ql-container {
        border-bottom-left-radius: ${themeGet("radii.base")};
        border-bottom-right-radius: ${themeGet("radii.base")};
        
        ${containerBorderColor}
    }

    .ql-active {
        color: ${themeGet("colors.primary")};
    }

    .ql-editor ol,
    .ql-editor ul {
        padding-left: 1em;

        li {
            padding-left: 0;
        }
    }

    .ql-editor .ql-bg-red {
        background-color: ${themeGet("colors.hues.red")};
    }
    .ql-editor .ql-bg-orange {
        background-color: ${themeGet("colors.hues.orange")};
    }
    .ql-editor .ql-bg-yellow {
        background-color: ${themeGet("colors.hues.yellow")};
    }
    .ql-editor .ql-bg-green {
        background-color: ${themeGet("colors.hues.mint")};
    }
    .ql-editor .ql-bg-blue {
        background-color: ${themeGet("colors.hues.blue")};
    }
    .ql-editor .ql-color-red {
        color: ${themeGet("colors.hues.red")};
    }
    .ql-editor .ql-color-orange {
        color: ${themeGet("colors.hues.orange")};
    }
    .ql-editor .ql-color-yellow {
        color: ${themeGet("colors.hues.yellow")};
    }
    .ql-editor .ql-color-green {
        color: ${themeGet("colors.hues.mint")};
    }
    .ql-editor .ql-color-blue {
        color: ${themeGet("colors.hues.blue")};
    }

    .ql-snow.ql-toolbar button:hover,
    .ql-snow .ql-toolbar button:hover,
    .ql-snow.ql-toolbar button:focus,
    .ql-snow .ql-toolbar button:focus,
    .ql-snow.ql-toolbar button.ql-active,
    .ql-snow .ql-toolbar button.ql-active,
    .ql-snow.ql-toolbar .ql-picker-label:hover,
    .ql-snow .ql-toolbar .ql-picker-label:hover,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active,
    .ql-snow.ql-toolbar .ql-picker-item:hover,
    .ql-snow .ql-toolbar .ql-picker-item:hover,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
        color: ${themeGet("colors.primary")};
    }

    .ql-snow.ql-toolbar button:hover .ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
        fill: ${themeGet("colors.primary")};
    }

    .ql-snow.ql-toolbar button:hover .ql-stroke,
    .ql-snow .ql-toolbar button:hover .ql-stroke,
    .ql-snow.ql-toolbar button:focus .ql-stroke,
    .ql-snow .ql-toolbar button:focus .ql-stroke,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
        stroke: ${themeGet("colors.primary")};
    }

    .ql-snow a {
        color: ${themeGet("colors.primary")};
    }

   ${system}
`;

 
export default RichTextEditor;
 