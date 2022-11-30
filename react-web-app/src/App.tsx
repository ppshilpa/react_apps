import React from 'react';
import './App.css';
import {NavComponent} from "./component/NavComponent";
import WebRoute from './WebRoute';

const App =() =>{
  return (
    <div className="container-fluid">
      <NavComponent/>
    <div className='row'>
      <div className='col-2'>dfgddd</div>
      <div className='col'><WebRoute/></div>

    </div>
      
    </div>
  );
}

export default App;
