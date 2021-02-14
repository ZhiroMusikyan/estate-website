import React from "react";
import  '../App.css'

export default function LogIn(props) {
    function handleOnClick(event) {
        window.location = "/admin";
    }
  return (
    <div>
      <div className={"login_block"}>
          <input type={"text"} placeholder={"email"}/>
          <input type={"password"} placeholder={"password"}/>
          <input type={"submit"}/>
      </div>
    </div>
  );
}
