import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function SignUp(props) {

  const {isLogIn} = props;
  const formName = isLogIn ? "Sign Up" : "Log In";

  return (
    <>
        <div
          className="w-100"
          style={{ maxWidth: "300px", float: "right", marginRight: "15px" }}
        >
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">{formName}</h2>
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" required />
                </Form.Group>
                <Button className="w-100" type="submit">
                  {formName}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
    </>
  );
}
