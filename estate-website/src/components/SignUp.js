import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import firebase from "firebase";
import CreateAccount from "./CreateAccount";

export default function SignUp(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { isLogIn } = props;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const formName = isLogIn ? "Sign Up" : "Log In";

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await CreateAccount(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <>
      <div
        className="w-100"
        style={{ maxWidth: "300px", float: "right", marginRight: "15px" }}
      >
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">{formName}</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button desabled={loading} className="w-100" type="submit">
                {formName}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
