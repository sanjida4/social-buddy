import React from 'react';

const Comments = (props) => {
    const {name, email} = props.comment;
    return (
        <div>
            <h4>name: {name}</h4>
            <h5>email: {email}</h5>
        </div>
    );
};

export default Comments;