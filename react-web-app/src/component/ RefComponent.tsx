import { useEffect, useRef } from "react";
import { Button, ListGroup } from "react-bootstrap";
export const RefComponent=()=> {
  // create a ref for html element
  const divElement = useRef<HTMLDivElement>(null);
  const inputElement = useRef<HTMLInputElement>(null);


useEffect(()=>{
    console.log(divElement.current?.offsetHeight);

},[]);
const focusInput = ()=>{
    inputElement.current?.focus(); 
}
// create a ref 
const exampleRef = useRef<string>();
// set the ref value
exampleRef.current = "Hello World";
// access the ref value: 
// this prints "Hello World" to the console
console.log(exampleRef.current);

return <div ref={divElement}>
    <input type="text" name="firstName" ref={inputElement} defaultValue={exampleRef.current}/>
    <Button  onClick={focusInput} >Check </Button>
    <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
</div>;
}
