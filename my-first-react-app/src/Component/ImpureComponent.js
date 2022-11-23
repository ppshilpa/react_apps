import React from 'react';
export class ImnpureComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        console.log("calling constructor");
    }
// shouldComponentUpdate(){
    //     return true;
    //   }
    componentDidMount() {
        console.log('calling did mount');
        setTimeout(() => {
            this.setState({
              counter: 1
            });
            //console.log('interval----');
          }, 3000);
    }

    static getDerivedStateFromProps(prop, state) {
        console.log(state, 'getDerivedStateFromProps', prop);
        if (prop.counter > state.counter) {
            console.log(prop.counter, '=====', state.counter);
            return { counter: prop.counter }
        }
        return state.counter;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, 'getSnapshotBeforeUpdate', prevState);
        // document.getElementById("div1").innerHTML =
        // "Before the update, the favorite was " + prevState.favoritecolor;
        return null;
    }
    componentDidUpdate(){
        setTimeout(() => {
            this.setState({
              counter: 5
            });
            //console.log('interval----');
          }, 3000);
    }

    render() {
        console.log("check readring  not pure component", this.state.counter)
        return (<h2>My counter state for normal component :{this.state.counter}</h2>)
    }
}
export class ImpureComponent extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            counter: 0
        }

    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                counter: 1
            });
            console.log("timer")
        }, 3000);
    }


    render() {
        console.log("check readring  pure component", this.state.counter)
        return (<h2>My counter state for pure component:{this.state.counter}</h2>)
    }
}

export class BoxCheck extends React.Component {
    state = {
      boxSize: "normal"
    };
  
    // Defines box sizes with background color
    boxes = {
      small: {
        height: 60,
        width: 60,
        backgroundColor: "yellow"
      },
      normal: {
        height: 120,
        width: 120,
        backgroundColor: "red"
      },
      big: {
        height: 180,
        width: 180,
        backgroundColor: "blue"
      }
    };
  
    // Get box DOM reference
    boxRef = React.createRef();
  
    handleClick = value => () => this.setState({ boxSize: value });
  
    getSnapshotBeforeUpdate() {
      // Let componentDidUpdate know whether to override the box
      // color or not.
      return {
        overrideBoxColor: this.boxRef.current.offsetHeight > 120
      };
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      // Override the box ref directly
      if (snapshot.overrideBoxColor) {
        this.boxRef.current.style.backgroundColor = '#000';
      }
    }
  
    render() {
      return (
        <>
          <div>
            <button onClick={this.handleClick("small")}>Shrink</button>
            <button onClick={this.handleClick("normal")}>Normal</button>
            <button onClick={this.handleClick("big")}>Size up</button>
          </div>
          <div ref={this.boxRef} style={this.boxes[this.state.boxSize]} />
        </>
      );
    }
  }