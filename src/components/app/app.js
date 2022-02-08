import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

const App = () => {

    const data = [
        {label: "Going" , star: true, id: "fjvhjjh"},
        {label: "It's very well", star: false, id: "yghjg"},
        {label: "Try again" , star: true, id: "tyrv"},
        {label: "Continue" , star: true, id: "hjvj"},
    ]

    return (
        <div className="app">
            <AppHeader />

            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;
