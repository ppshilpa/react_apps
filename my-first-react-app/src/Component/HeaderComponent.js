import React from "react";
import logo from '../logo.svg';

class HeaderComponent extends React.Component{
    render(){
        return (<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hi Codemine 7 dggddffhffhh</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>)
    }
}
export default HeaderComponent;