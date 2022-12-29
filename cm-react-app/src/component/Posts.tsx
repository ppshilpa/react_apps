import React, { useState, useEffect } from 'react';
import { Alert, Button, Card, Col, Form, Modal, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "..";
import { getPostList,addUpdatePost } from '../actions/postAsyncActions';
import { postApiRes,postAUApiRes } from '../reducers/postReducer';
interface postType {
    userId?: number,
    id: number,
    title: string,
    body: string

};

const Posts = () => {

    const [formData, setFormData] =useState({title:'',body:''});
   // const [postSuccess, setPostSuccess]=useState<postType>();
   // const [addError,setPostError]=useState('');
const [isUpdate, setIsUpdate]= useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



const {data:posts,loading: fetchLoader,error } = useSelector<RootState, postApiRes>(state=>state.posts);

const {data:postSuccess,loading: addUpdateLoader,error:addUpdateError } = useSelector<RootState, postAUApiRes>(state=>state.post);

const dispach  = useDispatch<AppDispatch>();


useEffect(()=>{
    dispach(getPostList());
    console.log(posts);

},[dispach]);

// GET with fetch API


 // Delete with fetchAPI
 const deletePost = async (id:number) => {
    let response = await fetch(
       `https://jsonplaceholder.typicode.com/posts/${id}`,
       {
          method: 'DELETE',
       }
    );
    if (response.status === 200) {
    //    setPosts(
    //       posts.filter((post) => {
    //          return post.id !== id;
    //       })
    //    );
    } else {
       return;
    }
 };

 


 const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
         if(isUpdate)
   dispach( addUpdatePost(formData, 'PUT'));
    else dispach( addUpdatePost(formData, 'POST'));
   setIsUpdate(false);
   setFormData({title:'',body:''})

   console.log(postSuccess)
 };

 const updatePost =(post:postType)=>{
    setIsUpdate(true);
setFormData(post);
handleShow();

 };

    return (
        <>
         {fetchLoader ? <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>:
           <> <Button variant="primary" onClick={handleShow}>
                Add more Post ++
            </Button>
            {addUpdateError ? <Alert variant='danger'>{addUpdateError }</Alert> :
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
                {posts?.map((post) => {
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
            </Row></>}
            </>

    );
};

export default Posts;