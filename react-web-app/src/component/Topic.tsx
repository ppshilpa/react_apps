import { Component, ReactNode } from "react";
import { useParams } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'; 

const TopicWrap=()=>{
    const param = useParams();
    console.log("is param there",param);

    return <Alert variant="warning">Checking Alert component</Alert>;
}


export class Topics extends Component<any>{
    render(): ReactNode {
        console.log("is prps there",this.props);
        return <p>Topics</p>;
    }
}
export default TopicWrap;