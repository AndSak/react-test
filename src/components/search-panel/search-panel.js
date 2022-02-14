import React, { Component } from "react";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearchNext(term);
    }

    render() {
        return (
            <input className="form-control search-input"
                type="text"
                placeholder="Search notices"
                onChange={this.onUpdateSearch}
            />
        )
    }

}

export default SearchPanel;
