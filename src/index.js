import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Users extends Component {
  constructor(props) {
    super(props);
    // this.nextYear=this.nextYear.bind(this);
  }
  // nextYear(){ this.setState(state => ({years:++state.years}) ) }
  state = { years: 33 };

  nextYear = () => {
    this.setState(state => ({ years: ++state.years }))
  };
  lastYear = () => {
    this.setState(state => ({ years: --state.years }))
  }

  render() {
    const { name, surname, link } = this.props;
    const { years } = this.state;

    return (
      <React.Fragment>
        <h1>My name is {name}, last name-{surname}, years={years}</h1>
        <button onClick={this.nextYear}>Plus</button>
        <button onClick={this.lastYear}>Minus</button>
        <a href={link}>My profile</a>
      </React.Fragment>
    )
  }
}

const AllName = () => {
  return (
    <>
      <Users name="Bill" surname="Gets" link="facebook.com" />
      <Users name="Garry" surname="Smith" link="vk.com" />
      <Users name="John" surname="Chi" link="telegram.com" />
    </>
  )
}
ReactDOM.render(<AllName />, document.getElementById('root'));
