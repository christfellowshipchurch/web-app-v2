import React, { useState } from 'react';

import Box from '../Box';
import RichTextEditor from './RichTextEditor';

import 'react-quill/dist/quill.snow.css';

export default {
  component: RichTextEditor,
  tags: ['autodocs'],
};

const defaultHtml =
  '<p><strong>Hey there!</strong></p><p>Check out this super cool demo of the following features:</p><p><br></p><ul><li><strong>Bold</strong></li><li><em>Italics</em></li><li><u>Underline</u></li><li><s>Strikethrough</s></li><li><a href="https://christfellowship.church" rel="noopener noreferrer" target="_blank">Links</a></li></ul><p><br></p><ol><li>Can</li><li>Also</li><li>Do</li><li>Numbered</li><li>Lists</li></ol>';

export const Default = () => {
  const [html, setHtml] = useState(defaultHtml);

  return (
    <Box
      display="flex"
      flexDirection={{ _: 'column', md: 'row' }}
      gridGap="1rem"
    >
      <Box flex="1">
        <RichTextEditor value={html} onChange={setHtml} />
      </Box>
      <Box flex="1">
        <Box as="h3">HTML Output</Box>
        <Box>{html}</Box>
      </Box>
    </Box>
  );
};
