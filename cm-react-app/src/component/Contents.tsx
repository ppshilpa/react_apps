import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setIncrementCounter, setDecrementCounter } from "../actions/counterAction";
import { getUserList } from '../actions/userAsyncActions';

class Content extends Component<any> {
  constructor(props:any) {
    super(props);
   
  }

  componentDidMount() {
    this.props.getUserList();
  }

  render() {
    const { setIncrementCounter, setDecrementCounter, counterObj, userObj } = this.props;
    console.log(userObj);
    return (
      <div className="main">

        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </thead>
          <tbody>
            {userObj.userResponse.data && userObj.userResponse.data.map((x: { first_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; last_name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; avatar: string | undefined; }, i: React.Key | null | undefined) => <tr key={i}>
              <td>{x.first_name}</td>
              <td>{x.last_name}</td>
              <td>{x.email}</td>
              <td><img src={x.avatar} width="40" height="40" /></td>
            </tr>)}
          </tbody>
        </table>

        <div style={{ marginBottom: 20 }}>
          <h2>{counterObj.counterTitle}:=== {counterObj.counter}</h2>
          <input type="button" className="btn" style={{ marginRight: 10 }} value="+1" onClick={setIncrementCounter} />
          <input type="button" className="btn" value="-1" onClick={setDecrementCounter} />
        </div>

        

       </div>
    );
  }
}

const mapStateToProps = (state: { counter: any; users: any; }) => {
  return {
    counterObj: state.counter,
    userObj: state.users
  }
}

const mapDispatchToProps = {
  setIncrementCounter,
  setDecrementCounter,
  getUserList
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);