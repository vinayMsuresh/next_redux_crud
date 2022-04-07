import { useRouter } from 'next/router';
import React, { useState } from 'react'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'; 
import { useDispatch } from 'react-redux';
import { addUsers } from '../redux/acions';
function Adduser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const dispatch = useDispatch();
    const router = useRouter();

    const add = (e) => {        
        const data = {name, email, age};
        dispatch(addUsers(data));
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
                    <Form.Control type='text' placeholder='Enter name' onChange={(e)=>setName(e.target.value)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Email
                </Form.Label>
                <Col sm="6">
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="4">
                    Age
                </Form.Label>
                <Col sm="6">
                    <Form.Control type="number" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)} />
                </Col>
            </Form.Group>
        <Button type='submit' variant='success' className='mx-3' onClick={add}>Add User</Button>
        </Form>
    </Container>
  )
}

export default Adduser