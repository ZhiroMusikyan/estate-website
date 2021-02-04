import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  root: {
    border: "1px solid black",
    borderRadius: "5px!important",
    padding: "20px",
    position: "absolute",
    textAlign: "center",
    width: "300px",
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "lightgray",
  },
  button: {
    width: 60,
    margin: 15,
  },
}));

export default function AddUser() {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function addUser(event) {
    debugger;
  }

  function genInputHandler(event, set) {
      set(event.target.value);
      console.log(firstName);
  }

  return (
    <div className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="standard-text-input"
          label="FirstName"
          type="text"
          value={firstName}
          onChange={e => genInputHandler(e, setFirstName)}
          autoComplete="current-text"
        />
        <TextField
          id="standard-text-input"
          label="LastName"
          value={lastName}
          onChange={e => genInputHandler(e, setLastName)}
          type="text"
          autoComplete="current-text"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          value={password}
          onChange={e => genInputHandler(e, setPassword)}
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="standard-email-input"
          label="Email"
          value={email}
          onChange={e => genInputHandler(e, setEmail)}
          type="email"
          name="email"
          autoComplete="email"
        />
      </form>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={addUser}
      >
        save
      </Button>
      <Button className={classes.button} variant="outlined" color="secondary">
        cancel
      </Button>
    </div>
  );
}
