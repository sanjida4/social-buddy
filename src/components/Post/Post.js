import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;

    const history = useHistory();
    const showComments = id => {
        const url = `/post/${id}`
        history.push(url);
    }
    return (
        <div>
            <h3>id: {id}</h3>
            <p>{title}</p>
            <button onClick={()=> showComments(id)}>Show comments</button>
        </div>
    );
};

export default Post;