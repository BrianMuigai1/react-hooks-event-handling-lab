// Code Keypad Component Here
import React from "react";

function Keypad() {
  function Change(event) {
    console.log("Entering password...");
  }
  return (
    <div>
      <input type="password" name="password" onChange={Change} placeholder="Enter Password.." />
    </div>
  );
}

export default Keypad;
