import React, { useEffect, useState } from "react";
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
import LogIn from "./components/LogIn";
import firebase from "firebase";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";

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
//           <LogIn isLogIn ={true} />
//           {/*<LogInForm/>*/}
//           </>
//     );
//   }
// }

export default function App() {
  const [showLogIn, setShowLogIn] = useState(false);
  useEffect(() => {
    const db = firebase.database();
    console.log('mydb',db);
  });
  function handleToggle() {
    setShowLogIn(!showLogIn);
  }

  return (
    <>
      <Router>
      <NavAppBar onClick={handleToggle} />
          <LogIn />
      {/*/!*<Dashboard/>*!/*/}

      {/*  <Switch>*/}
      {/*    <Route  path="/market" component={Dashboard}/>*/}
      {/*    <Route path="/signup" component={SignUp}/>*/}
      {/*    <Route path="/userpage" component={UserPage}/>*/}
      {/*    <Redirect to="/market"/>*/}
      {/*  </Switch>*/}
      </Router>
    </>
  );
}
