import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const text = React.createElement('h1', null,'i`m already ready')
// const elem = (
//   <div>
//     <h2> Start project!</h2>
//   </div>
// )
const Header = () => {
  return <h2> Start project!</h2>
}
const Field = () => {
  const holder = "Enter here";
  const styledField = {
    width: '200px',
    backgroundColor: '#444444'
  }
  return <input
        style={styledField}
        type="text"
        placeholder={holder}
        autoComplete=''
        className='first'
        htmlFor='' />
}
const Btn = () => {
  const text = "START"
  // const p = <p>Let's go</p>
  const logged = true;
  const res = () => {
    return "Start in"
  }
  return <button>{logged ? text : res()}</button>
}
const App = () => {
  return (
    <div>
      <Header /> <Field /> <Btn />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
