import { useMutation, useQuery } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import Auth from '../../utils/auth'
import React, { useState, useEffect } from "react";
function AddPost() {
    const [title, setTitle] = useState('');
    const [justify, setJustify] = useState('');
    const [addPost, { data, loading, error }] = useMutation(ADD_POST);

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            await addPost({
                variables: {
                    title,
                    postContent: justify,


                }
            })

            setTitle('');


            setJustify('');
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div>
            {!Auth.loggedIn() && <p style={{ color: "#774c2a", fontWeight: "light" }}>You need to be logged in, friend!</p>}
            <form className="post-form" onSubmit={handleSubmit}>
                <h1>Create New Post</h1>
                <div>
                    <label htmlFor="post-title">Title:</label>
                    <input className="form-input" placeholder="What is going on?"
                        type="text" value={title} id="post-title" name="post-title"
                        onChange={e => setTitle(e.target.value)} />
                </div>


                <div>
                    <label htmlFor="content">Post</label>
                    <textarea className="form-input" id="justify"
                        placeholder="What would you like so share?"
                        value={justify} name="justify"
                        onChange={e => setJustify(e.target.value)}></textarea>
                </div>
                <div className='merge'>


                    <button type="submit" className='btn'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )



}

export default AddPost;