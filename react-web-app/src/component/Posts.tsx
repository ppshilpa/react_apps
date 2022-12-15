import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
interface postType {
    userId: number,
    id: number,
    title: string,
    body: string

};
const App = () => {
    const [posts, setPosts] = useState<postType[]>([]);
    const [title, setTitle] = useState('');

    const [body, setBody] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
 const addPosts = async (title: string, body: string) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
       body: JSON.stringify({
          title: title,
          body: body
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    });
    let data = await response.json();
    setPosts((posts) => [data, ...posts]);
    setTitle('');
    setBody('');
 };

 const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    addPosts(title, body);
 };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add more Post ++
            </Button>
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
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Post Body</Form.Label>
                            <Form.Control as="textarea" rows={3} value={body} onChange={(e) => setBody(e.target.value)} />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit' >
                            Add Post
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <Row>
                {posts.map((post) => {
                    return (
                        <Col md={3} className="p-2">
                            <Card key={post.id}>
                                <Card.Title>{post.title}=={post.id}</Card.Title>
                                <Card.Body>{post.body}</Card.Body>
                                <Card.Footer>
                                    <Button onClick={() => deletePost(post.id)}>Delete</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    );
                })}
            </Row></>

    );
};

export default App;