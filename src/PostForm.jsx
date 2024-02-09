import React, { useEffect, useState } from 'react'
import './PostForm.css';

function PostForm({ post: currentPost, handleSubmit, handleCancel }) {
    const [post, setPost] = useState({ username: '', email: '' });

    useEffect(() => {
        if (!currentPost) {
            setPost({ username: '', email: '' });
        }
        else {
            setPost(currentPost);
        };
    }, [currentPost]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(post);
            }}>
                <div className='input-group'>
                <label>Name:</label>
                <input type="text" name="username" value={post.username} onChange={onChange} required />
                

                <label>Email:</label>
                <input type='email' name="email" value={post.email} onChange={onChange} required />
                </div>
                

                <button className='submit-btn' type='submit'>Submit</button>
                <button className='cancel-btn' type='button' onClick={(e) => {
                    e.preventDefault();
                    handleCancel();
                }}>Cancel</button>
            </form>
        </div >
    )
}

export default PostForm