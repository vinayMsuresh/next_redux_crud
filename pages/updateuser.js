import { useRouter } from 'next/router';
import React, { useState } from 'react'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'; 
import { useDispatch } from 'react-redux';
import { updateUsers } from '../redux/acions';
function UpdateUser() {
    const router = useRouter();
    const user = router.query;
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [age, setAge] = useState(user.age);
    const dispatch = useDispatch();


    const update = (e) => {        
        const data = {name, email, age};
        dispatch(updateUsers(data,user.id));
        e.preventDefault()
        router.push('/');
    }
  return (
    <Container className='mt-4'>
        <Form className='border p-5'>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Name
                </Form.Label>
                <Col sm="6">
                    <Form.Control type='text' placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Email
                </Form.Label>
                <Col sm="6">
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Age
                </Form.Label>
                <Col sm="6">
                    <Form.Control type="number" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)} />
                </Col>
            </Form.Group>
        <Button type='submit' variant='success' className='mx-3' onClick={update}>Update User</Button>
        </Form>
    </Container>
  )
}

export default UpdateUser;