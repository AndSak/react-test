import React, { Component } from "react";
import { Button } from "reactstrap";

class PostStatusFilter extends Component {
    constructor(props) {
        super();
        this.buttons = [
            { name: 'all', label: 'Everything' },
            { name: 'like', label: 'Liked' },
        ]
    }

    render() {
        const buttons = this.buttons.map(({ name, label }) => {

            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${clazz}`}
                    onClick={() => onFilterSelect(name)}>
                    {label}</button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }

}

export default PostStatusFilter;
