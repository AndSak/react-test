import React, { Component } from "react";

class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(ev) {
        this.setState({ text: ev.target.value })
    }

    onSubmit(ev) {
        ev.preventDefault();
        if (this.state.text.length > 1) {
            this.props.addMes(this.state.text);
            this.setState({ text: '' });
        }
    }

    render() {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit} >
                <input
                    type="text"
                    placeholder="What are you thinking?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >add new</button>
            </form>
        )
    }
}

export default PostAddForm;
