import React, { useState } from "react";
import './respond.css';

export default function Respond() {
  const [incidentType, setIncidentType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log({
      incidentType,
      location,
      description,
      contact
    });
    // Clear form fields after submission
    setIncidentType("");
    setLocation("");
    setDescription("");
    setContact("");
  };

  return (
    <div className="container">
      <h2 className="respondHead">Report Incident</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <label>Incident Type:</label>
          <input
            type="text"
            value={incidentType}
            onChange={(e) => setIncidentType(e.target.value)}
            required
          />
        </div>
        <div className="user-box">
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="user-box">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="user-box">
          <label>Contact:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <button className="respondbtn" type="submit">Send</button>
      </form>
    </div>
  );
}
