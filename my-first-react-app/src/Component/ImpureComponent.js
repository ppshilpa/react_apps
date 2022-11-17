import React from 'react';
export class ImnpureComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            counter :0
        }
        console.log("calling constructor");

    }
        componentDidMount(){
            console.log('calling did mount');
                this.setState({
                  counter: 2
                });
        }
        static getDerivedStateFromProps(prop, state) {
            console.log(state,'getDerivedStateFromProps',prop );
            if(prop.counter !==state.counter){
                console.log(prop.counter,'=====', state.counter); 
                return {counter :prop.counter}
            }
            return  state.counter;
           
            
            
      }
    

render (){
    console.log("check readring  not pure component",this.state.counter)
    return (<h2>My counter state for normal component :{this.state.counter}</h2>)
}
}
 export class ImpureComponent extends React.PureComponent{
    constructor(){
        super()
        this.state = {
            counter :0
        }

    }
    // shouldComponentUpdate(){
    //     return true;
    //   }
        componentDidMount(){
            setInterval(() => {
                this.setState({
                  counter: 1
                });
                console.log("timer")
              }, 3000);
        }
        

render (){
    console.log("check readring  pure component",this.state.counter)
    return (<h2>My counter state for pure component:{this.state.counter}</h2>)
}
}