import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {years:33};
    }
    render() {
        const { name, surname, link } = this.props;
        return (
            <React.Fragment>
                <h1>My name is {name} , last name-{surname}, years ={this.state.years}</h1>
                <a href={link}>My profile</a>
            </React.Fragment>
        )
    }
}

const AllName = () => {
    return (
        <>
            <Users name="Bill" surname="Gets" link="facebook.com" />
            <Users name="Charry" surname="Smith" link="vk.com" />
            <Users name="John" surname="Chi" link="telegram.com" />
        </>
    )
}
ReactDOM.render(<AllName />, document.getElementById('root'));