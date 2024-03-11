import React, { useState} from "react";
import Table from "./Table";

import "./home.css";
import { TbReport } from "react-icons/tb";
import { MdReport } from "react-icons/md";

export default function Home() {
  // const navigate = useNavigate();
  // const context = useContext(projectContext);
  // const { users, fetchUsers } = context;

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login");
  //   } else {
  //     if (fetchUsers) fetchUsers();
  //   }
  // }, [navigate, fetchUsers]);

  // if (!isLoggedIn) {
  //   // Redirect to login page
  //   return null; // or loading spinner or some other UI element
  // }

  const [events, setEvents] = useState([
    { id: 1, time: "10:00 AM", location: "ABC Hall", category: "Category 1" },
    {
      id: 2,
      time: "12:00 PM",
      location: "XYZ Theater",
      category: "Category 2",
    },
    {
      id: 3,
      time: "02:00 PM",
      location: "Main Street",
      category: "Category 3",
    },
    {
      id: 4,
      time: "12:00 PM",
      location: "XYZ Theater",
      category: "Category 2",
    },
    {
      id: 5,
      time: "02:00 PM",
      location: "Main Street",
      category: "Category 3",
    },
    { id: 6, time: "10:00 AM", location: "ABC Hall", category: "Category 1" },
    {
      id: 7,
      time: "12:00 PM",
      location: "XYZ Theater",
      category: "Category 2",
    },
    // More events can be added here
  ]);

  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleFilter = (category) => {
    if (category === "all") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event) => event.category === category);
      setFilteredEvents(filtered);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Left part */}
      <div className="leftPart">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* Reports */}
          <div className="box">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: "13px", paddingBottom: "10px" }}>
                  Reports
                </p>
                <TbReport style={{ color: "#ff2bb8", fontSize: "24px" }} />
              </div>
              <div>
                <p style={{ color: "#db0033", paddingBottom: "10px" }}>
                  25.05%
                </p>
                <p>1452</p>
              </div>
            </div>
          </div>
          {/* Processing */}
          <div className="box">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: "13px", paddingBottom: "10px" }}>
                  Processing
                </p>
                <MdReport style={{ color: "#fcc200", fontSize: "24px" }} />
              </div>
              <div>
                <p style={{ color: "#00e813", paddingBottom: "10px" }}>
                  15.62%
                </p>
                <p>42</p>
              </div>
            </div>
          </div>
        </div>
        {/* Alerts */}
        <div className="alertBox">
          <div className="alertHead">
            <p className="headAlert">
              <span className="low dor">.</span>{" "}
              <span className="mid dor">.</span>{" "}
              <span className="high dor">.</span>{" "}
              <span className="alert">Alerts</span>{" "}
              <span className="high dor">.</span>{" "}
              <span className="mid dor">.</span>{" "}
              <span className="low dor">.</span>
            </p>
          </div>
          {/* Buttons */}
          <div>
            <div>
              <button onClick={() => handleFilter("all")}>All</button>
              <button onClick={() => handleFilter("Category 1")}>
                Category 1
              </button>
              <button onClick={() => handleFilter("Category 2")}>
                Category 2
              </button>
              <button onClick={() => handleFilter("Category 3")}>
                Category 3
              </button>
            </div>
            <div>
              <Table events={filteredEvents} />
            </div>
          </div>
        </div>
      </div>
      {/* Right part */}
      <div className="rightPart">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1123.2340774613274!2d76.8509401794012!3d23.077354651357073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVIT%20Bhopal%20University!5e0!3m2!1sen!2sin!4v1709466648157!5m2!1sen!2sin&night_mode=dark"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
