import React from "react";
import NavAppBar from "./components/NavAppBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import LogInForm from "./components/LogInForm";
import Admin from "./components/Admin";
import User from "./components/User";
import AddUser from "./components/AddUser";
import firebase, { onLog } from "firebase";
import Signup from "./components/Signup";
import {Container} from "react-bootstrap";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  }

  componentDidMount() {
    const db = firebase.database();
    console.log("db");
    console.log(db);
  }
  handleChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value,
    });
  };

  createAccount = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  };
  render() {
    return (
      // <div>
      //   <div className={'login_block'}>
      //     <input
      //       type={"text"}
      //       placeholder={"FirstName"}
      //       id={"firstName"}
      //       onChange={this.handleChange}
      //     />
      //     <input
      //       type={"text"}
      //       placeholder={"LastName"}
      //       id={"lastName"}
      //       onChange={this.handleChange}
      //     />
      //     <input
      //       type={"email"}
      //       placeholder={"Email"}
      //       id={"email"}
      //       onChange={this.handleChange}
      //     />
      //     <input
      //       type={"password"}
      //       placeholder={"Password"}
      //       id={"password"}
      //       onChange={this.handleChange}
      //     />
      //     <input type={"submit"} onClick={this.createAccount} />
      //   </div>
      // </div>
      <Container className="d-flax align-items-center justify-content-center" style={{minHeight:"100vh"}}>
        <div className="w-100" style={{maxWidth: "400px"}}>
          <Signup />
        </div>
      </Container>
    );
  }
}
