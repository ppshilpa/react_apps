import React from "react";
import Avatar from '../img_avatar2.png';

class CardComponent extends React.Component{
  render(){
        return (
        <div className="card">
  <img src={Avatar} alt="Avatar" />
  <div >
    <h4><b>Shilpa Pawar</b></h4>
    <p>MCA 2018 Passout</p>
    <p>Pune University</p>
  </div>
</div>
      )
        }
    
}
export default CardComponent;