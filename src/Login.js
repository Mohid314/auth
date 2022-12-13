import React,{ useState } from 'react';
import { auth } from "./firebase-config";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,
    onAuthStateChanged,signOut,} from "firebase/auth";
import { Link, Navigate } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
      <div>
        <Card>
            <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
        <Form>
            <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" onChange={(event) => {
            setLoginEmail(event.target.value);
          }}/>
            </Form.Group>

        <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={(event) => {
            setLoginPassword(event.target.value);
          }}/>
            </Form.Group>
        <Button className="w-100" onClick={login}><Link to="/feed">LogIn</Link></Button>
        </Form>
        <div className="w-100 text-center mt-2">
        Need an account? <Link to="/">Sign Up</Link>
      </div>
      </Card.Body>
      </Card>
      </div>
  )
}
