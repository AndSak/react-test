import React, { Component } from "react";

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
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: "Going to learn", id: 1 },
                { label: "It's very well", star: false, id: 2 },
                { label: "Try the React", star: true, id: 3 },
                { label: "Continue...", star: true, id: 4 },
            ]
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.maxId = 5;
    }
    addItem(body) {
        const newMessage = {
            label: body,
            star: false,
            id: this.maxId++,
        };
        
        this.setState(({data}) => {
            const newArr = [...data, newMessage];
            return {data: newArr};
        });
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const newData = [...data.slice(0, index), ...data.slice(index + 1)];

            return { data: newData }
        });
    }

    render() {
        return (
            <AppBlockWW >
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList posts={this.state.data} delMes={this.deleteItem} />
                <PostAddForm addMes={this.addItem} />
            </AppBlockWW>
        )
    }
}

export default App;
