import React from "react";

import './post-list-item.scss'

const PostListItem = ({ label, delMes, onToggleImportant, onToggleLiked, star, like }) => {

  let classAll = "app-list-item d-flex justify-content-between";

  if (star) { classAll += " important" }
  if (like) { classAll += " like" }

  return (
    <div className={classAll}>
      <span className="app-list-item-label" onClick={onToggleLiked}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-star btn-sm" onClick={onToggleImportant}>
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={delMes}>
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  )
}

export default PostListItem;
