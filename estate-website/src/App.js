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

function App() {
  return (
      <>
      <NavAppBar/>
      {/*<LogInForm/>*/}
      <AddUser/>
      {/*{*/}
      {/*    <Switch>*/}
      {/*      <Route path="/admin">*/}
      {/*        <Admin />*/}
      {/*      </Route>*/}
      {/*      <Route path="/user">*/}
      {/*        <User />*/}
      {/*      </Route>*/}
      {/*      <Redirect to="/login" />*/}
      {/*    </Switch>*/}
      {/*}*/}
</>
  );
}

export default App;
