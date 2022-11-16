import React from "react";

class HeaderComponent extends React.Component {
    render() {
        console.log(this.sdf);

        return (
            <header className="App-header">
                <div style={{ float: "left", display: "inline-flex" }}>
                    <img src={this.props.propList.logo} className="App-logo" alt="logo" />
                    <p>{this.props.propList.display}</p></div>
                {/* <p>{this.props.simpleProp}</p>
       <p>{this.props.propObj.display}</p>
       <p>{this.props.propObj.text}</p> */}


                <div className="header-right">
                    <a href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </header>
        )
    }
}
export default HeaderComponent;