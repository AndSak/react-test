import React from "react";

const PostAddForm = () => {
    return (
        <form className="botton-panel d-flex">
            <input
                type="text"
                placeholder="What are you thinking?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                
            >add new</button>
        </form>
    )
}

export default PostAddForm;
