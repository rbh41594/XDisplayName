import React, { useState } from "react";
import "./App.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  const handleInvalid = (event) => {
    event.target.setCustomValidity("Please fill out this field.");
  };

  const handleInput = (event) => {
    event.target.setCustomValidity("");
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onInvalid={handleInvalid}
            onInput={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstname">Last Name:</label>
          <input
            type="text"
            id="firstname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onInvalid={handleInvalid}
            onInput={handleInput}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <p>Full Name:{fullName}</p>
      )}
    </div>
  );
};

export default Form;
