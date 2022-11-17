import React from 'react';
import CardComponent from './UserComponent'
import { FriendList } from './FriendList'

export class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myStatus: 'maried',
            Gender: 'F',
            Age: '34'
        };

    }


    updateAge = (agetopass, status) => {
        console.log(agetopass, 'I am inside');
        this.setState({
            Age: agetopass,
            myStatus: status
        });
    }

    render() {
        const friend = {
            name: "Dhanaji Mardhekar",
            Age: 25
        };
        return (
            <>
                <div>Show my state {this.state.myStatus}</div>
                <button onClick={this.updateAge.bind(this, 20, 'unmarried')}>Click Me</button>
                <div>My Age : {this.state.Age}</div>
                <h1>Show my prop {this.props.propObj.display}</h1>
                <CardComponent list={{
                    display: "prop to show",
                    text: "my prop displaying"

                }} />
                <FriendList friendList={friend} />
            </>
        )
    }
}
//export default MainContainer;