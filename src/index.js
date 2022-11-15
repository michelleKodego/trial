import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/Nav'
import Slider from './components/Carousel';
import Aallcards from './components/AllCards';
import Quote from './components/Quotes';
import Text from './components/NewComponent';
import Func from './components/FuncComponent';
import ClassComp from './components/ClassComponent';
import Event from './components/HandlingEvent';
//import Hooks from './components/Hooks';
import App from './components/Exercise';
import DesPF from './components/Hooks';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Nav>

   </Nav>
    <Slider/><br/>

    <Func text="Sample Function Component as a prop"> 
      <p>Some text here for Func1</p>
      <p>Some text here for Func2</p>
    </Func>

    <ClassComp text="Sample Function Component as a prop">
        <p>Some text here for Class1</p>
        <p>Some text here for Class2</p>
    </ClassComp>
    <DesPF name="mich" age="32"/>
    <DesPF name="eric" age="43"/>

    <Quote/>
    <Aallcards />
    <Event/>
    <App/>
    <Text />  
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
