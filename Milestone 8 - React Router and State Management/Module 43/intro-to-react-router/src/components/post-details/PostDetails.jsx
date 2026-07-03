import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();

    // const params = useParams();
    // console.log(params);

    const {postId} = useParams();
    console.log("PID:", postId);

    return (
        <div>
            <h3>This is post details page</h3>
            <h4>{post.title}</h4>
            <p>{post.body}</p>

            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;