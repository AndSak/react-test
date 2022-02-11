import React from "react";

const PostAddForm = ({ addMes }) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="What are you thinking?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => addMes('Hello')}
            >add new</button>
        </div>
    )
}

export default PostAddForm;
