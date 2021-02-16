import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "blue",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const history = useHistory();

  function handleLogIn(e) {
    history.push("login");
  }
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          {/*<IconButton*/}
          {/*  edge="start"*/}
          {/*  className={classes.menuButton}*/}
          {/*  color="inherit"*/}
          {/*  aria-label="menu"*/}
          {/*>*/}
          {/*</IconButton>*/}
          <Typography variant="h6" className={classes.title}>
            Estate Market:
          </Typography>
          <Button color="inherit" onClick={handleLogIn}>Log In</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
