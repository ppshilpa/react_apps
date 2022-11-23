import React from 'react';
const BoldComponent = ({ name }) => <b>{name}!</b>;
// Take in a component as argument WrappedComponent

function simpleHOC(WrappedComponent) {
  // And return a new anonymous component
  return class extends React.Component{
    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
}

export const NewComponent = simpleHOC(BoldComponent);

export class Week extends React.Component {
  render() {
    return <h1>Today is {this.props.day}!</h1>;
  }
}

export class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sell: 'anything' };
  }
  render() {
    return <h1>I'm selling {this.state.sell} on {this.props.day}.</h1>;
  }
}

export class ImpureComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  } 
    // The value of Counter is updated to same value during continues interval
    static getDerivedStateFromProps(props, state) {
      console.log(props,'getDerivedStateFromProps', state);
      if(props.counter !== state.counter)
      return {counter:3};
}
componentDidMount() {
  setInterval(() => {
    this.setState({
      counter: 1
    });
  }, 10000);
}
shouldComponentUpdate(){
  return true;
}
getSnapshotBeforeUpdate(props, state) {
  console.log(props,'getSnapshotBeforeUpdate', state);
  // document.getElementById("div1").innerHTML =
  // "Before the update, the favorite was " + prevState.favoritecolor;
}
componentDidUpdate(props, state) {
  console.log(props, 'componentDidUpdate',state);}
  render() {
    console.log('interval----');

    return <b>Counter Value: {this.state.counter}</b>
  }
}
export class PureComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }
    // The value of Counter is updated to same value during continues interval
    componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: 1
      });
      //console.log('interval----');
    }, 1000);
  }
  
  render() {
    console.log('interval render----p');

    // This function wont be re-rendered in case when the new state is same as previous
    
    return <b>Counter Value: {this.state.counter}</b>
  }
}