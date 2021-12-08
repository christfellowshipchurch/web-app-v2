/**
 * RichTextEditor.js
 * 
 * Author: Caleb Panza
 * Created: Dec 08, 2021
 * 
 * A WYSIWYG style Html Rich Text Editor
 */

import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic'

import Loader from '../Loader'
import Styled from './RichTextEditor.styles'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: Loader,
})

/**
 * Quill editor toolbar
 * @see https://quilljs.com/docs/modules/toolbar/
 */
const defaultModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
      ],
      ['link'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
}

/**
 * Quill editor formats
 * @see https://quilljs.com/docs/formats/
 */
const defaultFormats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
]

function RichTextEditor({ formats, modules, placeholder, value, onChange }) {
    return <Styled>
        <QuillNoSSRWrapper 
            theme="snow"     
            modules={modules} 
            formats={formats} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </Styled>
};

RichTextEditor.propTypes = {
    formats: PropTypes.arrayOf(PropTypes.string),
    modules: PropTypes.shape({
        toolbar: PropTypes.arrayOf(PropTypes.array),
        clipboard: PropTypes.shape({
            matchVisual: PropTypes.bool
        })
    }),
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}
RichTextEditor.defaultProps = {
    modules: defaultModules,
    formats: defaultFormats,
    placeholder: "Type your message here...",
    value: "",
    onChange: () => null,
}

export default RichTextEditor;