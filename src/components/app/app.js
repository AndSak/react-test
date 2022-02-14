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
                { label: "Going to learn", star: false, like: false, id: 1 },
                { label: "It's very well", star: false, like: false, id: 2 },
                { label: "Try the React", star: true, like: false, id: 3 },
                { label: "Continue...", star: true, like: false, id: 4 },
            ],
            term: ''
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.maxId = 5;
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearchNext = this.onUpdateSearchNext.bind(this);

    }
    addItem(body) {
        const newMessage = {
            label: body,
            star: false,
            id: this.maxId++,
        };

        this.setState(({ data }) => {
            const newArr = [...data, newMessage];
            return { data: newArr };
        });
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);

            const newData = [...data.slice(0, index), ...data.slice(index + 1)];

            return { data: newData }
        });
    }

    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, star: !old.star };
            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return { data: newArray }
        })
    }

    onToggleLiked(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = { ...old, like: !old.like };
            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return { data: newArray }
        })
    }

    searchPost(items, term) {
        if (term.length === 0) return items;

        return items.filter(item => {
            return (item.label.indexOf(term) > -1)
        });
    }

    onUpdateSearchNext(term){
        this.setState({term})
    }

    render() {
        const { data, term } = this.state;
        const likedYet = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.searchPost(data, term);

        return (
            <AppBlockWW >
                <AppHeader
                    likedYet={likedYet}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearchNext={this.onUpdateSearchNext}
                    />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={visiblePosts}
                    delMes={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}

                />
                <PostAddForm addMes={this.addItem} />
            </AppBlockWW>
        )
    }
}

export default App;
