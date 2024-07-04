import React, { useState } from "react";
import "./App.css";

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      setFullName('');
    }
  };

  return (
    <div className="form-container">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onInvalid={(e) => e.target.setCustomValidity('Please fill out this field.')}
            onInput={(e) => e.target.setCustomValidity('')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onInvalid={(e) => e.target.setCustomValidity('Please fill out this field.')}
            onInput={(e) => e.target.setCustomValidity('')}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default Form;
