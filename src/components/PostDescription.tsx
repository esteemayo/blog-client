import { useState } from 'react';
import ReactQuill from 'react-quill-new';

import Input from './input/Input';
import TextQuill from './TextQuill';

import 'react-quill-new/dist/quill.snow.css';

const PostDescription = () => {
  const [value, setValue] = useState<ReactQuill.Value | undefined>('');

  return (
    <>
      <Input name='title' label='Title' placeholder='Title' />
      <TextQuill label='Description' value={value} onChange={setValue} />
    </>
  );
};

export default PostDescription;