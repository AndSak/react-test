import React from "react";
import PostListItem from "../post-list-item"
import { ListGroup } from 'reactstrap';

const PostList = ({ posts }) => {

    const elementsArray = posts.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps}/> 
            </li>
        )
    })

    return (
        <ListGroup className="app-list">
            {elementsArray}
        </ListGroup >
    )
}

export default PostList;
