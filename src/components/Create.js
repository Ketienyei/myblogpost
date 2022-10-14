import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const history =useHistory();

  const [data, setData]= useState({
    title:"",
    body:"",
    author:"",
})
  const handleChange =(e) => {
    const {name,value} = e.target;
    setData((prev) => {
      return {...prev, [name]:value}
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault();

    fetch('http://localhost:8000/blogs/' ,{
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify(data)  
    }).then(()=>{
      console.log('new blog added');
      history.push('/');
    })
  }

    return ( 
    <Form>
      <Form.Group className="mb-3" controlId="blog_title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" required
        onChange = {handleChange}name="title" placeholder="Enter title" /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="body_post">
        <Form.Label>Enter post</Form.Label>
        <Form.Control as="textarea" required 
         onChange = {handleChange}name="post" placeholder="Enter post" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="author">
      <Form.Label>author</Form.Label>
        <Form.Control type="text" required 
         onChange = {handleChange}name="author " placeholder="Enter author" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Save blog
      </Button>
      
    </Form>
     );
}
 
export default Create;