import React, {useState} from "react";
import NavAppBar from "./components/AppNavBar";
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
import SignUp from "./components/SignUp";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       firstName: "",
//       lastName: "",
//     };
//   }
//
//   componentDidMount() {
//     const db = firebase.database();
//     console.log("db");
//     console.log(db);
//   }
//
//
//   handleChange = ({ target: { value, id } }) => {
//     this.setState({
//       [id]: value,
//     });
//   };
//
//   createAccount = () => {
//     const { email, password } = this.state;
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch((error) => console.log(error));
//   };
//   render() {
//     return (
//       // <div>
//       //   <div className={'login_block'}>
//       //     <input
//       //       type={"text"}
//       //       placeholder={"FirstName"}
//       //       id={"firstName"}
//       //       onChange={this.handleChange}
//       //     />
//       //     <input
//       //       type={"text"}
//       //       placeholder={"LastName"}
//       //       id={"lastName"}
//       //       onChange={this.handleChange}
//       //     />
//       //     <input
//       //       type={"email"}
//       //       placeholder={"Email"}
//       //       id={"email"}
//       //       onChange={this.handleChange}
//       //     />
//       //     <input
//       //       type={"password"}
//       //       placeholder={"Password"}
//       //       id={"password"}
//       //       onChange={this.handleChange}
//       //     />
//       //     <input type={"submit"} onClick={this.createAccount} />
//       //   </div>
//       // </div>
//         <>
//           <NavAppBar/>
//           <SignUp isLogIn ={true} />
//           {/*<LogInForm/>*/}
//           </>
//     );
//   }
// }

export default function App() {
  const [showLogIn, setShowLogIn] = useState( false);
  function handleToggle() {
    setShowLogIn(!showLogIn);
  }

  return (
    <>
      <NavAppBar onClick={handleToggle} />
      {showLogIn && (
          <SignUp/>
      )}
    </>
  );
}
