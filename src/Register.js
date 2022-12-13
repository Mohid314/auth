import React,{ useState } from 'react'
import { auth } from "./firebase-config";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,
    onAuthStateChanged,signOut,} from "firebase/auth";
import { Link } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Navigate } from 'react-router-dom';



export default function Register() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [user, setUser] = useState({});


    
      const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
          Navigate("/Login")
        } catch (error) {
          console.log(error.message);
        }
      };


  return (
      <div>
        <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}/>
            </Form.Group>
            <Button className="w-100" onClick={register}> Create User</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
      </div>
      
  )
}
