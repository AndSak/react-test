import React from "react";

const PostListItem = ({label, star = false}) => {

    let classAll = "app-list-item d-flex justify-content-between";
    if(star){classAll += " important"}

    return (
        <div className = {classAll}>
            <span className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}

export default PostListItem;
