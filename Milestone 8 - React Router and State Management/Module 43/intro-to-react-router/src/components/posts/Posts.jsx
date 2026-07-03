import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log("Posts: ", posts);
    return (
        <div>
            <h2>These are my posts: {posts.length}</h2>

            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;