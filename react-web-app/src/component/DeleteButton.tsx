import { Button } from "react-bootstrap";

type propList={
    deleteUser: (arg0: any) => any ;
    id:number;

}
export const DeleteButton=(props:propList)=>{
    return  <Button onClick={()=>props.deleteUser(props.id)}>Delet</Button>

}