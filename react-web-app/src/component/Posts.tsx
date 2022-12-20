import React, { useState, useEffect } from 'react';
import { Alert, Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
interface postType {
    userId?: number,
    id: number,
    title: string,
    body: string

};
const App = () => {
    const [posts, setPosts] = useState<postType[]>([]);

    const [formData, setFormData] =useState({title:'',body:''});
    const [postSuccess, setPostSuccess]=useState<postType>();
    const [addError,setPostError]=useState('');
const [isUpdate, setIsUpdate]= useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
useEffect(()=>{
    show && setPostSuccess(undefined);
},[show])


// GET with fetch API
useEffect(() => {
    const fetchPost = async () => {
       const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
       );
       const data = await response.json();
       console.log(data);
       setPosts(data);
    };
    fetchPost();
 }, []);

 // Delete with fetchAPI
 const deletePost = async (id:number) => {
    let response = await fetch(
       `https://jsonplaceholder.typicode.com/posts/${id}`,
       {
          method: 'DELETE',
       }
    );
    if (response.status === 200) {
       setPosts(
          posts.filter((post) => {
             return post.id !== id;
          })
       );
    } else {
       return;
    }
 };

 // Post with fetchAPI
 const addPosts = async (formObj:{title: string, body: string, id?:number},method:string) => {
console.log(formObj);
const apiUrl = method==='PUT'? `https://jsonplaceholder.typicode.com/posts/${formObj.id}`:'https://jsonplaceholder.typicode.com/posts';
    let response = await fetch(apiUrl, {
       method: method,
       body: JSON.stringify({
          title: formObj.title,
          body: formObj.body
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    });
    let data = await response.json();
    console.log(response);
    if(response.ok)
    setPostSuccess(data);
    else setPostError('User not added yet try after sometime.....')
    setFormData({title:'',body:''})
 };
 const addPostsWithoutAsync =  (formObj:{title: string, body: string},method:string) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
       method: method,
       body: JSON.stringify({
          title: formObj.title,
          body: formObj.body
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    }).then(response=> response.json())
    .then(result=>{
        console.log(result);
        setPostSuccess(result);
        setFormData({title:'',body:''});
    }).catch(error=> console.log(error)) ;
 };

 const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
         if(isUpdate)
    addPosts(formData, 'PUT');
    else  addPosts(formData, 'POST');
   setIsUpdate(false);
 };

 const updatePost =(post:postType)=>{
    setIsUpdate(true);
setFormData(post);
handleShow();

 };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add more Post ++
            </Button>
            {addError ? <Alert variant='danger'>{addError}</Alert> :
           postSuccess?.title && <Alert><ul><li>{postSuccess?.title}</li><li>{postSuccess?.body}</li></ul></Alert>}
            <Modal show={show} onHide={handleClose}>
                <Form noValidate onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                value={formData.title}
                                onChange={(e) => setFormData({...formData,title:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Post Body</Form.Label>
                            <Form.Control as="textarea" rows={3} value={formData.body} 
                            onChange={(e) => setFormData({...formData,body:e.target.value})} />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'  onClick={handleClose} >
                            Add Post
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <Row>
                {posts.map((post) => {
                    return (
                        <Col md={3} className="p-2" key={post.id}>
                            <Card key={post.id}>
                                <Card.Title>{post.title}=={post.id}</Card.Title>
                                <Card.Body>{post.body}</Card.Body>
                                <Card.Footer>
                                    <Button onClick={() => deletePost(post.id)}>Delete</Button>
                                    <Button onClick={() =>updatePost(post) }>Update</Button>

                                </Card.Footer>
                            </Card>
                        </Col>
                    );
                })}
            </Row></>

    );
};

export default App;