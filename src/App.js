import React, { useState }   from 'react';
import Heading from './Heading';
import Input from './Input';
import Output from './Output';
import './App.css';

const App = ()=> {
  const [arr , Setarr] = useState([]);
  const [count , Setcount] = useState(-1);
  const post = (e)=>{
    Setarr((p)=>{
      return ([...p , e])
    })
    Setcount(count+1);
  };
  const Updatearr = (e)=>{
    Setarr(e);
  }
  return (
    <React.Fragment>
      <Heading key="heading_comp"/>
      <Input get={post} key="input_comp"/>
      <div className="flexbox">
        <Output key="output_comp" op={arr} update={Updatearr} id={count} />
      </div>
      <div className="footer_app">
        <span>&copy;Copyright 2021<br/>Designed by Harshil</span>
      </div>
    </React.Fragment>
  );
};

export default App;
