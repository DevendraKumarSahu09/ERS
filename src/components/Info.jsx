import React from "react";
import "./info.css";

export default function Info() {
  return (
    <div>
      <h2 className="infoHead">Emergency Information</h2>
      <div className="info-content">
        <p>Access real-time emergency information to stay informed and safe.</p>

        <h3 className="info-subhead">1. Emergency Contacts</h3>
        <ul className="list">
          <li>
            Town Security: Phone: 555-1234 | Email:{" "}
            <a href="mailto:town@emergencybhopal.ac.in">
              town@emergencybhopal.ac.in
            </a>
          </li>
          <li>Local Police: Phone: 911 | Address: Main Street, Bhopal</li>
          <li>Medical Emergency: Phone: 9906589XXX (AIIMS Bhopal)</li>
        </ul>

        <h3 className="info-subhead">2. Emergency Procedures</h3>
        <ul className="list">
          <li>
            (i) Fire Emergency: In case of fire, follow evacuation routes to
            designated assembly points. Do not use elevators during a fire
            emergency.
          </li>
          <li>
            (ii) Natural Disasters: For earthquakes, seek shelter under sturdy
            furniture. Follow designated routes during floods. Stay informed
            about hurricane procedures.
          </li>
          <li>
            (iii) Medical Emergencies: Administer basic first aid. Locate first
            aid kits placed in common areas and know the locations of automated
            external defibrillators (AEDs).
          </li>
        </ul>

        <h3 className="info-subhead">3. Communication Plan</h3>
        <ul className="list">
          <li>
            (i) Emergency Notification System: Receive alerts through the
            college app, text messages, and email. Listen for sirens on campus.
          </li>
          <li>
            (ii) Communication Protocols: Use designated communication channels
            and follow instructions from campus authorities during emergencies.
          </li>
        </ul>

        <h3 className="info-subhead">4. Important Resources</h3>
        <ul className="list">
          <li>
            (i) Campus Map: Explore the interactive map to locate emergency
            resources, exits, and safe zones in Bhopal.
          </li>
        </ul>
      </div>
    </div>
  );
}
