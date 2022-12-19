import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import parse from 'html-react-parser';

const AddNote = () => {
    const [value, setValue] = useState('');

    return (
        <div className='w-2/5 mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-5'>Add New Note</h2>
            <ReactQuill theme="snow" value={value} onChange={setValue} className="bg-white text-black" />
            <p>{JSON.stringify(value)}</p>
            {parse(value)}
        </div>
    );
};

export default AddNote;