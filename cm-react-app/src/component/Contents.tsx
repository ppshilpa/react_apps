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

        

        <h2>Lorem ipsum dolor</h2>
        <h5>quam pellentesque, Dec 10, 2018</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Nisi vitae suscipit..</p>
        <p>Semper quis lectus nulla at. Nullam ac tortor vitae purus faucibus ornare suspendisse. Nunc faucibus a pellentesque sit. Risus quis varius quam quisque id diam vel quam elementum. Ornare aenean euismod elementum nisi quis eleifend quam.</p>
        <br />
        <h2>Placerat vestibulum</h2>
        <h5>elementum integer enim neque, Sep 21, 2018</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Bibendum est ultricies..</p>
        <p>Semper quis lectus nulla at. Nullam ac tortor vitae purus faucibus ornare suspendisse. Nunc faucibus a pellentesque sit. Risus quis varius quam quisque id diam vel quam elementum.</p>
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