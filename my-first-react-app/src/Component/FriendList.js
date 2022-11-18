import React from 'react';

export class FriendList extends React.Component{

    componentWillUnmount(){
        console.log("call before unmouting");
    }
render(){
    console.log("friendlist render");
    return(<h1>Showing FriendList</h1>)
}

}