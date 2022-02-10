import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';
import styled from "styled-components";

const AppBlockWW = styled.div`
    margin: 0 auto;
    max-width: 600px;
    `
const App = () => {

    const data = [
        { label: "Going to learn", id: "fjvhjjh" },
        { label: "It's very well", star: false, id: "yghjg" },
        { label: "Try the React", star: true, id: "tyrv" },
        { label: "Continue...", star: true, id: "hjvj" },
    ]

    return (
        <AppBlockWW >
            <AppHeader />

            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </AppBlockWW>
    )
}

export default App;
