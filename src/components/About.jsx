import React from "react";
import './about.css';

export default function About() {
  return (
    <div>
      <h2 className="aboutHead">About Us</h2>
      <div className="about-box">
        <p className="para">
          Welcome to Emergency Response System, your go-to platform for
          emergency response solutions. At Emergency Response System, we are
          dedicated to revolutionizing the way emergency situations are handled,
          making communities safer and more resilient.
        </p>
        <p  className="para">
          Our team brings together expertise in areas such as machine learning, IoT, and web
          development to create innovative solutions tailored to the unique
          needs of our users.
        </p>
        <p  className="para">
          At Emergency Response System, we believe in the power of collaboration
          and community. We work closely with emergency responders, government
          agencies, and community organizations to develop solutions that
          address real-world challenges and make a meaningful impact.
        </p>
        
        <p  className="para">Whether you're a first responder, a community member, or an organization
        looking to enhance your emergency preparedness, Emergency Response
        System is here to support you every step of the way. Together, we can
        build safer and more resilient communities for generations to come. Join
        us on our mission to make the world a safer place.</p>
      </div>
    </div>
  );
}
