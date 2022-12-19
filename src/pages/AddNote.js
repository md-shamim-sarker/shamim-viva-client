import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import parse from 'html-react-parser';
import {BsArrowDownCircle} from 'react-icons/bs';
import {AiOutlinePlusCircle} from 'react-icons/ai';

const AddNote = () => {
    const [value, setValue] = useState('');
    const newCategory = false;
    const categories = ['Category1', 'Category2', 'Category3'];

    const newNoteHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={newNoteHandler} className='w-11/12 mx-auto mb-10'>
            <h3 className='text-3xl font-bold text-center my-10'>Add New Note with Quill</h3>
            <div className='flex w-full gap-y-3 flex-col'>
                <div className="w-full flex">
                    <div className='w-full'>
                        {
                            newCategory
                                ? <div className="w-full">
                                    <input
                                        tabIndex={0}
                                        type="text"
                                        name="category"
                                        placeholder="Enter a new category"
                                        className="input input-bordered w-full rounded-none focus:outline-none" />
                                </div>
                                :
                                <select
                                    tabIndex={1}
                                    name='category'
                                    className="select select-bordered w-full rounded-none focus:outline-none text-lg"
                                    defaultValue='Select a category'>
                                    <option>Select a category</option>
                                    {
                                        categories.map(category =>
                                            <option key={category._id}>{category.category}</option>)
                                    }
                                </select>
                        }
                    </div>
                    <button
                        // onClick={() => setNewCategory(!newCategory)}
                        className="btn btn-primary rounded-none">
                        {
                            newCategory
                                ? <BsArrowDownCircle title='Go back to select option' className='text-3xl'></BsArrowDownCircle>
                                : <AiOutlinePlusCircle title='Add a new category' className='text-3xl'></AiOutlinePlusCircle>
                        }
                    </button>
                </div>

                <div className="w-full">
                    <input
                        tabIndex={2}
                        type="text"
                        name="heading"
                        placeholder="Enter Heading"
                        className="input input-bordered w-full rounded-none focus:outline-none text-lg" />
                </div>

                <textarea
                    tabIndex={3}
                    name='intro'
                    className="textarea textarea-bordered w-full rounded-none focus:outline-none text-lg"
                    placeholder="Write something about this note....."></textarea>

                <ReactQuill
                    tabIndex={4}
                    theme="snow"
                    value={value}
                    onChange={setValue} />

                <button
                    tabIndex={5}
                    type='submit'
                    className='btn btn-primary rounded-none'
                >Submit</button>
            </div>
        </form>
    );
};

export default AddNote;