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
    
    // The value of Counter is updated to same value during continues interval
    

  }

  componentWillMount() {
  setInterval(() => {
    this.setState({
      counter: 0
    });
   // console.log('interval----');

  }, 1000);}

  render() {

    return <b>Counter Value: {this.state.counter}</b>
  }
}
export class PureComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    
    // The value of Counter is updated to same value during continues interval
    
    setInterval(() => {
      this.setState({
        counter: 0
      });
      //console.log('interval----');
    }, 1000);
  }
  
  render() {
    console.log('interval render----');

    // This function wont be re-rendered in case when the new state is same as previous
    
    return <b>Counter Value: {this.state.counter}</b>
  }
}