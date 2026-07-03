import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
    console.log("Post: ", post);

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${post.id}`);
    }

    return (
        <div style={
            {
                border: '2px solid red',
                borderRadius: '20px',
                padding: '10px',
                margin: '10px'
            }
        }>
            <h3>{post.title}</h3>
            <Link to={`/posts/${post.id}`}><button>Show Details</button></Link>

            <button onClick={handleNavigate}>Details of {post.id}</button>
        </div>
    );
};

export default Post;