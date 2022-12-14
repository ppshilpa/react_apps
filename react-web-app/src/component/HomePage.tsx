import { useEffect, useState } from "react";
import { RefComponent } from "./ RefComponent";
import { FormExample } from "./FormExample"
import { Row, Col } from "react-bootstrap";
interface postType {
        userId: number,
        id: number,
        title: string,
        body: string

};
interface postCreateType{
    sucsses?:any,
    error?:string;
}
const Homepage = () => {
    const [name, setName]= useState("Shilpa");
    const [posts,setPosts]=useState<postType[]>([]);
    const [error, setError] =useState('');
    const [createPost, setCreatePost] =useState<postCreateType>();


 useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(result=>{
    setPosts(result);
})
.catch(error=>{
    setError("Opss somthing is wrong");
    console.log(error);
 });

 },[])
 useEffect(()=>{
    const postData ={
        "userId": 234,
        "title": "test post aaaa",
        "body": "test post body zzz"
      };
    const optionObject ={
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(postData)
        };
        
    fetch('https://jsonplaceholder.typicode.com/posts',optionObject)
    .then(response=>response.json())
    .then(result=>{
        setCreatePost({'sucsses':"Your post added successfully"});
    })
    .catch(error=>{
        setCreatePost({'error':'Opss somthing is wrong'});

        setError("Opss somthing is wrong");
        console.log(error);
     });
    console.log('createPost====',createPost);
     },[posts.length])
 
    return <><h1>Lets start with React learning</h1>
    <h2>Bingo {name}.....!</h2>
    <button type="button" className="btn btn-info" onClick={()=>setName("Sudha")} >Change Name</button>
   
        {error? <h1>====={error}</h1>:
        <>{posts.length && posts.map((post)=>{
            return <Row key={post.id}> 
                <Col>{post.userId}</Col>
            <Col>{post.id}</Col>
            <Col>{post.title}</Col>
            <Col>{post.body}</Col> 
            </Row>

         })}
        </>}
{/* <FormExample />
    <RefComponent /> */}
</>;

}
export default Homepage;