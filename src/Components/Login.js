import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
      return email.length > 0 && password.length >=6;
    }
    function handleSubmit(event) {
      event.preventDefault();
    }

  return (
        <div className="col-lg-4 col-md-6 col-sm-10 container" style={{marginTop:"40px"}}>
            <Form onSubmit={handleSubmit}>
                <Form.Label className="uppercase" style={{fontWeight:"bolder", fontSize:"35px"}}>Đăng nhập</Form.Label>

                <Form.Group size="lg" controlId="email">
                    <Form.Label className="labelForm">Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                    <Form.Label className="labelForm">Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Label>Bạn chưa có tài khoản? <Link to="/register" style={{textTransform:'lowercase',color:'black',fontSize:'15px',fontFamily:'monospace',fontWeight:'bolder'}}>Đăng ký</Link></Form.Label>
                
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Đăng nhập
                </Button>  

            </Form>
        </div>
  );   
}